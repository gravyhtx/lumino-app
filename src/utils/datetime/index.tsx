import type { Months, MonthValue } from "../../types/DateTime";
import { DT_FORMAT, CURRENT_DATE, MONTH_NAMES, CURRENT_YEAR, CURRENT_MONTH_VALUE } from "../../constants";


//* GET CURRENT DAY OF THE YEAR
/**
 * Returns the current day of the year.
 * 
 * @param {Date} d - The date to calculate from.
 * @returns {number} The current day of the year.
 * 
 * @example
 * getDayOfYear(); //=> 174 if the current day is June 23rd, 2023
 */
export const getDayOfYear = (d?: Date): number => {
  d = d ?? CURRENT_DATE;
  return Math.floor((d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
};

//* GET INDEX OF A GIVEN MONTH
/**
 * Retrieves the month number based on the month name.
 * 
 * @param {Months} name - The name of the month.
 * @returns {number} The month number (1-12).
 */
export const monthNumber = (name: Months) => MONTH_NAMES.indexOf(name) + 1;

//* GET NUMBER OF DAYS IN A SPECIFIC MONTH
/**
 * Calculates the number of days in a specific month.
 * 
 * @param {Months} month - The name or number value of the month.
 * @param {number} year - The year.
 * @returns {number} The number of days in the specified month/year.
 */
export const daysInMonth = (month?: Months | MonthValue, year?: number) => new Date(
  Number(year??CURRENT_YEAR),
  Number(month === undefined ? CURRENT_MONTH_VALUE : Number.isNaN(month) ? monthNumber(month as Months) : month as MonthValue),
  0).getDate();

//* GET HOURS/MINUTES IN CALCULATION OR MILITARY TIME
/**
 * Returns the total number of hours and minutes in a calculation or military time format.
 * 
 * @param {number} hour The hour to convert.
 * @param {number} minutes The minutes to convert.
 * @param {object} [opts] Options for time conversion.
 * @param {boolean} [opts.pm=false] If true, converts to PM time.
 * @param {boolean} [opts.military=false] If true, returns the time in military format.
 * @param {boolean} [opts.twentyFourHour=false] If true, returns time in 24-hour format.
 * @param {number} [opts.precision=2] Rounding precision for calculation format.
 * @returns {string|number} The total number of hours and minutes in the specified format.
 * 
 * @example
 * getTimeCalc(14, 30); //=> 14.5
 * getTimeCalc(2, 30, { pm: true }); //=> 14.5
 * getTimeCalc(14, 30, { military: true }); //=> '1430'
 * getTimeCalc(2, 30, { pm: true, twentyFourHour: true }); //=> '14:30'
 */
export const getTimeCalc = (
  hour: number,
  minutes: number,
  opts: {
    pm?: boolean,
    military?: boolean,
    twentyFourHour?: boolean,
    precision?: number
  } = {}
): string | number => {
  const { pm, military, twentyFourHour, precision = 2 } = opts;
  hour = pm === true && hour < 12 ? hour + 12 : hour;
  const totalMinutes = 60;
  const min = !Number.isNaN(minutes) && minutes <= totalMinutes ? Number(minutes) : 0;
  const hr = !Number.isNaN(hour) && ((hour < 24 && min) || (hour === 24 && min === 0)) ? Number(hour) : 0;

  const timeCalc = hr + (min / totalMinutes);

  if (military) {
    const milMin = min < 10 ? `0${min}` : min.toString();
    const milHr = hr < 10 ? `0${hr}` : hr.toString();
    return milHr + milMin;
  } else if (twentyFourHour) {
    const formattedMin = min < 10 ? `0${min}` : min.toString();
    return `${hr}:${formattedMin}`;
  } else {
    return Number(timeCalc.toFixed(precision));
  }
};

//* GET INFORMATION ON USER'S TIMEZONE
/**
 * Returns the user's current time zone.
 * @returns {string} The user's current time zone.
 * 
 * @example
 * getTimeZone(); //=> 'America/Chicago'
 */
export const getTimeZone = (): string => DT_FORMAT.timeZone;


//* GET INFORMATION ON USER'S LOCALE
/**
 * Returns the user's current locale.
 * @returns {string} The user's current locale.
 * 
 * @example
 * getLocale(); //=> 'en-US'
 */
export const getLocale = (): string => DT_FORMAT.locale;