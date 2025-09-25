import { DateTime } from "luxon";

export const getMonth = (
  yearData:
    | {
        data: number | 0;
        week: number;
        dayOfWeek: number;
        month: number;
      }[]
    | null
):
  | {
      data: number | 0;
      week: number;
      dayOfWeek: number;
      month: number;
    }[]
  | null => {
  if (yearData) {
    console.log('dsfsdf')
    const currentDate = DateTime.now();
    return yearData.filter((el) => el.month == currentDate.month);
  } else {
    return null;
  }
};
