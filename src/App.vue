<template>
  <div>
    <MyHeader></MyHeader>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <MyFooter v-show="$route.meta.show"></MyFooter>
  </div>
</template>

<script>
//引入
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
export default {
  name: "",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style scoped>
</style>
