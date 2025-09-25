import { BaseDirectory, DirEntry, readDir } from "@tauri-apps/plugin-fs";

export const getAllYears = async ():Promise<DirEntry[]> => {
  return await readDir("data/", {
    baseDir: BaseDirectory.AppData,
  })
};
