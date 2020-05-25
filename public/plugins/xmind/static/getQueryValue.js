/**
 * @file 取url参数
 * @author qianjing
 */

/**
 * 将目标字符串中可能会影响正则表达式构造的字符串进行转义。
 *
 * @function
 * @grammar baidu.string.escapeReg(source)
 * @param {string} source 目标字符串
 * @remark
 * 给以下字符前加上“\”进行转义：.*+?^=!:${}()|[]/\
 * @meta standard
 *
 * @return {string} 转义后的字符串
 */
function escapeReg(source) {
    return String(source)
        .replace(new RegExp('([.*+?^=!:\x24{}()|[\\]\/\\\\])', 'g'), '\\\x241');
}

/**
 * 根据参数名从目标URL中获取参数值
 *
 * @function
 * @grammar baidu.url.getQueryValue(url, key)
 * @param {string} url 目标URL
 * @param {string} key 要获取的参数名
 * @meta standard
 * @see baidu.url.jsonToQuery
 *
 * @return {string|null} - 获取的参数值，其中URI编码后的字符不会被解码，获取不到时返回null
 */
function getQueryValue(url, key) {
    let reg = new RegExp(
        '(^|&|\\?|#)'
        + escapeReg(key)
        + '=([^&#]*)(&|\x24|#)',
        '');
    let match = url.match(reg);
    if (match) {
        return match[2];
    }
    return null;
}
