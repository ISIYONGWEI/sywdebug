<template>
  <div class="about">
    <topNav/>
    <div class="container">
      <div class="box" v-for="(item, index) in boxList" :key="index">
        <div class="glass"></div>
        <div class="content">
          <h2>{{ item.title }}</h2>
          <p>
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import topNav from "../components/topNav.vue";
export default {
  name: "about",
  components: {
    topNav,
  },
  data() {
    return {
      boxList: [
        {
          title: "关于首页",
          content: "首页就是个空，放着玩的，啥都没有",
        },
        {
          title: "关于博客",
          content: "此博客使用 Hexo 搭建，目前部署在 gitee 上，里面记录自己学习过程中遇到的问题和解决的方法",
        },
        {
          title: "关于资源",
          content: "此资源是一些个人收藏的比较实用方便的软件，同时也包括自己在开发时所使用到的字体或其他的js文件",
        },
        {
          title: "关于作品",
          content: "从网上找的一些源码放上去的",
        },
        {
          title: "关于联系",
          content: "此联系是开发者的个人联系方式，其中包括QQ，微信，微博，GitHub，Telegram，Twitter",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style scoped lang="less" src="../assets/less/about.less"></style>
