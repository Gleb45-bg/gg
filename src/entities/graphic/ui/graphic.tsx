import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
      <ResponsiveContainer>
        <BarChart width={700} height={400} data={selArr}>
          <Bar dataKey="value" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  } else {
    return <h2>Щось пішло не так</h2>;
  }
};
