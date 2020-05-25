<template lang="pug">
    markdown(v-if="html", :data="html")
        :markdown-it
            本周精读文章：[单页应用的数据流方案探索](https://zhuanlan.zhihu.com/p/26426054)

            # 1 引言

            > 前几期精读了前端模块化、语法相关的文章，这次讨论另一个举足轻重的话题：数据流。
            > 数据流在前端的地位与工程化、可视化、组件化是一样重要的，没有好的数据流框架与思想的指导，业务代码长期肯定倾向于不可维护的状态，当项目不断增加功能后，管理数据变得更加重要。

            早期前端是没有数据流概念的，因为前端非常薄，每个页面只要展示请求数据，不需要数据流管理。

            随着前端越来越复杂，框架越来越内聚，数据流方案由分到合，由合又到了分，如今数据流逐渐从框架中解绑，形成了一套通用体系，供各个框架使用。


            ## 2 内容概要

            文中主要介绍了响应式编程理念，提到的观点，主要有：

            1. `Reactive` 数据封装
            2.  数据源，数据变更的归一
            3.  局部与全局状态的归一
            4.  分形思想
            5.  action 分散执行
            5.  app级别数据处理，推荐前端 `Orm`


            ## 3 参考h4xxxx

            * 列表1xxx
            * 列表2xxx

            ```
            export default {
                data() {
                    return {
                        msg: 'hello world;'
                    }
                }
            }
            ```
</template>

<script>
    import {markdown} from 'components';
    import loadfile from 'common/loadfile';

    export default {
        data() {
            return {
                html: ''
            };
        },
        created() {
            // let filepath = './book/基础格式/测试.md';
            // let filetype = 'md';

            // let filepath = './book/基础格式/config.js';
            // let filetype = 'js';

            // let filepath = './book/基础格式/报考指南.pdf';
            // let filetype = 'iframe';

            // let filepath = './book/基础格式/hello.html';
            // let filetype = 'html';

            // let filepath = './book/基础格式/hello.html';
            // let filetype = 'iframe';

            let filepath = './book/基础格式/js.gif';
            let filetype = 'gif';
            
            loadfile(filepath, filetype).then(res => {
                this.html = res;
            })
        },
        components: {
            markdown
        }
    }
</script>


