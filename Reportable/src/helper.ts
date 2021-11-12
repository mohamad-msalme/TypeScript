
/**
 * this function check if the formate of date is yy/mm/dd or dd/mm/yy
 * @param stringDate : string 
 * @returns boolean 
 */
const isValidDate = (stringDate: string): boolean => !(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(stringDate))

/**
 * convert the date as string to Date 
 * @param stringDate string
 * @returns Date
 */
export const dateStringToDate = (stringDate: string) : Date => 
  isValidDate(stringDate) 
  ? new Date(stringDate) 
  : new Date(stringDate
    .split('/')
    .reverse()
    .map((value, index) => index === 1 ? +value - 1 : +value)
    .join('/'))
