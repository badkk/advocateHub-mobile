/**
 * Created by t-zikfan on 2017/7/6.
 */
var iframe;
var url;
window.callbackData = function (data) {
    if (data && data.query && data.query.results && data.query.results.resources && data.query.results.resources.content && data.query.results.resources.status === 200) loadHTML(data.query.results.resources.content);
    else if (data && data.error && data.error.description) loadHTML(data.error.description);
    else loadHTML('Error: Cannot load ' + url);
};
var loadURL = function (src) {
    url = src;
    let script = document.createElement('script');
    script.src = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.headers%20where%20url%3D%22' +
        encodeURIComponent(url) + '%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=callbackData';
    document.body.appendChild(script);
};
var loadHTML = function (html) {
    iframe.src = 'about:blank';
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html.replace(/<head>/i, '<head><base href="' + url + '"><scr' + 'ipt>document.addEventListener("click", function(e) { if(e.target && e.target.nodeName === "A") { e.preventDefault(); parent.loadURL(e.target.href); } });</scr' + 'ipt>'));
    iframe.contentWindow.document.close();
};

export default function() {
    iframe = document.getElementsByTagName('iframe')[0];
    url = iframe.src;
    loadURL(iframe.src);
}