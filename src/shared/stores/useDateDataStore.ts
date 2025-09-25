import { create } from "zustand";
import { YearStore } from "./modules/yearStoreTypes";
import { yearControll } from "../dateFuncs/year/yearControll";
import { weekControll } from "../dateFuncs/week/weekDataControll";
import { getMonth } from "../dateFuncs/month/getMonth";

export const useDateDataStore = create<YearStore>((set) => ({
  year: null,
  week: null,
  month: null,
  getYear: async (yearData) => set({ year: await yearControll(yearData) }),
  getMonth: (yearData) => set({ month: getMonth(yearData) }),
  getWeek: async (yearData) => set({ week: await weekControll(yearData) }),
}));
