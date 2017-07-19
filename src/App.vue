<template>
  <div id="app">
    <bot></bot>
        <router-view></router-view>
  </div>
</template>

<script>
import bot from './components/bottom.vue'
export default {
  name: 'app',
  components: {
    bot
  }
}
</script>

<style scoped>
  @import '/static/bootstrap.min.css';
  @import '/static/animate.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
li{
  list-style: none;
}
  .btn{
    position: absolute;

  }
</style>
