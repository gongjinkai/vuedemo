<template>
  <div class="care">
    <div class="header">
      <h1 class="title">我的关注</h1>
    </div>
    <div class="weather">
      <div class="search"></div>
      <input type="text" id="city" class="form-control" v-model="cityname" placeholder="看一下天气吧！">
      <button class="btn btn-default" @click="add">获取</button>
    </div>
      <div class="result">
        <li>查询状态:{{message.reason}}</li>
        <li>城市:{{message.result.today.city}}</li>
        <li>时间:{{message.result.today.date_y}}</li>
        <li>温度:{{message.result.today.temperature}}</li>
        <li>天气:{{message.result.today.weather}}</li>
        <li>穿衣指数:{{message.result.today.dressing_index}}</li>
        <li>穿衣建议:{{message.result.today.dressing_advice}}</li>
        <li>晨练指数:{{message.result.today.exercise_index}}</li>
        <img src="static/sun.png" v-if="num==2">
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        cityname: '',
        message: [],
        num: 2
      }
    },
    mounted () {
      var self = this
      this.$http('api/weather').then(function (res) {
        self.message = res.data
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      add () {
        var _this = this
        var cityName = encodeURI(this.cityname)
        this.$http.get('http://v.juhe.cn/weather/index?format=2&cityname=' + cityName + '&key=7ef600476bf1ea34d530079e33bdba83').then(function (res) {
          _this.message = res.data
          console.log(_this.message)
          alert(_this.message)
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>
<style scoped>
li{
  list-style: none;
}
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
