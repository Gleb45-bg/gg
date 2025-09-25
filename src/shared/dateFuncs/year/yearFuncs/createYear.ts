import { DateTime } from "luxon";
import {
  create,
  BaseDirectory,
  writeTextFile,
  mkdir,
} from "@tauri-apps/plugin-fs";
export const createYear = async (yearNumber: number) => {
  console.log("dfsdfds");
  const fileYear = DateTime.fromObject({ year: yearNumber }).daysInYear;
  const newTimeData: {
    data: number | 0;
    week: number;
    dayOfWeek: number;
    month: number;
  }[] = [];
  await mkdir("data", {
    baseDir: BaseDirectory.AppData,
    recursive: true
  });
  const file = await create(`data/year${yearNumber}.json`, {
    baseDir: BaseDirectory.AppData,
  });
  console.log(file)

  for (let i = 1; i < fileYear + 1; i++) {
    const currentYearData = DateTime.fromObject({
      year: yearNumber,
      ordinal: i,
    });

    
    newTimeData.push({
      data: 0,
      week: currentYearData.weekNumber,
      dayOfWeek: currentYearData.weekday,
      month: currentYearData.month,
    });
  }
  await writeTextFile(
    `data/year${yearNumber}.json`,
    JSON.stringify(newTimeData),
    {
      baseDir: BaseDirectory.AppData,
    }
  );
};
