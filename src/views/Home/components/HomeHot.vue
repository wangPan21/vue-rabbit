<template>
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
        <!-- 下面是插槽主体内容模版 -->
        <ul class="goods-list">
            <li v-for="item in hotList" :key="item.id">
                <RouterLink to="/">
                    <img v-img-lazy="item.picture" alt="">
                    <p class="name">{{ item.title }}</p>
                    <p class="desc">{{ item.alt }}</p>
                </RouterLink>
            </li>
        </ul>
    </HomePanel>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HomePanel from './HomePanel.vue'
import { reqGetHotListApi } from '@/api/home'

//初始化人气推荐数据
let hotList = ref([])

//组件挂载时，发送网络请求
onMounted(() => {
    getHotList()
})

//获取人气推荐数据的回调
const getHotList = async () => {
    let res = await reqGetHotListApi()
    if (res.code == "1") {
        hotList.value = res.result
    }
}
</script>

<style lang="scss" scoped>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;

    li {
        width: 306px;
        height: 406px;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
        }

        .desc {
            color: #999;
            font-size: 18px;
        }
    }
}
</style>