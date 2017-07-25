import get from '../restful/Get'
/**
 * Created by t-zikunfan
 * Date: 13:32 2017/7/25
 */
export default function(userId, successEvent, failedEvent) {
    get('/user/login?userId=' + userId).then(res => {
        if(res.status === 404) {
            failedEvent(res);
        } else {
            successEvent(res);
        }
    });
}