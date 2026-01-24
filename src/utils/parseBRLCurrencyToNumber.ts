export function parseBRLCurrencyToNumber(value: string): number {
  const clean = (value || '').trim();
  if (!clean) return 0;

  const normalized = clean
    .replace(/\s/g, '')
    .replace('R$', '')
    .replace(/\./g, '')
    .replace(',', '.');

  const n = Number(normalized);
  return Number.isFinite(n) ? n : 0;
}
