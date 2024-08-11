//封装购物车模块

import { defineStore } from "pinia";
import { ref, computed } from "vue";

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
    const delCart = (skuId) => {
        const index = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(index, 1)
    }

    //单选功能
    const singleCheck = (skuId, selected) => {
        //通过skuId找到要修改的商品，再通过selected值修改商品的selected值
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    //全选功能
    const allCheck = (selected) => {
        //把cartList中所有商品的selected等于selected
        cartList.value.forEach((item) => item.selected = selected)
    }

    //计算属性 所有项的count之和
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

    //计算属性 所有项的总价
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    //计算属性 是否全选
    const isAll = computed(() => cartList.value.every(item => item.selected))

    return {
        cartList, addCart, delCart, allCount, allPrice, singleCheck, isAll, allCheck
    }

}, {
    persist: true
})