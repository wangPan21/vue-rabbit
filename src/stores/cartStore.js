//封装购物车模块

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    //定义state cartList
    const cartList = ref([])
    //定义action addCart
    //添加购物车
    const addCart = (goods) => {
        //添加购物车操作 已添加过count+1 没有添加过 push
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            //找到了
            item.count++
        } else {
            //没找到
            cartList.value.push(goods)
        }
    }

    //删除购物车
    const delCart = (skuId) =>{
        const index = cartList.value.findIndex((item)=> skuId === item.skuId)
        cartList.value.splice(index,1)
    }
    return {
        cartList, addCart,delCart
    }

},{
    persist: true
})