import { DateTime } from "luxon";
import { Graphic } from "../../../entities/graphic/ui/graphic";
import { DataTypeSetter } from "../../../features/dataTypeSetter/ui/dataTypeSetter";
import { useDateDataStore } from "../../../shared/stores/useDateDataStore";
import { Statistic } from "../../../entities/statistic/ui/stat";
import { useEffect } from "react";
import { YearSwitcher } from "../../../features/yearSwitcher/ui/YearSwitcher";

export const MainDataContent = () => {
  const currentYear = DateTime.now().year;
  const getYear = useDateDataStore((store) => store.getYear);
  const year = useDateDataStore((store) => store.year);
  const getWeek = useDateDataStore((store) => store.getWeek);
  const getMonth = useDateDataStore(store=>store.getMonth)
  useEffect(() => {
    getYear(currentYear);
  }, []);

  useEffect(() => {
    getWeek(year);
    getMonth(year);
  }, [year]);
  /*fsdfsd*/
  return (
    <main>
      <h3>Кроки</h3>
      <YearSwitcher />
      <DataTypeSetter />

      <div>
        <Statistic />
      </div>
    </main>
  );
};
