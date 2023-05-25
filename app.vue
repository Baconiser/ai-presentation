<template>
  <div>
    <LaserPointer/>
    <router-view></router-view>
  </div>
</template>
<style lang="less">

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: none;

}
</style>
<script setup>
import LaserPointer from "./components/LaserPointer";
</script>
