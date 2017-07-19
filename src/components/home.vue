<template>
  <div class="home">
   <div class="header">
     <h1 class="title">{{title}}</h1>
   </div>
  <div class="content">
    <BannerView></BannerView>
    <div class="newslist">
      <ul>
        <li v-for="(item,index) in arrList">
          <router-link :to="'/article/'+item.id">
            <img :src="item.imgsrc">
            <h5>{{item.id}}.{{item.title}}</h5>
            <p>{{item.detail}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
import BannerView from './swiper.vue'
export default {
  components: {
    BannerView
  },
  data () {
    return {
      arrList: [],
      listArr: [],
      title: '首页'
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var _this = this
      this.$http.get('api/tree').then(function (res) {
        _this.arrList = res.data
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.home{
margin-bottom: 50px;
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
.newslist ul li {
    border-bottom: 1px solid #a9a1a1;
    list-style-type: none;
    width:98%;
    margin:0 auto;
    padding-top:2px;
    height:110px;
    overflow: hidden;
    padding-bottom: 5px;
  }
.newslist ul li:last-child{
  border: 0;
}
h1{
  background-color:#1296db;
  color:white;
  opacity: .7;
}
.newslist ul li p{
  text-align: left;
}

img{
    width:110px;
    height:105px;
    float: left;
    position: relative;
    padding-right:5px;
  }
p{
  font-size: 13px;
}
  h5{
    font-weight: bold;
    text-align: left;
  }

</style>
