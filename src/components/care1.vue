<template>
  <div class="care">
    <div class="header">
      <h1 class="title">我的关注</h1>
    </div>
    <div class="weather">
      <input type="text" id="city" class="form-control" v-model="cityname">
      <button class="btn btn-default" @click="add">获取</button>
      <div class="result">
        <ul>
          <li v-for="item in message">
            {{item.city}}
          </li>
          <li v-for="item in message">
            {{item.wind}}
          </li>
          <li v-for="item in message">
            {{item.city}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityname: '',
      message: []
    }
  },
  methods: {
    add () {
      var _this = this
      var cityName = encodeURI(this.cityname)
      alert(cityName)
      this.$http.get('http://v.juhe.cn/weather/index?format=2&cityname=' + cityName + '&key=7ef600476bf1ea34d530079e33bdba83').then(function (res) {
        _this.message = res.data
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>

  h1{
    background-color:#0a9ec7;
    color:white;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
    color: #666;
  }
  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
  .weather{
    margin-top:50px;
  }
  #city{
    width:60%;
    margin:0 auto;
  }
</style>
