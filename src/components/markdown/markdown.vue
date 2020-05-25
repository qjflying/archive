<template lang="pug">
    .mdStyle(v-if="data", v-html="data", v-highlight="", :class="classname")
    .mdStyle(v-else, v-highlight="", :class="classname")
        slot
</template>

<script>
    import hljs from 'highlight.js/lib/core';
    import 'highlight.js/styles/github.css';

    hljs.initHighlightingOnLoad();
    export default {
        data() {
            return {};
        },
        props: {
            data: String,
            classname: {
                type: String,
                default: 'bx-markdown'
            }
        },
        directives: {
            highlight: function (el) {
                let blocks = el.querySelectorAll('pre');
                blocks.forEach((block) => {
                    hljs.highlightBlock(block);
                });
            }
        }
    }
</script>

<style lang="stylus">
    .bx-markdown {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        font-size: 16px;
        line-height: 1.5;
        word-wrap: break-word;

        &.mdStyle {
            padding: 40px;

            > :first-child {
                margin-top: 0 !important
            }
        }

        &:before {
            content: "";
            display: table
        }

        &:after {
            clear: both;
            content: "";
            display: table
        }

        > :first-child {
            margin-top: 0 !important
        }

        > :last-child {
            margin-bottom: 0 !important
        }

        a:not([href]) {
            color: inherit;
            text-decoration: none
        }

        hr {
            background-color: #e1e4e8;
            border: 0;
            height: .25em;
            margin: 24px 0;
            padding: 0
        }

        ul {
            list-style-type: disc;
        }

        ol {
            list-style-type: decimal;
        }

        blockquote, details, dl, ol, p, pre, table, ul {
            margin-bottom: 16px;
            margin-top: 0
        }

        blockquote {
            border-left: .25em solid #dfe2e5;
            color: #6a737d;
            padding: 0 1em;
        }

        blockquote > :first-child {
            margin-top: 0
        }

        blockquote > :last-child {
            margin-bottom: 0
        }

        kbd {
            background-color: #fafbfc;
            border: 1px solid #c6cbd1;
            border-bottom-color: #959da5;
            border-radius: 3px;
            box-shadow: inset 0 -1px 0 #959da5;
            color: #444d56;
            display: inline-block;
            font-size: 11px;
            line-height: 10px;
            padding: 3px 5px;
            vertical-align: middle
        }

        h1, h2, h3, h4, h5, h6 {
            font-weight: 600;
            line-height: 1.25;
            margin-bottom: 16px;
            margin-top: 24px
        }

        h1 {
            font-size: 2em
        }

        h1, h2 {
            border-bottom: 1px solid #eaecef;
            padding-bottom: .3em
        }

        h2 {
            font-size: 1.5em
        }

        h3 {
            font-size: 1.25em
        }

        h4 {
            font-size: 1em
        }

        h5 {
            font-size: .875em
        }

        h6 {
            color: #6a737d;
            font-size: .85em
        }

        strong {
            font-weight: 600;
        }

        ol, ul {
            padding-left: 2em
            ol, ul {
                margin-bottom: 0;
                margin-top: 0
            }
        }

        li {
            word-wrap: break-all
        }

        li > p {
            margin-top: 16px
        }

        li + li {
            margin-top: .25em
        }

        dl {
            padding: 0
            dt {
                font-size: 1em;
                font-style: italic;
                font-weight: 600;
                margin-top: 16px;
                padding: 0
            }
        }

        dl {
            dd {
                margin-bottom: 16px;
                padding: 0 16px
            }
        }

        table {
            display: block;
            overflow: auto;
            width: 100%

            th {
                font-weight: 600
            }

            td, th {
                border: 1px solid #dfe2e5;
                padding: 6px 13px
            }
            tr {
                background-color: #fff;
                border-top: 1px solid #c6cbd1
            }
            tr:nth-child(2n) {
                background-color: #f6f8fa
            }
            img {
                background-color: transparent
            }
        }

        img {
            background-color: #fff;
            box-sizing: content-box;
            max-width: 100%
        }

        img[align=right] {
            padding-left: 20px
        }

        img[align=left] {
            padding-right: 20px
        }

        code, tt {
            background-color: rgba(27, 31, 35, .05);
            border-radius: 3px;
            font-size: 85%;
            margin: 0;
            padding: .2em .4em

            br {
                display: none
            }
        }

        del {
            code {
                text-decoration: inherit
            }
        }

        pre {
            word-wrap: normal
        }

        pre > code {
            background: transparent;
            border: 0;
            font-size: 100%;
            margin: 0;
            padding: 0;
            white-space: pre;
            word-break: normal
        }

        .highlight {
            margin-bottom: 16px
        }

        .highlight pre {
            margin-bottom: 0;
            word-break: normal
        }

        .highlight pre, pre {
            background-color: #f6f8fa;
            border-radius: 3px;
            font-size: 85%;
            line-height: 1.45;
            overflow-x: hidden;
            padding: 16px
        }

        pre {
            code, tt {
                background-color: transparent;
                border: 0;
                display: inline;
                line-height: inherit;
                margin: 0;
                max-width: auto;
                overflow: visible;
                padding: 0;
                word-wrap: normal
            }
        }
    }
</style>