import Get from './Get';
import Strings from '../res/values/string'

/**
 * Created by t-zikfan on 2017/6/30.
 * Post request
 */

export default function (url, data) {
    /*const conf = Object.assign({}, config, {
        method: "POST",
        body: data
    });*/
    return Get(url, {
        method: "POST",
        body: data
    });
}