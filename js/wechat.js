/**
 * Created by han on 10/8/15.
 */
//分享链接的缩略图
var imgUrl = 'http://gw.alicdn.com/tps/i3/TB1V1AsFVXXXXcBXVXXpAOt1VXX-186-186.jpg';
//分享链接的链接地址
var lineLink = 'http://m.taohua.com/market/ebook/game-sishu.php';
//分享链接的描述信息
var descContent = "8月28日-9月10日下载淘宝阅读客户端，玩游戏还能抢手机！";
//分享链接的标题
var shareTitle = "疯狂撕书魔";
//一般为空 就好
var appid = '';
//分享给好友
function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage', {
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "640",
        "img_height": "640",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('send_msg', res.err_msg);
    })
}
//分享到朋友圈
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline', {
        "img_url": imgUrl,
        "img_width": "640",
        "img_height": "640",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('timeline', res.err_msg);
    });
}
//分享到腾讯微博
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo', {
        "content": descContent,
        "url": lineLink,
    }, function(res) {
        _report('weibo', res.err_msg);
    });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        shareFriend();
    });
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
        shareTimeline();
    });
    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv) {
        shareWeibo();
    });
}, false);