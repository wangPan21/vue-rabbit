import axios from 'axios';
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/userStore";
import router from '@/router'

const request = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 20000
})

//请求拦截器
request.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    //如果有token则
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}), e => Promise.reject((e))

//响应拦截器
request.interceptors.response.use(res => res.data, e => {
    // const router = useRouter()
    const userStore = useUserStore()
    //统一错误提示
    ElMessage({
        type: 'error',
        message: e.response.data.msg
    })
    //401token失效处理
    if (e.response.status === 401) {
        userStore.logOut()
        router.push({path:'/login'})

    }
    return Promise.reject(e)
})

//对外暴漏request
export default request;