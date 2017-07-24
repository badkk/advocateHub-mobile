import Get from './Get';
import Strings from '../res/values/string'

/**
 * Created by t-zikfan on 2017/6/30.
 * Post request
 */

export default function (baseUrl=Strings.serverAddr, url, config={}, data) {
    const conf = Object.assign({}, config, {
        method: "POST",
        body: data
    });
    return Get(baseUrl, url, conf);
}