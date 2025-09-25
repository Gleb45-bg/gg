import { DateTime } from "luxon";

export const currentDayCheck = (
  yearData:
    | {
        data: number;
        week: number;
        dayOfWeek: number;
        month: number;
      }[]
    | null
): boolean | null => {
  const currentTime = DateTime.now();
  if (yearData) {
    const currentDay = yearData[currentTime.ordinal-1]
    if (currentDay) {
      if (currentDay.data) {
        return true;
      } else {
        return false;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};
