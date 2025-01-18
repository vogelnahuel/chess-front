import { parseISO } from "date-fns";
import { TemporalityType } from "../app/services/serieSku";
import { DASH, ONE, THREE, TWO, ZERO_STR } from "../app/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const getYear = (date: Date) => date.getFullYear();
const getMonth = (date: Date) =>
  (date.getMonth() + 1).toString().padStart(TWO, ZERO_STR);
const getDay = (date: Date) =>
  date.getDate().toString().padStart(TWO, ZERO_STR);

const formatDateYYYYMM = (date: Date): string => {
  const year = getYear(date);
  const month = getMonth(date);
  return `${year}${DASH}${month}`;
};

const formatDateYYYYMMDD = (date: Date): string => {
  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);

  return `${year}${DASH}${month}${DASH}${day}`;
};

const formatDateDDMMYY = (date: Date): string => {
  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date).toString().slice(2);

  return `${day}-${month}-${year}`;
};

export enum Format {
  YYYY_MM = "AAAA-MM",
  YYYY_MM_DD = "DD/MM/AAAA",
  DD_MM_YY = "dd-MM-yy",
}

export const dateFormatter = (date: Date, format: Format) => {
  const dateFormated: Record<Format, string> = {
    [Format.YYYY_MM]: formatDateYYYYMM(date),
    [Format.YYYY_MM_DD]: formatDateYYYYMMDD(date),
    [Format.DD_MM_YY]: formatDateDDMMYY(date),
  };

  return dateFormated[format];
};

/**
 * Obtiene un rango de fechas que representa tres años antes y un año desde la fecha actual.
 * @returns Un objeto con las propiedades `dateInit` y `dateEnd`, en formato "AAAA-MM-DD".
 * `dateStart` representa la fecha actual menos tres años, y `dateEnd` representa la fecha actual más un año.
 */
export const getDateRange = () => {
  const currentDate = new Date();
  const oneYearAgo = new Date(currentDate);
  oneYearAgo.setFullYear(currentDate.getFullYear() - THREE);
  const oneYearLater = new Date(currentDate);
  oneYearLater.setFullYear(currentDate.getFullYear() + ONE);

  return { dateInit: oneYearAgo, dateEnd: oneYearLater };
};

export enum Temporality {
  MONTH = "MONTH",
  WEEK = "WEEK",
}

export const translateMonthsWithYears = (
  dates: string[],
  temporality: TemporalityType,
): string[] => {
  if (!dates) return [];

  if (temporality === Temporality.MONTH) {
    const formattedDates: string[] = [];

    const monthNames: string[] = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];

    for (const date of dates) {
      const [year, month] = date.split("-");
      const monthIndex = parseInt(month) - 1;

      formattedDates.push(`${monthNames[monthIndex]} '${year.slice(2, 4)}`);
    }
    return formattedDates;
  }

  if (temporality === Temporality.WEEK) {
    const formattedDates: string[] = dates.map((date) => {
      const parseDate = parseISO(date);
      return dateFormatter(parseDate, Format.DD_MM_YY);
    });
    return [...formattedDates];
  }
  return [];
};

export const getParsedDate = (
  date?: Date | null,
  pattern: string = "yyyy-MM-dd",
) =>
  !date
    ? ""
    : format(date, pattern, {
        locale: es,
      });
