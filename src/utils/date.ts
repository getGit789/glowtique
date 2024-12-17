import { format, addDays, isBefore, isAfter } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export const getMinDate = (): string => {
  return formatDate(new Date());
};

export const getMaxDate = (): string => {
  return formatDate(addDays(new Date(), 30));
};

export const isDateInRange = (date: string): boolean => {
  const selectedDate = new Date(date);
  const min = new Date(getMinDate());
  const max = new Date(getMaxDate());
  
  return !isBefore(selectedDate, min) && !isAfter(selectedDate, max);
};