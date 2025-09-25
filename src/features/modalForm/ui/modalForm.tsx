import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { updateCurrentDay } from "../modules/updateCurrentDay";
import { useDayDataSetterModalState } from "../../../shared/stores/dayDataSetterModalState";
import { useDateDataStore } from "../../../shared/stores/useDateDataStore";

export const ModalForm = (data: { dayIsAlreadySetted: boolean }) => {
  const yearData = useDateDataStore((store) => store.year);
  const setModalState = useDayDataSetterModalState((store) => store.setState);
  const [inputValue, setInputValue] = useState(0);
  const currentDate = DateTime.now();
  useEffect(() => {
    if (yearData) {
      setInputValue(yearData[currentDate.ordinal - 1].data);
    }
  }, [yearData]);
  if (yearData) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputValue | 0) {
        updateCurrentDay(inputValue, yearData);
        setModalState();
      }
    };
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            if(typeof Number(e.target.value) == 'number'){
              setInputValue(Number(e.target.value))
            }
          }}
        />
        <button type="submit">
          {data.dayIsAlreadySetted ? "Update" : "Set"}
        </button>
      </form>
    );
  }else{
    return 'Щось пішло не так'
  }
};
