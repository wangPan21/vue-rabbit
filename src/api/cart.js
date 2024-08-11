//封装加入购物车接口
import request from '@/utils/request'

//加入购物车接口
export const reqAddCartApi = ({ skuId, count }) =>
    request({ url: '/member/cart', method: 'post', data: { skuId, count } })

//获取购物车接口
export const reqGetCartApi = () =>
    request({ url: '/member/cart', method: 'get' })

//删除购物车接口
export const reqDelCartApi = (ids) =>
    request({ url: '/member/cart', method: 'delete', data: { ids } })