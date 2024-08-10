import request from '@/utils/request'

//用户登录
export const reqGetLoginApi = (account,password) =>
    request({url:'/login',method:'post',data:{account,password}})