export function loadIntervalImage(interval: string, color: string): string {
  return new URL(`/src/assets/images/intervals/${interval}_${color}.png`, import.meta.url).href
}
