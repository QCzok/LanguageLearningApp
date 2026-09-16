<#
.SYNOPSIS
  Sprachausgabe über die in Windows installierten Stimmen (System.Speech).

.DESCRIPTION
  Gegenstück zur OpenAI-Sprachsynthese in generate-media-audio.ts: Wer keinen
  API-Schlüssel hat, erzeugt die Aufnahmen der Mediathek hiermit lokal und
  kostenlos. Die Qualität liegt hörbar unter der eines heutigen TTS-Modells –
  für eine Vorschau reicht sie, als endgültige Hörvorlage einer Sprachlern-App
  eher nicht.

  Zwei Betriebsarten:

    -List                     gibt die installierten Stimmen als JSON aus
    -TextFile … -OutFile …    synthetisiert eine Zeile in eine WAV-Datei

  Der zu sprechende Text kommt bewusst aus einer Datei und nicht als Argument:
  Über die Kommandozeile gingen Anführungszeichen, Zeilenumbrüche und
  Sonderzeichen wie „ñ" oder „ß" je nach Codepage verloren – genau die Zeichen
  also, um die es hier geht.

.NOTES
  Die Ausgabe ist WAV, weil System.Speech nichts anderes kann. Die Umwandlung
  nach MP3 übernimmt ffmpeg im aufrufenden Skript.
#>
[CmdletBinding(DefaultParameterSetName = 'Speak')]
param(
  [Parameter(ParameterSetName = 'List', Mandatory = $true)]
  [switch]$List,

  [Parameter(ParameterSetName = 'Speak', Mandatory = $true)]
  [string]$TextFile,

  [Parameter(ParameterSetName = 'Speak', Mandatory = $true)]
  [string]$OutFile,

  [Parameter(ParameterSetName = 'Speak', Mandatory = $true)]
  [string]$Voice,

  # System.Speech kennt -10 bis 10. 0 ist die normale Geschwindigkeit.
  [Parameter(ParameterSetName = 'Speak')]
  [ValidateRange(-10, 10)]
  [int]$Rate = 0
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech

if ($List) {
  $synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
  try {
    $voices = @($synth.GetInstalledVoices() | Where-Object { $_.Enabled } | ForEach-Object {
      $info = $_.VoiceInfo
      [ordered]@{
        name    = $info.Name
        culture = $info.Culture.Name
        gender  = $info.Gender.ToString()
      }
    })
    # -Depth, damit verschachtelte Objekte nicht als Typname erscheinen.
    # Das Array-Literal oben hält die Ausgabe auch bei genau einer Stimme
    # ein JSON-Array statt eines Einzelobjekts.
    ConvertTo-Json -InputObject $voices -Depth 3 -Compress
  } finally {
    $synth.Dispose()
  }
  return
}

$text = [System.IO.File]::ReadAllText($TextFile, [System.Text.Encoding]::UTF8)
if ([string]::IsNullOrWhiteSpace($text)) { throw "Der Text in $TextFile ist leer." }

$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
try {
  # Wirft, wenn die Stimme fehlt – besser ein klarer Abbruch als eine
  # Aufnahme, die stillschweigend die Standardstimme verwendet und damit
  # womöglich die falsche Sprache spricht.
  $synth.SelectVoice($Voice)
  $synth.Rate = $Rate
  $synth.SetOutputToWaveFile($OutFile)
  $synth.Speak($text)
} finally {
  $synth.Dispose()
}
