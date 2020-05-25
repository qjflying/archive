/**
 * @file replaceAll
 * @author qianjing
 */

// replaceAll('dogdogdog', 'dog', 'cat');
export default function replaceAll(str, str1, str2) {
    return str.replace(new RegExp(str1, 'gm'), str2);
};