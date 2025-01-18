export const applyConditionalStyle = (
  attribute: string,
  trueStyle: string,
  falseStyle: string,
) => (attribute === "true" ? trueStyle : falseStyle);
