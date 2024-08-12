import request from "@/utils/request";

//生成订单的接口
export const reqGetOrderApi = () =>
    request({ url: '/member/order/pre', method: 'get' })

//创建订单接口 
export const reqFoundOrderApi = (data) =>
    request({ url: '/member/order', method: 'post', data })