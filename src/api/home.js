import  request  from "@/utils/request";

//获取轮播图的数据
export const reqGetBannerListApi = () =>
    request({url:'/home/banner',method:'get'})