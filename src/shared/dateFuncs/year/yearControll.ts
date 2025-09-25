import { createYear } from "./yearFuncs/createYear";
import { getYear } from "./yearFuncs/getYear";

export const yearControll = async (yearNumb: number): Promise<null | { data: number | 0; week: number; dayOfWeek: number; month: number }[]> => {
    const data = await getYear(yearNumb)
    if(data){
        return data
    } else{
        await createYear(yearNumb)
        const data = await getYear(yearNumb)
        if(data){
            return data
        }else{
            return null
        }
    }
};
