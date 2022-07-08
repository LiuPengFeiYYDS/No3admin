<template>
  <div class="sidebar">
    <div class="logo-img">
      <img src="http://manager.9yuecloud.com/img/logo.384b81fb.png" />
      <span>Manager</span>
    </div>
    <menu-tree></menu-tree>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree'
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  background: #001529;
  .logo-img {
    display: flex;
    align-items: center;
    font-size: 18px;
    height: 50px;
    img {
      margin: 0 16px;
      width: 32px;
      height: 32px;
    }
    span {
      box-sizing: border-box;
      margin-left: 10px;
      color: #fff;
    }
  }
}
</style>
