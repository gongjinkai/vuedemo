<template>
  <div class="headnav">
    <ul>
      <router-link to="/home" tag="li" active-class="active">
        <a href="javascript:;">首页</a>
      </router-link>
      <router-link to="/follow" tag="li" active-class="active">
        <a href="javascript:;">关注</a>
      </router-link>
      <router-link to="/column" tag="li" active-class="active">
        <a href="javascript:;">栏目</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default{
  }
</script>
<style>
  .headnav{
    width:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:2;
    background:#fff;
  }
  .headnav ul
  {width:70%;
    height:50px;
    margin:0 auto;
  }
  .headnav ul li{
    width:33.33%;
    height:50px;
    float:left;
    list-style: none;
  }
  .headnav ul li a{
    display:block;
    height:50px;
    line-height:50px;
    color:#9e9a95;
    text-align: center;
    text-decoration: none;
  }
  .headnav ul li.active a{
    height:40px;
    border-bottom:3px  solid #5477b2;
    color:#5477b2;
  }
</style>
