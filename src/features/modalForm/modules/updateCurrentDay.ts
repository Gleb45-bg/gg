import { BaseDirectory, writeTextFile } from "@tauri-apps/plugin-fs";
import { DateTime } from "luxon";

export const updateCurrentDay = async (
  newValue: number,
  year: { data: number | 0; week: number; dayOfWeek: number; month: number }[],
): Promise<void> => {
  const currentTime = DateTime.now()
  const newYear = year
  newYear[currentTime.ordinal-1].data=newValue
  await writeTextFile(`data/year${currentTime.year}.json`, JSON.stringify(newYear), {
    baseDir: BaseDirectory.AppData,
  });
};
