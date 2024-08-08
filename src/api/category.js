import request from "@/utils/request";

//获取一级分类数据
export const reqGetCategoryApi = (id) =>
    request({ url: '/category', method: 'get', params: { id } })

//获取二级分类数据
export const reqGetSubCategoryApi = (id) =>
    request({ url: '/category/sub/filter', method: 'get', params: { id } })

//获取分类基础列表 
export const reqGetSubCategoryListApi = (data) =>
    request({ url: '/category/goods/temporary', method: 'post', data })