/**
 * @file 加载文件
 * @author qianjing
 */

import axios from 'axios';
import marked from 'marked';
import encodeHTML from 'utils/encodeHTML';

function loadhtml(filepath) {
    return axios({
        method: 'get',
        url: filepath
    });
}

function iframefile(filepath) {
    return Promise.resolve('<iframe class="iframeStyle" src="' + filepath + '"></iframe>');
}

function imgfile(filepath) {
    return Promise.resolve('<img class="imgStyle" src="' + filepath + '" />');
}

export default function loadfile(filepath, type) {
    switch (type) {
        case 'md':
            return loadhtml(filepath).then(
                res => marked(res.data),
                err => '<div class="loaderr">加载' + filepath + '失败</div>'
            );
        case 'pdf':
        case 'iframe':
            return iframefile(filepath);
        case 'xmind':
            let xmindurl = window.archive.xmindurl;
            let iframeurl = `${xmindurl}?r=${encodeURIComponent(filepath)}`;
            return iframefile(iframeurl);
        case 'jpg':
        case 'png':
        case 'gif':
        case 'jpeg':
        case 'webp':
            return imgfile(filepath);
            // 'html'、'htm'、'txt'
        default:
            return loadhtml(filepath).then(
                res => '<pre><code>' + encodeHTML(res.data) + '</code></pre>',
                err => '<div class="loaderr">加载' + filepath + '失败</div>'
            );
    }
}
