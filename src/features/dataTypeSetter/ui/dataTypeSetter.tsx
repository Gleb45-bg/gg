import { useSelectedData } from "../../../shared/stores/selectedData";

export const DataTypeSetter = () => {
  const setDataType =  useSelectedData((state)=>state.setSelectedData)
  return (
    <div>
      <button onClick={()=>setDataType(1)}>Week</button>
      <button onClick={()=>setDataType(2)}>Month</button>
      <button onClick={()=>setDataType(3)}>Year</button>
    </div>
  );
};
