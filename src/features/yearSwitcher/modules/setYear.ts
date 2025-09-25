export const setYear = (
  yearControl: (yearNumber: number) => void,
  selectedYear: number
) => {
  yearControl(selectedYear);
};
