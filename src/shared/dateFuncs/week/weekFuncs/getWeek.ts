import { DateTime } from "luxon";

export const getWeek = (yearData: { data: number | 0; week: number; dayOfWeek: number; month: number }[] | null) => {
    if(yearData){
        const currentTime = DateTime.now()
    return yearData.filter(el=>el.week == currentTime.weekNumber && el.month == currentTime.month)
    }else{
        return null
    }
    
}