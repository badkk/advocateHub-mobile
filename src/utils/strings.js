/**
 * Created by t-zikunfan
 * Date: 14:23 2017/7/26
 */
export function isUrl(str) {
    let pattern = new RegExp('(http|ftp|https):\/\/[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#-]*[\\w@?^=%&amp;/~+#-])?');
    return pattern.test(str);
}
export function getFileName(str) {
    return str.split('.')[0];
}