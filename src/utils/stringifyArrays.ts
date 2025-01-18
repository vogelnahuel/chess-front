export const stringifyIfNotEmpty = (array?: unknown[]): string | null =>
  array?.length ? JSON.stringify(array) : null;
