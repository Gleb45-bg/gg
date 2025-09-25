import { DAYS_OF_WEEK } from "../../../shared/consts/daysOfWeek";
import { MONTHS } from "../../../shared/consts/monthsNames";

export const getGraphicData = (
  year:
    | {
        data: number;
        week: number;
        dayOfWeek: number;
        month: number;
      }[]
    | null,
  month:
    | {
        data: number;
        week: number;
        dayOfWeek: number;
        month: number;
      }[]
    | null,
  week:
    | {
        data: number;
        week: number;
        dayOfWeek: number;
        month: number;
      }[]
    | null,
  selectedData: 1 | 2 | 3
):
  | {
      name: string;
      value: number;
    }[]
  | null => {
  const graphData: {
    name: string;
    value: number;
  }[] = [];
  if (selectedData == 1 && year && week) {
    if (week) {
      for (let i = 0; i < 7; i++) {
        graphData.push({
          name: DAYS_OF_WEEK[week[i].dayOfWeek],
          value: week[i].data,
        });
      }
    }
  } else if (selectedData == 2 && year && month) {
    for (let i = 0; i < month.length; i++) {
      graphData.push({ name: `${i+1}`, value: month[i].data });
    }
  } else if (selectedData == 3 && year) {
    for (let i = 0; i < 12; i++) {
      const currentMonth = year.filter((el) => el.month == i);
      const monthGlobal = currentMonth.reduce((ac, curVal) => {
        return curVal.data + ac;
      }, 0);
      graphData.push({ name: MONTHS[i], value: monthGlobal });
    }
  } else {
    return null;
  }
  return graphData;
};
