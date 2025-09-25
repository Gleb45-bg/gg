import CloseIcon from '@mui/icons-material/Close';
import { useDayDataSetterModalState } from '../../../shared/stores/dayDataSetterModalState';
export const ModalClose = () => {
    const setModalState = useDayDataSetterModalState(store=>store.setState)
    return( 
        <button onClick={()=>setModalState()}>
            <CloseIcon />
        </button>
        
    )
}