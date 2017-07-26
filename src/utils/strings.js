/**
 * Created by t-zikunfan
 * Date: 14:23 2017/7/26
 */
export function isUrl(str) {
    let pattern = new RegExp('(http|ftp|https):\/\/[\\w-]+(\\.[\\w-]+)+([\\w.,@?^=%&amp;:/~+#-]*[\\w@?^=%&amp;/~+#-])?');
    console.log(str, pattern.test(str));
    return pattern.test(str);
}