import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useDateDataStore } from "../../../shared/stores/useDateDataStore";
import { useSelectedData } from "../../../shared/stores/selectedData";
import { useEffect, useState } from "react";
import { getGraphicData } from "../modules/getGraphicData";

export const Graphic = () => {
  const year = useDateDataStore((store) => store.year);
  const month = useDateDataStore((store) => store.month);
  const week = useDateDataStore((store) => store.week);
  const selected = useSelectedData((store) => store.selectedData);
  const [selArr, setSelArr] = useState<
    { name: string; value: number }[] | null
  >(null);
  useEffect(() => {
    const graphData = getGraphicData(year, month, week, selected);
    setSelArr(graphData);
  }, [month, year, selected, week]);
  if (selArr) {
    return (
      <BarChart data={selArr}>
        <Bar dataKey="value" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    );
  }else{
    return <h2>Щось пішло не так</h2>
  }
};
