import { useEffect, useState } from "react";

// Formato 'AAAA-MM'
const formatDateYYYYMM = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
};

// Formato 'DD/MM/AAAA'
export const formatDateDDMMYYYY = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const useDateFormatter = (date = new Date()) => {
  const [formattedDates, setFormattedDates] = useState({
    yyyyMM: "",
    ddMMyyyy: "",
  });

  useEffect(() => {
    const formattedYYYYMM = formatDateYYYYMM(date);
    const formattedDDMMYYYY = formatDateDDMMYYYY(date);

    const formattedDate = {
      yyyyMM: formattedYYYYMM,
      ddMMyyyy: formattedDDMMYYYY,
    };

    setFormattedDates(formattedDate);
  }, [date]);

  return formattedDates;
};