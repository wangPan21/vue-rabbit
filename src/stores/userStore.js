// 管理用户有关数据
import { defineStore } from 'pinia'
import { ref } from "vue";
import { reqGetLoginApi } from "@/api/login";
import { useCartStore } from "./cartStore";

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()

    //定义state
    const userInfo = ref({})
    //定义获取 登录 接口数据的函数
    const getUserInfo = async ({ account, password }) => {
        const res = await reqGetLoginApi(account, password)
        if (res.code == '1') {
            userInfo.value = res.result;
            //获取最新购物车数据
            cartStore.upDataCart()
        }
    }

    //退出登录的回调函数
    //定义获取 登录 接口数据的函数
    const logOut = async () => {
        //清除用户数据
        userInfo.value = {}
        //清除购物车数据
        cartStore.clearCart()
    }
    //返回数据
    return {
        userInfo, getUserInfo, logOut
    }
}, {
    persist: true
})