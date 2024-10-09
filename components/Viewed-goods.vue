<template>
    <div class="viewed-goods">
        <div class="wrapper">
            <h2 class="viewed-goods-header">Просмотренные товары</h2>
            <swiper :navigation="true"
     :modules="modules"
    :slides-per-view="4"
    :space-between="20"
    :pagination="{
      type: 'fraction',
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
                <swiper-slide><GoodsCard /></swiper-slide>
                <swiper-slide><GoodsCard /></swiper-slide>
                <swiper-slide><GoodsCard /></swiper-slide>
                <swiper-slide><GoodsCard /></swiper-slide>
                <swiper-slide><GoodsCard /></swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>

  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'assets/css/swiper.css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Pagination, Navigation],
      };
    },
  };
</script>

<style scoped>

.viewed-goods {
    margin-bottom: 100px;
}

.viewed-goods-header {
    padding-top: 50px;
    font-weight: 500;
    font-size: 30px;
    line-height: 121%;
    color: #1f2432;
    margin-bottom: 60px;
}

.wrapper {
    overflow: hidden;
}

</style>