<template>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
    <LayoutFixed></LayoutFixed>
</template>

<script setup>
import { onMounted } from 'vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from "@/stores/categoryStore";

const categoryStore =  useCategoryStore()

onMounted(() => categoryStore.getCategory())

</script>

<style lang="scss" scoped></style>