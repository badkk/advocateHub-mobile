/**
 * Created by t-zikunfan
 * Date: 9:11 2017/7/27
 */
export function utcToLocal(timeSec) {
    const utcDate = new Date(timeSec);
    return utcDate.toLocaleString();
}

export function combineDates(date1, date2) {
    return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), date2.getHours(), date2.getMinutes(), date2.getSeconds()).getTime());
}

export function isDateCompleted(date){
    return new Date().getTime() > date;
}