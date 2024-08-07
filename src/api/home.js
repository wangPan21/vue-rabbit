import  request  from "@/utils/request";

//获取轮播图的数据
export const reqGetBannerListApi = () =>
    request({url:'/home/banner',method:'get'})

//获取新鲜好物的数据
export const reqGetNewListApi = () =>
    request({url:'/home/new',method:'get'})

//获取人气推荐的数据
export const reqGetHotListApi = () =>
    request({url:'/home/hot',method:'get'})