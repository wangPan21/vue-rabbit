import request from '@/utils/request'

//获取产品详情的数据
export const reqGetDatailApi = (id) =>
    request({ url: '/goods', method: 'get', params: { id } })