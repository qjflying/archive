/**
 * 遍历文件夹, 快速生成list.md文件
 */

const path = require('path');
const fs = require('fs');
const glob = require("glob");
const _ = require('lodash');

// 当前进程所在目录
let rootpath = process.cwd();

// path.join(__dirname, "../public");

const defaults = {
    make: 'list.md'
};

const ignore = [
    '**/node_modules',
    '**/_'
];

// 遍历文件夹，拿到文件和文件夹的关系数据
function scanDir(dirpath, opts) {
    let files = glob.sync(dirpath + "*/*", {ignore});
    let fileArray = [];
    let listmd;    // 列表文件

    files.forEach((filepath) => {
        let stats = fs.statSync(filepath);
        let isFile = stats.isFile(); //是文件  
        let isDir = stats.isDirectory(); //是文件夹  
        let name = path.basename(filepath);
        if (isFile) {
            let islistmd = opts.listmd === name;
            fileArray.push({
                type: 'file',
                name,
                islistmd,
                filepath
            });
            if (islistmd) {
                listmd = opts.listmd;
            }
        }

        if (isDir) {
            fileArray.push(scanDir(filepath, opts));
        }
    });

    return {
        name: path.basename(dirpath),
        type: 'dir',
        listmd,
        fileArray
    }
}

// 创建
function createList(data) {
    let arr = [];
    let space = 4; // 1个tab4个空格
    let sign = ' '; 
    let loopfuc = function (d, level) {
        let type = d.type;
        let name = d.name;
        
        if ('file' === type) {
            // 如果第一级含有list.md跳过
            if (0 === level && d.islistmd) {
                return;
            }

            // 根据所在文件夹的层级添加空格
            arr.push(_.repeat(sign, level * space) + '* ' + name);
        } else if ('dir' === type) {
            let fileArray = d.fileArray;
            let listmd = d.listmd;
            let curlevel;

            // 根目录不做处理
            if (level === undefined) {
                curlevel = 0;
            }
            else {
                curlevel = level + 1;

                if (listmd) {
                    arr.push(_.repeat(sign, level * space) + '* @include:' + name + '/' + listmd);
                    return;
                }
                else {
                    arr.push(_.repeat(sign, level * space) + '* **' + name + '**');
                }
            }
            
            for (let i = 0, ii = fileArray.length; i < ii; i++) {
                loopfuc(fileArray[i], curlevel);
            }
        }
    }
    loopfuc(data);
    return arr.join('\n');
}


module.exports = function (opts) {
    // 如果make没有赋值
    if (_.isBoolean(opts.make)) {
        opts.make = undefined;
    }

    let o = _.defaults({}, opts, defaults);

    let datalist = scanDir(rootpath, {listmd: o.make});
    let str = createList(datalist);


    let outputfile = path.join(rootpath, o.make);
    fs.writeFileSync(outputfile, str);

    // fs.writeFileSync(path.join('/Users/qianjing/mygithub/archive', o.make), str);
    console.log('创建: ' + outputfile + ' finish');
}
