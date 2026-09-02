export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string {
  let hasMiddleName = middleName !== undefined && middleName !== null && middleName !== "";

  if (hasMiddleName) {
    let initial = middleName!.charAt(0);
    return lastName + ", " + firstName + " " + initial + ".";
  }
  return '';
}
