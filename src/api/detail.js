import request from '@/utils/request'

//获取产品详情的数据
export const reqGetDatailApi = (id) =>
    request({ url: '/goods', method: 'get', params: { id } })

//获取热榜商品的数据
export const reqGetDatailHotApi = ({id,type,limit = 3}) =>
    request({ url: '/goods/hot', method: 'get', params: { id,type,limit } })