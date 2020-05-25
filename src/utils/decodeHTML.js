/**
 * @file encodeHTML
 * @author qianjing(qjflying@163.com)
 */

export default function decodeHTML(source) {
    let str = String(source)
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
    // 处理转义的中文和实体字符
    return str.replace(/&#([\d]+);/g, function (_0, _1) {
        return String.fromCharCode(parseInt(_1, 10));
    });
}
