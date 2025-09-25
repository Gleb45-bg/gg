import { DateTime } from "luxon";
import { getLWeek } from "./weekFuncs/getLWeek";
import { getWeek } from "./weekFuncs/getWeek";

export const weekControll = async (
  yearData:
    | {
        data: number;
        week: number;
        dayOfWeek: number;
        month: number;
      }[]
    | null
): Promise<
  | {
      data: number;
      week: number;
      dayOfWeek: number;
      month: number;
    }[]
  | null
> => {
  if (yearData) {
    const currentDate = DateTime.now();
    if (currentDate.weekNumber == currentDate.weeksInWeekYear) {
      return getLWeek(yearData);
    } else {
      return getWeek(yearData);
    }
  }else{
    return null
  }
};
