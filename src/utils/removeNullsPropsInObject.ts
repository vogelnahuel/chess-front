export const removeNullsPropsInObject = (objeto: object) => {
  const result = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(objeto).filter(([_, valor]) => valor !== null),
  );

  return result;
};
