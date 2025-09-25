import { BaseDirectory, readTextFile } from "@tauri-apps/plugin-fs";

export const getYear = async (
  year: number
): Promise<{ data: number | 0; week: number; dayOfWeek: number; month: number }[] | null> => {
  try {
    return JSON.parse(
      await readTextFile(`data/year${year}.json`, {
        baseDir: BaseDirectory.AppData,
      })
    );
  } catch {
    return null;
  }
};
