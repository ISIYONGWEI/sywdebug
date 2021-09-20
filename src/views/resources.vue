<template>
  <div class="resource">
    <topNav />
    <div class="container">
      <div class="box" v-for="(item, index) in resourceList" :key="index">
        <div class="content">
          <h2>{{ item.title }}</h2>
          <p>{{ item.describe }}</p>
          <a :href="item.url">Learn more</a>
        </div>
      </div>
    </div>
    <svg>
      <filter id="wavy">
        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="2">
          <animate attributeName="baseFrequency" dur="60s" values="0.02;0.05;0.02" repeatCount="indefinite"></animate>
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
      </filter>
    </svg>
  </div>
</template>
<script lang="ts">
import topNav from "../components/topNav.vue";
export default {
  name: "resource",
  components: {
    topNav,
  },
  data() {
    return {
      resourceList: [
        {
          title: "代码案例",
          describe: "一些 css 炫酷动画效果，炫酷按钮导航等，一些 js 小方法，此网站大部分内容使用此案例中的效果",
          url: "https://code.sywdebug.com/",
        },
        {
          title: "文件资源",
          describe: "插件、字体、js脚本、实用工具",
          url: "https://public.sywdebug.com/",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style scoped lang="less" src="../assets/less/resources.less"></style>
