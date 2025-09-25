import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { getAllYears } from "../modules/getAllYears";
import { DirEntry } from "@tauri-apps/plugin-fs";
import { useDateDataStore } from "../../../shared/stores/useDateDataStore";
import { setYear } from "../modules/setYear";

export const YearSwitcher = () => {
  const currentTime = DateTime.now();
  const yearControl = useDateDataStore(store=>store.getYear)
  const [modalState, setModalState] = useState(false);
  const [allYears, setAllYears] = useState<DirEntry[]>([]);
  useEffect(() => {
    const getYearsList = async () => {
      const years = await getAllYears();
      setAllYears(years);
    };
    getYearsList();
  }, []);
  return (
    <div className="">
      <button onClick={() => setModalState((state) => !state)}>
        {currentTime.year}
        {modalState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </button>
      <div style={{ display: modalState ? "flex" : "none" }}>
        <>
          {allYears.map((el) => {
            const elName: string = el.name
              .replace(/\.[^/.]+$/, "")
              .replace("year", "");

            return <button onClick={(e)=>{
              e.preventDefault()
              setYear(yearControl, Number(elName))
            }}>{elName}</button>;
          })}
        </>
      </div>
    </div>
  );
};
