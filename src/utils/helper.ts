import { format } from 'date-fns';

export const transformTemp = (tempVal: number, tempUtil: string) => {
  switch(tempUtil) {
    case 'F':
      return (tempVal - 32) * 5 / 9;
    case 'C':
      return tempVal * 9 / 5 + 32 ;
    default:
      return `${tempVal} ${tempUtil}`
  }
};

export const formatDate = (dateVal:string | undefined) => {
  if (dateVal) {
    return format(new Date(dateVal), 'EEEE');
  }
  return 'There is no date'
};