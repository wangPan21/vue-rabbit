import  request  from "@/utils/request";

//获取轮播图的数据
export const reqGetBannerListApi = (params = {}) => {
    const {distributionSite = "1"} = params
    return request({url:'/home/banner',method:'get',params:{distributionSite}})
}
//获取新鲜好物的数据
export const reqGetNewListApi = () =>
    request({url:'/home/new',method:'get'})

//获取人气推荐的数据
export const reqGetHotListApi = () =>
    request({url:'/home/hot',method:'get'})

//获取产品列表的数据
export const reqGetGoodsListApi = () =>
    request({url:'/home/goods',method:'get'})