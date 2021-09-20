<template>
  <div class="topNav">
    <header ref="header">
      <a href="#" class="logo">sywdebug</a>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><a href="https://sywdebug.gitee.io/blog">技术博客</a></li>
        <li><a href="https://cloud.sywdebug.com">网盘</a></li>
        <li><a href="https://tc.sywdebug.com">图床</a></li>
        <li><router-link to="/resources">资源</router-link></li>
        <li><router-link to="/works">作品</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><router-link to="">开发者信息</router-link></li>
      </ul>
    </header>
  </div>
</template>
<script lang="ts">
export default {
  name: "topNav",
  data() {
    return {};
  },
  mounted() {
    let that: any = this;
    window.addEventListener("scroll", () => {
      that.$refs.header.classList.toggle("sticky", window.scrollY > 0);
    });
  },
};
</script>
<style lang="less" scoped>
.topNav {
  background: #000;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.6s;
    padding: 40px 100px;
    z-index: 2;
    .logo {
      position: relative;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      font-size: 2em;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: 0;
    }

    ul {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        position: relative;
        list-style: none;
        a {
          position: relative;
          margin: 0 15px;
          text-decoration: none;
          color: #fff;
          letter-spacing: 2px;
          font-weight: 500px;
          transition: 0.5s;
        }
      }
    }
  }
}
header.sticky {
  padding: 5px 100px;
  background: #fff;
}
header.sticky .logo,
header.sticky ul li a {
  color: #000;
}
</style>
