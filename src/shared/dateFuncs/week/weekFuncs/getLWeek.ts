import { DateTime } from "luxon";
import { yearControll } from "../../year/yearControll";

export const getLWeek = async (
  yearData: {
    data: number | 0;
    week: number;
    dayOfWeek: number;
    month: number;
  }[]
): Promise<
  { data: number | 0; week: number; dayOfWeek: number; month: number }[] | null
> => {
  const currentDate = DateTime.now();
  const partWeek = yearData.filter(
    (el) => el.week == currentDate.weekNumber && el.month == currentDate.month
  );
  try {
    const nextYear:
      | { data: number | 0; week: number; dayOfWeek: number; month: number }[]
      | null = await yearControll(currentDate.year + 1);
    if (nextYear) {
      const nextYearData = DateTime.fromObject({
        year: currentDate.year + 1,
        ordinal: 1,
      });
      const nextPartWeek = nextYear.filter(
        (el) =>
          el.week == nextYearData.weekNumber && el.month == nextYearData.month
      );
      return [...partWeek, ...nextPartWeek];
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
