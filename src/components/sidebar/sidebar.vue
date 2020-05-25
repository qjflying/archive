<template lang="pug">
    markdown(:data="sidebar", classname="sidebar")
</template>

<script>
import $ from "jquery";
import { markdown } from "components";
import loadfile from "common/loadfile";
export default {
    data() {
        return {
            sidebar: ""
        };
    },
    created() {
        this.fetchData();
    },
    watch: {
        $route() {
            this.routechange();
        }
    },
    methods: {
        fetchData() {
            let listpath = window.archive.root + window.archive.list;
            loadfile(listpath, "md").then(res => {
                this.sidebar = res;
                this.loadinclude(listpath, () => {
                    this.createSidebar();
                });
            });
        },

        routechange() {
            $("#sidebar a.active").removeClass("active");
            $('#sidebar a[href="#' + this.$route.path + '"]').each(function() {
                this.className = "active";
                let el = this.parentNode;
                while ("sidebar" !== el.id) {
                    if ("ul" === el.nodeName.toLowerCase()) {
                        el.style.cssText = "display:block";
                    }
                    el = el.parentNode;
                }
            });
        },

        createSidebar() {
            // 获取外部链接
            $("#sidebar li a").each(function() {
                let el = $(this);
                let _href = el.attr("href");

                // 新窗口打开
                // $(this).attr('target', '_blank');

                // iframe打开
                $(this).attr(
                    "href",
                    "#/file/|@link:" + encodeURIComponent(_href)
                );
            });

            $("#sidebar li").each((i, li) => {
                let cur = $(li);
                // leaf 叶子节点
                if (
                    !cur.children("strong").length &&
                    !cur.children("a").length
                ) {
                    let info = this.getnodeinfo(cur);
                    let nodelink = info.nodelink;
                    let nodetext = info.nodetext;
                    cur.html(
                        `<a title="${nodetext}" href="${nodelink}">${nodetext}</a>`
                    );
                }
            });
            $("#sidebar strong").on("click", function() {
                $(this)
                    .siblings("ul")
                    .toggle();
            });
            $("#sidebar").show();
            this.routechange();
        },

        // 获取节点信息
        getnodeinfo(el) {
            let patharr = [];
            el.parents("ul").each((index, item) => {
                let curul = $(item);
                let curstrong = curul.siblings("strong").eq(0);
                if (curstrong.length > 0) {
                    let text = $.trim(curstrong.text());
                    patharr.unshift(text);
                }
            });

            let arr = $.trim(el.text()).split("|");
            let text = "";
            let options = {};
            arr.forEach((v, i) => {
                let firstChar = v.charAt(0);
                let splitIndex = v.indexOf(":");
                if ("@" === firstChar && splitIndex > -1) {
                    let key = v.slice(1, splitIndex);
                    let value = v.slice(splitIndex + 1);
                    options[key] = value;
                } else if (i === 0) {
                    text = v;
                }
            });

            let nodetext = text;
            let nodepath = window.archive.root + patharr.join("/");
            let nodelink;
            if (options.title) {
                nodetext = options.title;
            }

            if (options.include) {
                if ("" === nodetext) {
                    nodetext = options.include.split("/")[0];
                }
                nodepath += "/" + options.include;
            } else {
                nodelink = "#/file/" + patharr.join("/") + "/" + text;
                nodepath += "/" + text;

                if (options.type) {
                    nodelink += "|@type:" + options.type;
                }

                // 去掉文件后缀
                let nodeindex = nodetext.lastIndexOf(".");
                if (nodeindex > 0) {
                    let _nodetype = nodetext.slice(nodeindex + 1);
                    // 如果存在文件后缀并合法
                    if (/[A-Za-z]+/.test(_nodetype)) {
                        nodetext = nodetext.slice(0, nodeindex);
                    }
                }
            }

            return {
                nodelink, // 文件链接
                nodepath, // 文件地址
                nodetext, // 节点文本
                patharr, // 节点路径
                options // 配置文件
            };
        },

        // 加载include代码片段
        loadinclude(listpath, successCallback) {
            let basepath = listpath.slice(0, listpath.lastIndexOf("/"));
            setTimeout(() => {
                let includes = $("#sidebar li:contains('@include')").filter(
                    function(index) {
                        // 过滤非叶子节点
                        return $(this).children("ul").length < 1;
                    }
                );

                let ilen = includes.length;
                let n = 0;
                if (ilen < 1) {
                    successCallback && successCallback();
                } else {
                    includes.each((index, item) => {
                        let el = $(item);
                        let { nodepath, nodetext, patharr } = this.getnodeinfo(
                            el
                        );
                        loadfile(nodepath, "md").then(res => {
                            let htpl = `<strong>${nodetext}</strong>` + res;
                            el.html(htpl);
                            n++;
                            // 所有节点都加载完毕
                            if (n >= ilen) {
                                // 递归, 再次查找是否存在include
                                this.loadinclude(listpath, successCallback);
                            }
                        });
                    });
                }
            }, 50);
        }
    },
    components: {
        markdown
    }
};
</script>

<style lang="stylus">
#sidebar {
    display: none;

    .loaderr {
        padding: 0;
        color: red;
    }

    h1 {
        font-size: 25px;
        margin: 0.67em 0;
        line-height: 30px;

        a {
            font-size: inherit;
            color: #333 !important;
            font-weight: 700;
        }
    }

    ul {
        list-style: none;
        padding: 0;

        ul {
            padding: 2px 0 2px 20px;
            display: none;
        }
    }

    & > ul {
        padding-left: 2px;
    }

    a, strong {
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        cursor: pointer;
    }

    strong {
        font-size: 14px;
        font-weight: 700;
    }

    a {
        color: #4682be;
        font-size: 13px;
        text-decoration: none;
    }

    a.active {
        color: #900;
        font-weight: 700;
    }

    li {
        padding: 2px 0;

        strong:only-child {
            color: #ccc;
            cursor: default;
        }
    }
}
</style>
