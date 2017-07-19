<template>
  <div>
  <div class="banner">
  <swiper :options="swiperOption">
    <swiper-slide>
      <img src="../assets/swiper1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/swiper2.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/swiper3.jpg">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination">
    </div>

  </swiper>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000,
          parallax: true
        }
      }
    }
  }
</script>
<style>
.banner {
  padding-top:40px;
  margin:0 auto;
}
.banner img{
  width:100%;
}
</style>
