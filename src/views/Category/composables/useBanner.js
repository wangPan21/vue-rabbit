// 封装banner轮播图相关的业务代码

import { ref, onMounted } from "vue";
import { reqGetBannerListApi } from "@/api/home";

export function useBanner() {
    //初始化轮播图数据
    let bannerList = ref([])

    //组建挂载时
    onMounted(() => getBannerList())

    //获取轮播图数据的回调
    const getBannerList = async () => {
        let res = await reqGetBannerListApi({ distributionSite: '2' })
        if (res.code == "1") {
            bannerList.value = res.result
        }
    }
    return {
        bannerList
    }
}