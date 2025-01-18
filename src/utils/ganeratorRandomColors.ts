import { colors } from "../theme/tokens";

export const generateRandomColors = (totalColors: number = 6) => {
  const colors = [];
  const hexChars = "0123456789ABCDEF";

  for (let i = 0; i < totalColors; i++) {
    let color = "#";
    for (let j = 0; j < totalColors; j++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }

  return colors;
};

export const serieColors = [
  colors.blue[500],
  colors.blue[600],
  colors.violet[600],
  colors.violet[500],
  colors.cyan[500],
  colors.cyan[600],
  colors.green[500],
  colors.green[600],
  colors.emerald[500],
  colors.emerald[600],
  colors.lime[500],
  colors.lime[600],
  colors.yellow[600],
  colors.yellow[500],
  colors.orange[600],
  colors.orange[500],
  colors.rose[500],
  colors.rose[600],
];
