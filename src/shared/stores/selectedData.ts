import { create } from "zustand";
import { SelectedDataStoreType } from "./modules/selectedDataStoreType";

export const useSelectedData = create<SelectedDataStoreType>()((set)=>({
    selectedData: 1,
    setSelectedData: (newState)=>set({selectedData: newState})
}))