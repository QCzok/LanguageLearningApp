<#
.SYNOPSIS
  Steuert die portable PostgreSQL-Instanz des Projekts.

.DESCRIPTION
  Die Datenbank liegt vollständig unter LanguageApp/.tools – kein Windows-Dienst,
  keine Registry-Einträge, kein Adminrecht. Zum restlosen Entfernen genügt es,
  den Ordner .tools zu löschen.

.PARAMETER Command
  init   Datenverzeichnis anlegen und Datenbank "lingua" erzeugen (einmalig)
  start  Server starten
  stop   Server anhalten
  status Laufzustand anzeigen
  psql   Interaktive SQL-Konsole öffnen
  reset  Datenverzeichnis löschen und neu initialisieren (alle Daten weg)

.EXAMPLE
  .\scripts\db.ps1 start
#>
param(
  [Parameter(Position = 0)]
  [ValidateSet('init', 'start', 'stop', 'status', 'psql', 'reset')]
  [string]$Command = 'status'
)

$ErrorActionPreference = 'Stop'

$Root    = Split-Path -Parent $PSScriptRoot
$PgBin   = Join-Path $Root '.tools\pgsql\bin'
$PgData  = Join-Path $Root '.tools\pgdata'
$LogFile = Join-Path $Root '.tools\postgres.log'

$DbUser = 'lingua'
$DbPass = 'lingua'
$DbName = 'lingua'
$DbPort = 5432

if (-not (Test-Path $PgBin)) {
  throw "PostgreSQL-Binaries fehlen unter $PgBin. Bitte die Einrichtung erneut ausfuehren."
}

# Ohne diese Variable fragt psql/createdb interaktiv nach dem Passwort.
$env:PGPASSWORD = $DbPass

function Test-Running {
  & "$PgBin\pg_isready.exe" -h localhost -p $DbPort -q 2>$null
  return ($LASTEXITCODE -eq 0)
}

function Initialize-Cluster {
  if (Test-Path $PgData) {
    Write-Host "Datenverzeichnis existiert bereits: $PgData" -ForegroundColor Yellow
    return
  }

  Write-Host 'Lege Datenverzeichnis an...' -ForegroundColor Cyan
  $pwFile = Join-Path $env:TEMP 'lingua-pgpass.txt'
  # initdb liest das Superuser-Passwort nur aus einer Datei, nie aus einem Argument.
  Set-Content -Path $pwFile -Value $DbPass -NoNewline -Encoding ascii
  try {
    & "$PgBin\initdb.exe" -D $PgData -U $DbUser --pwfile=$pwFile --auth=scram-sha-256 --encoding=UTF8 --locale=C | Out-Null
  } finally {
    Remove-Item $pwFile -Force -ErrorAction SilentlyContinue
  }

  Start-Server
  Write-Host "Erzeuge Datenbank '$DbName'..." -ForegroundColor Cyan
  & "$PgBin\createdb.exe" -h localhost -p $DbPort -U $DbUser $DbName
  if ($LASTEXITCODE -ne 0) { throw "Datenbank '$DbName' konnte nicht angelegt werden." }
  Write-Host 'Fertig. Weiter mit: npm run db:migrate' -ForegroundColor Green
}

function Start-Server {
  if (Test-Running) {
    Write-Host "PostgreSQL laeuft bereits auf Port $DbPort." -ForegroundColor Yellow
    return
  }
  Write-Host 'Starte PostgreSQL...' -ForegroundColor Cyan
  # Ohne eigene Ausgabekanäle erbt der Serverprozess stdout des Aufrufers und
  # hält die Konsole offen, bis die Datenbank endet. Start-Process löst das –
  # die beiden Streams brauchen dabei getrennte Ziele, sonst lehnt PowerShell ab.
  # Kein -Wait: pg_ctl startet den Server als Enkelprozess, der die geerbten
  # Handles offen hält – Start-Process würde deshalb nie zurückkehren. Wir warten
  # stattdessen selbst darauf, dass die Datenbank Verbindungen annimmt.
  Start-Process -FilePath "$PgBin\pg_ctl.exe" `
    -ArgumentList @('-D', "`"$PgData`"", '-l', "`"$LogFile`"", '-o', "`"-p $DbPort`"", 'start') `
    -WindowStyle Hidden

  for ($i = 0; $i -lt 40 -and -not (Test-Running); $i++) { Start-Sleep -Milliseconds 500 }

  if (Test-Running) {
    Write-Host "PostgreSQL laeuft auf localhost:$DbPort" -ForegroundColor Green
  } else {
    Write-Host "Start fehlgeschlagen. Log: $LogFile" -ForegroundColor Red
    exit 1
  }
}

function Stop-Server {
  if (-not (Test-Running)) {
    Write-Host 'PostgreSQL laeuft nicht.' -ForegroundColor Yellow
    return
  }
  & "$PgBin\pg_ctl.exe" -D $PgData -w stop | Out-Null
  Write-Host 'PostgreSQL angehalten.' -ForegroundColor Green
}

switch ($Command) {
  'init'  { Initialize-Cluster }
  'start' { Start-Server }
  'stop'  { Stop-Server }
  'psql'  { & "$PgBin\psql.exe" -h localhost -p $DbPort -U $DbUser -d $DbName }
  'reset' {
    if (Test-Running) { Stop-Server }
    Remove-Item $PgData -Recurse -Force -ErrorAction SilentlyContinue
    Initialize-Cluster
  }
  'status' {
    if (Test-Running) {
      Write-Host "laeuft  -  localhost:$DbPort, Datenbank '$DbName'" -ForegroundColor Green
    } else {
      Write-Host 'gestoppt' -ForegroundColor Yellow
      if (-not (Test-Path $PgData)) { Write-Host 'Noch nicht initialisiert: .\scripts\db.ps1 init' }
    }
  }
}
