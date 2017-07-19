<template>
<div class="my">
  <div class="header" v-if="false">
    <a class="l-btn" onclick="window.history.go(-1)"><img src="../assets/back1.png"></a>
    <h1 class="title">{{title}}</h1>
  </div>
  <div class="form-img">
    <img src="../assets/loginimg.jpg" style="width: 80px" height="80px">
    <h5>{{username}}</h5>
    <p>{{say}}</p>
    <div class="my-message">
      <ul v-for="item in myData">
        <li>{{item.title}}</li>
        <li>{{item.fans}}</li>
        <li>{{item.watch}}</li>
      </ul>
      <ul v-for="item in myData">
        <li>{{item.num1}}</li>
        <li>{{item.num2}}</li>
        <li @click="add">{{zan}}</li>
      </ul>
    </div>
  </div>
  <div class="my-list">
    <ul v-for="item in listData">
      <li>{{item.name}}<span v-if="item.isShow" class="hot">{{item.num}}</span> <img src="../assets/right.png"><img class="icon" src="../assets/list1.png"></li>
    </ul>
    {{$store.state.count}}
  </div>

</div>
</template>
<script>
import store from '../store/store'
export default{
  data () {
    return {
      username: 'gjk',
      password: '123',
      title: '个人',
      say: 'hello World',
      zan: 12,
      myData: '',
      listData: [
        {
          'name': '我的关注',
          'num': 14,
          isShow: true
        },
        {
          'name': '我的资料',
          'num': 13,
          isShow: false
        },
        {
          'name': '我的礼物',
          'num': 22,
          isShow: true
        },
        {
          'name': '我的活动',
          'num': 9,
          isShow: true
        },
        {
          'name': '我的点赞',
          isShow: true
        }
      ]
    }
  },
  store,
  methods: {
    fetchData () {
      var _this = this
      this.$http.get('api/home').then(function (res) {
        _this.myData = res.data
      }).catch(function (err) {
        console.log(err)
      })
    },
    add () {
      var self = this
      self.zan++
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
<style scoped>
  .drop-enter-active {
    transition: all .5s ease;
  }
  .drop-leave-active {
    transition: all .3s ease;
  }
  .drop-enter {
    transform: translateX(-500px);
  }
  .drop-leave-active {
    transform: translateX(-500px);
  }

  .my{
    width:100%;
    min-height:600px;
    max-height: auto;
  }
  .form-img{
    background-image: url('../assets/loginbg.jpg');
    height:250px;
    color:white;
    padding-top:60px;

  }
  .form-img img {
    margin:0 auto;
    border-radius: 50%;
    border: 2px solid #121212;
  }
  form{
    width:50%;
    margin:0 auto;
  }
  h1{
    margin-top:20px;
    color:white;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color:#0a9ec7;
    z-index: 1000;
    color: #666;
  }
  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
  .header a{
    position: absolute;
    left:5%;
    padding-top:5px;
    height:35px;
    width:35px;
  }
  .header a img{
    width:35px;
    height:35px;
  }
  input {
    border: none;
  }
  .my-message ul {
    width:80%;
    margin:0 auto;
  }
  .my-message ul li {
    float:left;
    width:33.33%;
    border-right: 1px solid seashell;
    list-style: none;
  }
  .my-message ul li:last-child {
    border: none;
  }
  .my-list ul li {
    height:54px;
    line-height:54px;
    color:black;
    font-size: 18px;
    border-bottom: 1px solid #cccccc;
    text-align: left;
    padding-left:30%;
  }
  .my-list ul {
    position: relative;
  }
  .my-list ul li  img {
    width:36px;
    height:36px;
    position: absolute;
    right:8%;
    top:8px;
  }
  .my-list ul li .icon{
    width:36px;
    height:36px;
    position: absolute;
    left:8%;
    top:8px;
  }
  .my-list ul li span{
    width:30px;
    height:30px;
  }
  .hot{
    margin-left:30px;
    color:red;
  }
</style>
