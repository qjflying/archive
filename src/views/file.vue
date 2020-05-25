<template lang="pug">
    markdown(:data="html")
</template>

<script>
import { markdown } from "components";
import loadfile from "common/loadfile";
import decodePath from "common/decodePath";

export default {
    data() {
        return {
            path: this.$route.path,
            html: ""
        };
    },
    watch: {
        $route(route) {
            this.html = "";
            this.path = route.path;
            this.fetchData();
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            let { filepath, filetype } = decodePath(this.path);

            console.log(this.path, filepath, filetype);

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

            // let filepath = "./book/基础格式/js.gif";
            // let filetype = "gif";

            loadfile(filepath, filetype).then(res => {
                this.html = res;
            });
        }
    },
    components: {
        markdown
    }
};
</script>

