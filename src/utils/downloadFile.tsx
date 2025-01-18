import * as XLSX from "xlsx";
import { FileExtensions, getParsedDate } from ".";
import { addDays, isValid } from "date-fns";

export type DownloadFileArgsType = {
  base64: string;
  contentType: FileExtensions;
  fileName: string;
};

export const downloadFile = ({
  base64,
  fileName,
  contentType,
}: DownloadFileArgsType) => {
  const fileNameWithExtension = `${fileName}.${contentType.toLowerCase()}`;

  // Convierte el base64 en un array buffer
  const arrayBuffer = Uint8Array.from(atob(base64), (c) =>
    c.charCodeAt(0),
  ).buffer;

  // Crea una nueva instancia de workbook
  const workbook = XLSX.read(arrayBuffer, { type: "array" });

  if (contentType === FileExtensions.xlsx) {
    // Convierte el workbook en un archivo .xlsx
    const xlsxData = XLSX.write(workbook, { type: "binary" });

    // Convierte el archivo .xlsx en un blob
    const blob = new Blob([stringToArrayBuffer(xlsxData)], {
      type: "application/octet-stream",
    });

    createAndOpenDownloadLink(blob, fileNameWithExtension);
  } else if (contentType === FileExtensions.csv) {
    // Obtiene el nombre de la primera hoja del workbook
    const firstSheetName = workbook.SheetNames[0];

    // Obtiene la data de la primera hoja del workbook
    const worksheet = workbook.Sheets[firstSheetName];

    // Formatea las fechas en el worksheet
    const worksheetWithParsedDates = formatDates(worksheet);

    // Convierte la hoja en formato CSV
    const csvData = XLSX.utils.sheet_to_csv(worksheetWithParsedDates);

    // Convierte el archivo CSV en un blob
    const blob = new Blob([csvData], { type: "text/csv" });

    createAndOpenDownloadLink(blob, fileNameWithExtension);
  }
};

const createAndOpenDownloadLink = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();

  URL.revokeObjectURL(url);
};

const stringToArrayBuffer = (s: string) => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
};

// Define una función para formatear las fechas en el formato deseado
const formatDates = (ws: XLSX.WorkSheet): XLSX.WorkSheet => {
  // Itera sobre todas las celdas de la hoja

  Object.keys(ws).forEach((cell) => {
    // Si la celda contiene una fecha, formatea la fecha
    if (
      //Tener en cuenta que solo valida para la columna D
      cell.startsWith("D") &&
      ws[cell].t === "n" &&
      isValid(new Date(ws[cell].w))
    ) {
      const formattedDate = getParsedDate(addDays(new Date(ws[cell].w), 1));
      ws[cell].w = formattedDate;
    }
  });

  return ws;
};

export const fileExtensions: Record<string, string> = {
  ".aac": "audio/aac",
  ".abw": "application/x-abiword",
  ".arc": "application/x-freearc",
  ".avi": "video/x-msvideo",
  ".azw": "application/vnd.amazon.ebook",
  ".bin": "application/octet-stream",
  ".bmp": "image/bmp",
  ".bz": "application/x-bzip",
  ".bz2": "application/x-bzip2",
  ".csh": "application/x-csh",
  ".css": "text/css",
  ".csv": "text/csv",
  ".doc": "application/msword",
  ".docx":
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".eot": "application/vnd.ms-fontobject",
  ".epub": "application/epub+zip",
  ".gz": "application/gzip",
  ".gif": "image/gif",
  ".htm": "text/html",
  ".html": "text/html",
  ".ico": "image/vnd.microsoft.icon",
  ".ics": "text/calendar",
  ".jar": "application/java-archive",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript, per the following specifications:",
  ".json": "application/json",
  ".jsonld": "application/ld+json",
  ".mid": "audio/midi",
  ".midi": "audio/midi",
  ".mjs": "text/javascript",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
  ".mpeg": "video/mpeg",
  ".mpkg": "application/vnd.apple.installer+xml",
  ".odp": "application/vnd.oasis.opendocument.presentation",
  ".ods": "application/vnd.oasis.opendocument.spreadsheet",
  ".odt": "application/vnd.oasis.opendocument.text",
  ".oga": "audio/ogg",
  ".ogv": "video/ogg",
  ".ogx": "application/ogg",
  ".opus": "audio/opus",
  ".otf": "font/otf",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".php": "application/x-httpd-php",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx":
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".rar": "application/vnd.rar",
  ".rtf": "application/rtf",
  ".sh": "application/x-sh",
  ".svg": "image/svg+xml",
  ".swf": "application/x-shockwave-flash",
  ".tar": "application/x-tar",
  ".tif": "image/tiff",
  ".tiff": "image/tiff",
  ".ts": "video/mp2t",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".vsd": "application/vnd.visio",
  ".wav": "audio/wav",
  ".weba": "audio/webm",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xhtml": "application/xhtml+xml",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".xml": "text/xml",
  ".xul": "application/vnd.mozilla.xul+xml",
  ".zip": "application/zip",
  ".3g2": "video/3gpp2",
  ".7z": "application/x-7z-compressed",
};
