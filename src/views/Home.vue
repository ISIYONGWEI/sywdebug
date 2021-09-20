<template>
  <div class="home">
    <topNav/>
    <section class="banner"></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topNav from "../components/topNav.vue"
export default defineComponent({
  name: "home",
  components: {
    topNav
  },
  data() {
    return {};
  },
  mounted() {
    
  },
  methods: {},
});
</script>
<style lang="less" scoped src="../assets/less/home.less"></style>
