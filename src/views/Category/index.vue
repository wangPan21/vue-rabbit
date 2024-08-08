<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryList.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted,onUpdated } from "vue";
import { reqGetCategoryApi } from "@/api/category.js";
import { useRoute } from "vue-router";

//初始化路由参数
const route = useRoute()
//初始化分类数据
let categoryList = ref({})

//组建挂载时
onMounted(() => {
    getCategoryList()
})

//响应式状态发生变化，更新Dom
onUpdated(()=>{
    getCategoryList()
})

//获取一级分类的数据
const getCategoryList = async () => {
    let res = await reqGetCategoryApi(route.params.id)
    if (res.code == "1") {
        categoryList.value = res.result;
    }
}

</script>

<style lang="scss" scoped>
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}
</style>