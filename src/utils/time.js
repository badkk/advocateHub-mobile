/**
 * Created by t-zikunfan
 * Date: 9:11 2017/7/27
 */
export function utcToLocal(timeSec) {
    const utcDate = new Date(timeSec);

    return utcDate.toLocaleString();
}