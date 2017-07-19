<template lang="html">
  <ul class="nav">
    <router-link to="/home/" class="navItems">
      <div class="bottom_nav_icon icon_1"></div>
      <div class="bottom_nav_text">首页</div>
    </router-link>
    <router-link to="/hello" class="navItems">
      <div class="bottom_nav_icon icon_2"></div>
      <div class="bottom_nav_text">收藏</div>
    </router-link>
    <router-link to="/care" class="navItems">
      <div class="bottom_nav_icon icon_3"></div>
      <div class="bottom_nav_text">关注</div>
    </router-link>
    <router-link to="/my" class="navItems">
      <div class="bottom_nav_icon icon_4"></div>
      <div class="bottom_nav_text">我的</div>
    </router-link>
  </ul>
</template>

<script>

</script>

<style>
  .nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    font-size: 10px;
    overflow: hidden;
    z-index: 1000;
    opacity: 1;
    background: #fff;
    box-shadow: 0 0 5px #ccc;
  }
  .navItems {
    display: block;
    float: left;
    width: 25%;
    height: 50px;
    color: #999;
    padding-top: 5px;
  }
  .bottom_nav_icon{
    height: 57%;
    margin: 0 auto;
  }
  .icon_1{
    background: url(../assets/home.png) no-repeat center center;
    background-size: contain;
  }
  .icon_2{
    background: url(../assets/follow.png) no-repeat center center;
    background-size: contain;
  }
  .icon_3{
    background: url(../assets/message.png) no-repeat center center;
    background-size: contain;
  }
  .icon_4{
    background: url(../assets/my.png) no-repeat center center;
    background-size: contain;
  }
  .bottom_nav_text{
    height: 43%;
  }
  .router-link-active {
    color: #1296db;
  }
  .router-link-active .icon_1{
    background: url(../assets/home1.png) no-repeat center center;
    background-size: contain;
  }
  .router-link-active .icon_2{
    background: url(../assets/follow1.png) no-repeat center center;
    background-size: contain;
  }
  .router-link-active .icon_3{
    background: url(../assets/message1.png) no-repeat center center;
    background-size: contain;
  }
  .router-link-active .icon_4{
    background: url(../assets/my1.png) no-repeat center center;
    background-size: contain;
  }
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
  }
</style>
