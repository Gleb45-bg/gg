import { ModalClose } from "../../../features/modalClose/ui/modalClose";
import { ModalForm } from "../../../features/modalForm/ui/modalForm";
import { useDayDataSetterModalState } from "../../../shared/stores/dayDataSetterModalState";
import { useDateDataStore } from "../../../shared/stores/useDateDataStore";
import { currentDayCheck } from "../modules/checkCurrecntDay/currentDayCheck";

export const dayDataSetterModal = () => {
  const modalState = useDayDataSetterModalState((store) => store.state);
  const yearData = useDateDataStore((store) => store.year);
  const dayIsAlreadySetted: boolean | null = currentDayCheck(yearData);
  if (yearData && dayIsAlreadySetted == true || false) {
    return (
      <div style={{ display: modalState ? "flex" : "none" }}>
        <div>
          <ModalClose />
        </div>
        <ModalForm dayIsAlreadySetted={dayIsAlreadySetted} />
      </div>
    );
  }else{
    return <h2>Щось пішло не так</h2>
  }
};
