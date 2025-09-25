import { useSelectedData } from "../../../shared/stores/selectedData";

export const DataTypeSetter = () => {
  const setDataType =  useSelectedData((state)=>state.setSelectedData)
  return (
    <div className="sell-btn-cont">
      <button className="sell-btn" onClick={()=>setDataType(1)}>Неділя</button>
      <button className="sell-btn" onClick={()=>setDataType(2)}>Місяць</button>
      <button className="sell-btn" onClick={()=>setDataType(3)}>Рік</button>
    </div>
  );
};
