import { create } from "zustand";
import { DayDataSetterModalStateType } from "./modules/dayDataSetterModalState";
export const useDayDataSetterModalState = create<DayDataSetterModalStateType>((set) => ({
  state: false,
  setState: ()=>set((store)=>({state: !store.state}))
}));
