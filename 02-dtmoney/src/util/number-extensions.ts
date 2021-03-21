/**
 * Function to format a number according to user locale
 *
 * @param value value to be formated
 * @param language user locale language
 * @param type currency type
 * @returns string
 */
export function formatNumberToCurrency(
  value: number,
  language: string,
  type: string
): string {
  return new Intl.NumberFormat(language, {
    style: "currency",
    currency: type,
  }).format(value);
}
