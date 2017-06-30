import Get from './Get';
/**
 * Created by t-zikfan on 2017/6/30.
 * Post request
 */

export default function (url, data) {
    return Get(url, {
        method: "POST",
        body: data
    });
}