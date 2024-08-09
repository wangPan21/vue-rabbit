<template>
    <div class="goods-hot">
        <h3>{{ title == '1'?'24小时热榜':'周热榜' }}</h3>
        <!-- 商品区块 -->
        <RouterLink to="/" class="goods-item" v-for="item in detailHotList" :key="item.id">
            <img v-img-lazy="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { reqGetDatailHotApi } from "@/api/detail";
import { useRoute } from "vue-router";

//接收标题
const type = defineProps(['title'])

const route = useRoute()

//初始化商品热榜数据
const detailHotList = ref([])


//组建挂载时调用
onMounted(() => {
    getDetailHot()
})

//获取商品热榜的数据
const getDetailHot = async () => {
    const res = await reqGetDatailHotApi({id:route.params.id,type:type.title})
    if (res.code == '1') {
        detailHotList.value = res.result
    }
}

</script>

<style lang="scss" scoped>
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>