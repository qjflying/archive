#!/usr/bin/env node

let yargs = require('yargs')
    .option('make', {
        alias: 'm',
        // demand: true,        // 是否必选
        // default: 'list.md', // 默认值
        describe: '创建列表', // 提示
        // type:'string'
    })

    .alias('h', 'help')
    .help('h')
    .usage('Usage: archive [options]')
    .example('archive --make', '遍历文件夹, 默认快速生成list.md文件')
    .epilog('copyright 2018');

let argv = yargs.argv;

// 遍历文件夹, 快速生成list.md文件    
if (argv.make) {
    require('./makefile')({
        make: argv.make
    });
    return;
}

yargs.showHelp();
