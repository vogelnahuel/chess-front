export const formatToCapitalize = (value: string = ""): string => {
  return (
    value
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()) || ""
  );
};

export const cleanseAndNormalizeString = (str: string) =>
  str.toLowerCase().replace(/[\s-[\]{}()*+?.\\^$|]/g, "");
