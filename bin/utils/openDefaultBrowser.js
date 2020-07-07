/**
 * @file openDefaultBrowser 打开默认浏览器
 * @author qianjing
 */

const {exec} = require("child_process");

module.exports = function (url) {
    // 拿到当前系统的参数
    switch (process.platform) {
        // win系统使用 一下命令打开url在浏览器
        case "win32":
            exec(`start ${url}`);

        // mac系统使用 一下命令打开url在浏览器
        case "darwin":
        // 默认mac系统
        default:
            exec(`open ${url}`);
    }
}
