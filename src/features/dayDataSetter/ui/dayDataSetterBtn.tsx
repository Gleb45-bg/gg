import { useDayDataSetterModalState } from "../../../shared/stores/dayDataSetterModalState";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
export const DayDataSetterBtn = () => {
  const setModalState = useDayDataSetterModalState((state) => state.setState);
  const f = useDayDataSetterModalState((state) => state.state);

  return (
    <button className="day-data-btn"
      onClick={() => {
        setModalState();
        console.log(f);
      }}
    >
      {<AddIcon />}
    </button>
  );
};
