// 反解path参数

let patfiletype = /[A-Za-z]+/;

// 禁止url中有/、|、#参数
// /file/
// /file/前端开发/JavaScript/基础/es6/es6|@url:http://xxxx.com|@title:xxx|@type:iframe
// /file/@link=https%3A%2F%2Fwww.baidu.com%2F

export default function decodePath(path) {

    let arr = path.split('|');
    let filepath = arr[0];
    let filetype;
    let options = {};

    // 首页默认值
    if ('/file/' === filepath) {
        filepath = window.archive.root + window.archive.home;
    } else {
        filepath = filepath.replace('/file/', window.archive.root);
    }

    // 获取文件类型, 默认是md
    let fileindex = filepath.lastIndexOf('.');
    if (fileindex > 0) {
        let _filetype = filepath.slice(fileindex + 1);
        // 如果存在文件后缀并合法
        if (patfiletype.test(_filetype)) {
            filetype = _filetype;
        } else {
            // 默认md文件
            filepath += '.md';
            filetype = 'md';
        }
    } else {
        // 默认md文件
        filepath += '.md';
        filetype = 'md';
    }

    // 获取options参数
    if (arr.length > 1) {
        arr.forEach((v) => {
            let firstChar = v.charAt(0);
            let splitIndex = v.indexOf(':');
            if ('@' === firstChar && splitIndex > -1) {
                let key = v.slice(1, splitIndex);
                let value = v.slice(splitIndex + 1);
                options[key] = value;
            }
        });
    }

    if (options.type) {
        filetype = options.type;
    }

    if (options.link) {
        filepath = decodeURIComponent(options.link);
        filetype = 'iframe';
    }

    return {
        filepath,
        filetype
    };
}
