import { useDayDataSetterModalState } from "../../../shared/stores/dayDataSetterModalState"
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
export const DayDataSetterBtn = (dayIsAlreadySetted: boolean) => {
    const setModalState = useDayDataSetterModalState((state)=>state.setState)
    return(
        <button onClick={()=>setModalState}>
            {dayIsAlreadySetted ? <UpdateIcon/> : <AddIcon />}
        </button>
    )
}