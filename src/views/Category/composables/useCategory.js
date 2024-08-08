// 封装分类数据相关的业务代码

import { ref, onMounted, onUpdated } from "vue";
import { reqGetCategoryApi } from "@/api/category.js";
import { useRoute } from "vue-router";

export function useCategory() {

    //初始化路由参数
    const route = useRoute()
    //初始化分类数据
    let categoryList = ref({})

    //组建挂载时
    onMounted(() => {
        // 获取一级分类的数据
        getCategoryList()
    })

    //响应式状态发生变化，更新Dom
    onUpdated(() => {
        // 获取一级分类的数据
        getCategoryList()

    })

    //获取一级分类的数据
    const getCategoryList = async () => {
        let res = await reqGetCategoryApi(route.params.id)
        if (res.code == "1") {
            categoryList.value = res.result;
        }
    }

    return{
        categoryList
    }
}