import { memo, useEffect, useState } from "react";
import { useDateDataStore } from "../../../shared/stores/useDateDataStore";
import { useSelectedData } from "../../../shared/stores/selectedData";

export const Statistic = memo(() => {
  const year = useDateDataStore((store) => store.year);
  const month = useDateDataStore((store) => store.month);
  const week = useDateDataStore((store) => store.week);
  const selected = useSelectedData((store) => store.selectedData);
  const [all, setAll] = useState(0);
  const [sr, setSr] = useState(0);

  useEffect(() => {
    if (year && selected == 3) {
      let all = 0;
      let sr = 0;
      for (let i = 0; i < year.length; i++) {
        all += year[i].data;
        sr += year[i].data;
      }
      setAll(all);
      setSr(Math.round(sr / year.length));
    }
    if (month && selected == 2) {
      let all = 0;
      let sr = 0;
      for (let i = 0; i < month.length; i++) {
        all += month[i].data;
        sr += month[i].data;
      }
      setAll(all);
      setSr(Math.round(sr / month.length));
    }
    if (week && selected == 1) {
      let all = 0;
      let sr = 0;
      for (let i = 0; i < week.length; i++) {
        all += week[i].data;
        sr += week[i].data;
      }
      setAll(all);
      setSr(Math.round(sr / week.length));
    }
  }, [year, month, selected, week]);

  return (
    <div className="stat-main-block">
      <div>
        <h2>{all}</h2>
        <p>Кроків за {selected == 3 ? "рік" : selected == 2 ? "місяць" : 'день'}</p>
      </div>
      <div>
        <h2>{sr}</h2>
        <p>В середньому кроків за день</p>
      </div>
    </div>
  );
});
