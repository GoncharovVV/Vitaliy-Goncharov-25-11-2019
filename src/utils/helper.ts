import { format } from 'date-fns';
export const transformTemp = (tempVal: number, tempUtil: string) => {
  switch(tempUtil) {
    case 'F':
      return `${(tempVal - 32) * 5 / 9} C`;
    case 'C':
      return `${tempVal * 9 / 5 + 32} F`;
    default:
      return `${tempVal} ${tempUtil}`
  }
};
export const formatDate = (dateVal:string | undefined) => {
  if (dateVal) {
    return format(new Date(dateVal), 'MM/dd/yyyy');
  }
  return 'There is no date'
};