export type YearStore = {
  year:
    | null
    | { data: number | 0; week: number; dayOfWeek: number; month: number }[];
  week:
    | null
    | { data: number | 0; week: number; dayOfWeek: number; month: number }[];
  month:
    | null
    | { data: number | 0; week: number; dayOfWeek: number; month: number }[];
  getMonth: (
    yearData:
      | { data: number | 0; week: number; dayOfWeek: number; month: number }[]
      | null
  ) => void;
  getYear: (yearData: number) => void;
  getWeek: (
    yearData: {
      data: number | 0;
      week: number;
      dayOfWeek: number;
      month: number;
    }[] | null
  ) => void;
};
