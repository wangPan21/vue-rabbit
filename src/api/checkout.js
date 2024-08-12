import request from "@/utils/request";

//生成订单的接口
export const reqGetOrderApi = () =>
    request({ url: '/member/order/pre', method: 'get' })

//修改收货地址