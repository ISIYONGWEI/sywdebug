<template>
  <div class="works">
    <topNav />
    <div class="container">
      <div class="card" v-for="(item,index) in worksList" :key="index">
        <div class="imgBx">
          <img :src="item.icon" alt="" />
        </div>
        <div class="contentBx">
          <h2>{{item.title}}</h2>
          <p>{{item.describe}}</p>
          <a target="_blank" :href="item.toUrl"><span>Read More</span></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import topNav from "../components/topNav.vue";
export default {
  name: "works",
  components: {
    topNav,
  },
  data() {
    return {
      worksList:[{
        icon:"https://cdn.jsdelivr.net/gh/soxft/cdn@1.9/urlshorting/favicon.ico",
        title:"星辰短域",
        describe:"使用URLshorting源码搭建，用于缩短url网址，同时也是密语生成平台",
        toUrl:"https://shortlink.sywdebug.com/"
      },{
        icon:"https://tc.sywdebug.com/images/2021/09/20/QQAccelerated.png",
        title:"QQ等级加速",
        describe:"使用小新云全套代挂源码搭建，用于扫码登录自动做任务，加速QQ等级升级速度",
        toUrl:"https://dgw.sywdebug.com/"
      },{
        icon:"https://tc.sywdebug.com/images/2021/09/20/collection.png",
        title:"五合一收款码",
        describe:"使用姬长信五合一收款码源码搭建，用于将QQ、微信、支付宝、京东、百度五个收款码合为一个，便于使用",
        toUrl:"https://collection.sywdebug.com/"
      }]
    };
  },
};
</script>
<style lang="less" scoped src="../assets/less/works.less"></style>
