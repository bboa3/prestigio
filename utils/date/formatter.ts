import dayjs, { Dayjs } from "dayjs";

type DateType = Dayjs | number | string | Date | undefined;

export const formatTimeWithHourSuffix = (date: DateType) => {
  return dayjs(date).format('HH:mm') + 'h';
}

export const formatDateNumeric = (date: DateType) => {
  return dayjs(date).format('DD/MM/YYYY');
}

export const formatDateFullTextual = (date: DateType) => {
  const formattedDate = dayjs(date).format('DD [de] MMMM [de] YYYY');
  return formattedDate.replace(
    /(\sde\s)([a-z])/g,
    (_, separator, firstLetter) => separator + firstLetter.toUpperCase()
  );
}

export const formatDateAbbreviatedMonth = (date: DateType) => {
  const formattedDate = dayjs(date).format('DD MMM YYYY');
  return formattedDate.replace(
    /(\s)([a-z])/g,
    (_, separator, firstLetter) => separator + firstLetter.toUpperCase()
  );
}

export const formatDateTimeNumeric = (date: DateType) => {
  return dayjs(date).format('DD/MM/YYYY HH:mm');
}