/**
 * @file base64编码/解码
 * @author qianjing
 */

import base64 from 'base-64';
import utf8 from 'utf8';

/**
 * 对base64编码的字符串进行解码
 *
 * @param {string} data base64编码的字符串
 * @return {string}
 * @example
 * decodeBase64('eyJub3dfZGF0ZV90aW1lIjoiMjAxNzEwMzEgMTcwMTQzNzc0In0=')
 * => '{"now_date_time":"20171031 170143774"}'
 */
export function decodeBase64(data) {
    let bytes = base64.decode(data);
    return utf8.decode(bytes);
}

/**
 * 字符串进行base64编码
 *
 * @param {string} jsonstr JSON.stringify(object)
 * @return {string}
 *
 * @example
 * encodeBase64('{"now_date_time":"20171031 170143774"}')
 * => eyJub3dfZGF0ZV90aW1lIjoiMjAxNzEwMzEgMTcwMTQzNzc0In0=
 */
export function encodeBase64(jsonstr) {
    return base64.encode(utf8.encode(jsonstr));
}
