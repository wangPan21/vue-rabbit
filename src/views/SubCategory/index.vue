<template>
    <div>
        <div class="container ">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: `/category/${subCategoryList.parentId}` }">{{
                        subCategoryList.parentName }}
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>{{ subCategoryList.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="sub-container">
                <el-tabs>
                    <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                    <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                    <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
                </el-tabs>
                <div class="body">
                    <!-- 商品列表-->
                    <GoodsItem v-for="item in goodList.items" :good="item" :key="item.id"></GoodsItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { reqGetSubCategoryApi, reqGetSubCategoryListApi } from "@/api/category";
import { useRoute } from "vue-router";
import GoodsItem from '@/views/Home/components/GoodsItem.vue'


//初始化路由参数
const route = useRoute()

//初始化二级分类数据
const subCategoryList = ref({})

//初始化基础列表数据
const goodList = ref([])

//初始化基础列表请求数据
const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})

// 组建挂载时调用
onMounted(() => {
    getSubCategory()
    getSubCategoryList()
})

//获取二级分类数据
const getSubCategory = async () => {
    const res = await reqGetSubCategoryApi(route.params.id)
    if (res.code == '1') {
        subCategoryList.value = res.result
    }
}

//获取基础列表数据
const getSubCategoryList = async () => {
    const res = await reqGetSubCategoryListApi(reqData.value)
    if (res.code == '1') {
        goodList.value = res.result
    }
}



</script>

<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

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

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>