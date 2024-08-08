<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { reqGetBannerListApi } from "@/api/home";

//初始化轮播图数据
let bannerList = ref([])

//组件挂载时，发送网络请求
onMounted(() => {
  getBannerList()
})

//获取轮播图数据的回调
const getBannerList = async () => {
  let res = await reqGetBannerListApi()
  if (res.code == "1") {
    bannerList.value = res.result
  }
}

</script>

<style lang="scss" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>