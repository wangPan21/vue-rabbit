import request from "@/utils/request";

//获取订单详情接口
export const reqOrderListApi = (id) =>
    request({url:`/member/order/${id}`, method:'get'})