import request from '@/utils/request'

//用户登录
export const reqGetLoginApi = (account, password) =>
    request({ url: '/login', method: 'post', data: { account, password } })

//获取猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) =>
    request({ url: '/goods/relevant', params: { limit } })
