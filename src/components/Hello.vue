<template>
  <div class="content">
    <div class="header">
      <h1 class="title">我的订单</h1>
    </div>
   <food-swiper></food-swiper>
    <div class="left-nav">
    <ul class="navlist">
      <li>
        <i class="icon iconfont icon-hanbao"></i>
        <div class="list-text">主食</div>
      </li>

      <li>
        <i class="icon iconfont icon-canyin"></i>
        <div class="list-text">小吃</div>
      </li>

      <li>
        <i class="icon iconfont icon-jinrudianpu"></i>
        <div class="list-text">饮料</div>
      </li>
    </ul>
  </div>
  <div class="shop">
    <h4>购物车</h4>
    <p>数量{{getCount()}}<p>
    <p>{{ getTotalMount() | round}}</p>
    </div>
    <div class="newslist">
      <ul>
        <li v-for="(item,index) in oftenGoods">
          	 <img :src="item.goodsImg">
            <h5>{{item.goodsName}}</h5>
            <p>{{item.price}}￥</p>
          <em class="btn btn-primary add" @click="minus(item)" :class="{off:item.count==11}">-</em>
          {{item.count}}
          <em class="btn btn-primary reduce" @click="plus(item)" :class="{off:item.count==1}">+</em>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import foodSwiper from '../components/foodswiper.vue'
  export default {
    data () {
      return {
        oftenGoods: [],
        totalMoney: 0
      }
    },
    components: {
      foodSwiper
    },
    filters: {
      round: function (value) {
        return value.toFixed(2)
      }
    },
    computed: {
      balance () {
        return this.$store.state.counts
      }
    },
    methods: {
      plus: function (item) {
        this.$store.dispatch('increment')
        item.count++
      },
      minus: function (item) {
        this.$store.dispatch('increment')
        if (item.count > 1) {
          item.count--
          this.$emit('change')
        } else {
          item.count = 1
        }
      },
      getTotalMount: function () {
        var sum = 0
        this.oftenGoods.forEach(function (value, index) {
          sum += value.count * value.price
        })
        return sum
      },
      getCount: function () {
        var foodsCount = 0
        this.oftenGoods.forEach(function (value, index) {
          foodsCount += value.count
        })
        return foodsCount
      }
    },
    created: function () {
      var _this = this
      _this.$http.get('api/foods').then(function (res) {
        _this.oftenGoods = res.data
        console.log(_this.oftenGoods)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>
<style scoped>
  .content{
    background-color: white;
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
  .navlist{
    display: block;
    width: 100%;
    color: #999;
    height:122px;
    margin:0;
  }
  .list-text{
    margin:0
  }
  .navlist li {
    float:left;
    width:33.33%;
    list-style: none;
    background-color: #f9f9f9;
  }
  .navlist li i{
    font-size: 54px;
    color:#0a9ec7;
  }
  .newslist ul li {
    border-bottom: 1px solid #a9a1a1;
    list-style-type: none;
    width:98%;
    margin:0 auto;
    overflow: hidden;
    padding-bottom: 5px;
  }
  .newslist ul li {
    border-bottom: 1px solid #a9a1a1;
    list-style-type: none;
    width:98%;
    margin:0 auto;
    padding-top:2px;
    height:110px;
    padding-bottom: 5px;
  }
  img{
    width:110px;
    height:105px;
    float: left;
    position: relative;
    padding-right:5px;
  }
  .newslist ul li:last-child{
  margin-bottom: 50px;
}
.shop{
	 border-bottom: 1px solid #a9a1a1;
}
  .count{
    width:30%;
    display: inline-block;
  }
</style>
