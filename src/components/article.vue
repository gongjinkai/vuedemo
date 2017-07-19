<template>
  <div>
    <div class="header">
      <a class="l-btn" onclick="window.history.go(-1)"><img src="../assets/back.png"></a>
      <h1 class="title">{{title}}</h1>
    </div>
    <div class="content">
      <div class="head clear"><h2><img :src="articleData.author_face" alt=""/></h2></div>
      <div class="cont">
        <h4>{{articleData.title}}</h4>
        <div class="text-box" v-html="articleData.content"></div>
      </div>
    </div>
    <div class="footer">
      <div class="zannum">点赞数{{$store.state.count}}</div>
      <div class="icon"  @click="$store.commit('add')"><img src="../assets/zan.png" @click="zan"></div>
      <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOutRight">
        <div v-show="bSign" class="zannum">+1</div>
      </transition>
    </div>
  </div>
</template>
<script>
  import store from '../store/store'
  export default {
    data () {
      return {
        articleData: {},
        title: '新闻详情页',
        bSign: false
      }
    },
    store,
    mounted () {
      this.fetchData(this.$route.params.id)
    },
    watch: {
      $route (to) {
        var reg = /article\/\d+/
        if (reg.test(to.path)) {
          var articleId = this.$route.params.id || 0
          this.fetchData(articleId)
        }
      }
    },
    transitions: {
      bounce: {
        enterClass: 'bounceIn',
        leaveClass: 'bounceOutRight'
      }
    },
    methods: {
      fetchData (id) {
        var _this = this
        this.$http.get('api/article').then(function (res) {
          _this.articleData = res.data[id]
        }).catch(function (err) {
          console.log(err)
        })
      },
      zan () {
        this.bSign = !this.bSign
      }
    }
  }
</script>
<style scoped>
  h1{
    color:white;
  }
  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
  .header{
    position: fixed;
    background-color:#1296db;
    top:0;
    left:0;
    width:100%;
  }
  .header a{
    position: absolute;
    left:30px;
    height:40px;
    width:40px;
  }
  .content{
   padding-top:40px;
  }
  .header a img{
    width:40px;
    height:40px;
  }
  .text-box{
    font-size: 14px;
  }
  .cont{
    width:80%;
    margin:0 auto;
  }
 .footer{
   margin-bottom:50px;
 }
  .footer span {
  }
  .footer img {
    width:40px;
    height:40px;
  }
  .zannum{
    font-size: 22px;
    font-weight: bold;
    display: inline-block;
  }
</style>
