/**
 * @file encodeHTML
 * @author qianjing(qjflying@163.com)
 */

export default function encodeHTML(e) {
    return String(e).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
