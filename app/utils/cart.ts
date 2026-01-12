// ~/utils/index.ts

/**
 * Склеює CSS-класи з умовами
 * Працює без Tailwind
 * SSR-safe
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ")
}

/**
 * Безпечне порівняння масивів рядків
 * Порядок важливий (color + size)
 */
export function compareArrays(
  a: readonly string[],
  b: readonly string[]
): boolean {
  if (a.length !== b.length) return false

  return a.every((value, index) => value === b[index])
}
