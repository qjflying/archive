<template lang="pug">
    .page-column
        sidebar#sidebar
        #content
            router-view
</template>

<script>
import { sidebar } from "components";

export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    components: {
        sidebar
    }
};
</script>

<style lang="stylus">
#app, body, html {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.loaderr {
    padding: 200px 50px;
    text-align: center;
}

.page-column {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .iframeStyle {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border: 0;
    }

    #sidebar {
        position: fixed;
        overflow-x: hidden;
        width: 205px;
        padding-left: 25px;
        padding-right: 25px;
        height: 100%;
        overflow-y: auto;
        box-shadow: 0 0 40px #ccc;
        -webkit-box-shadow: 0 0 40px #ccc;
        -moz-box-shadow: 0 0 40px #ccc;
        border-right: 1px solid #bbb;
    }

    #content {
        position: absolute;
        left: 256px;
        top: 0;
        right: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;

        img {
            max-width: 100%;
        }
    }
}
</style>