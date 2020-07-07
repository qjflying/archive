#!/usr/bin/env node

const express = require('express');
const path = require('path');
const app = express();

// let publicpath = path.join(__dirname, "../public");     // 当前项目下的public文件
let publicpath = process.cwd();                        // 当前进程所在目录

// console.log('publicpath', publicpath);


// 静态文件
app.use(express.static(publicpath));

// 端口监听
app.listen(3000, () => console.log('Example app listening on port 3000!'));

// 在浏览器中打开链接
require('./utils/openDefaultBrowser')('http://localhost:3000/');


