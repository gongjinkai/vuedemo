<template>
  <div>
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../assets/foodswiper1.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/foodswiper2.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/foodswiper3.jpg">
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
          parallax: true,
          effect: 'fade'
        }
      }
    }
  }
</script>
<style scoped>
  .banner {
    margin:0 auto;
  }
  .banner img{
    width:100%;
    height:180px;
  }
</style>
