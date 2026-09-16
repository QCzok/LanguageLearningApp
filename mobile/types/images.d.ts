/**
 * Bilddateien als Module. Metro registriert `import bild from './x.png'` in der
 * AssetRegistry und liefert die Registrierungsnummer zurück. Die passt sowohl
 * auf `<Image source={...} />` als auch auf `Asset.loadAsync(...)`.
 */
declare module '*.png' {
  const assetId: number;
  export default assetId;
}

declare module '*.jpg' {
  const assetId: number;
  export default assetId;
}
