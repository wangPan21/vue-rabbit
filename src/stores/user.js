// 管理用户有关数据
import { defineStore } from 'pinia'
import { ref } from "vue";
import { reqGetLoginApi } from "@/api/login";

export const useUserStore = defineStore('user', () => {
    //定义state
    const userInfo = ref({})
    //定义获取 登录 接口数据的函数
    const getUserInfo = async ({ account, password }) => {
        const res = await reqGetLoginApi(account, password)
        if (res.code == '1') {
            userInfo.value = res.result;
        }
    }

    //退出登录的回调函数
        //定义获取 登录 接口数据的函数
    const logOut = async () => {
        //清除用户数据
        userInfo.value = {}
    }
    //返回数据
    return {
        userInfo, getUserInfo,logOut
    }
}, {
    persist: true
})