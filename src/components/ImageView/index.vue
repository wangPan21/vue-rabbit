<template>
    <div class="goods-image">
        <!-- 左侧大图-->
        <div class="middle" ref="target">
            <img :src="imageList[changeIndex]" alt="" />
            <!-- 蒙层小滑块 -->
            <div class="layer" v-show="!isOutside" :style="{ left: `${left}px`, top: `${top}px` }"></div>
        </div>
        <!-- 小图列表 -->
        <ul class="small">
            <li v-for="(img, i) in imageList" :key="i" @mouseenter="changeImage(i)"
                :class="{ active: i === changeIndex }">
                <img :src="img" alt="" />
            </li>
        </ul>
        <!-- 放大镜大图 -->
        <div class="large" :style="[
            {
                backgroundImage: `url(${imageList[changeIndex]})`,
                backgroundPositionX: `${positionX}px`,
                backgroundPositionY: `${positionY}px`,
            },
        ]" v-show="!isOutside"></div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useMouseInElement } from '@vueuse/core'

defineProps({ imageList: { type: Array, default: () => [] } })

//获取鼠标相对位置
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)

//控制滑块跟随鼠标移动
let left = ref(0)
let top = ref(0)
let positionX = ref(0)
let positionY = ref(0)

const changeIndex = ref(0)

//滑动右侧小图切换左侧大图的回调
const changeImage = (i) => {
    changeIndex.value = i
}

watch([elementX, elementY, isOutside], () => {  
    if (isOutside.value) return;  
  
    // 定义adjustPosition辅助函数来调整位置值  
    // 参数说明：  
    // - value: 当前鼠标位置或相关值  
    // - min: 位置的最小值  
    // - max: 位置的最大值  
    // - offset: 需要从当前值中减去的偏移量  
    const adjustPosition = (value, min, max, offset) => {  
        // 使用Math.max确保值不小于最小值  
        // 使用Math.min确保值不大于最大值  
        // 最后从调整后的值中减去偏移量  
        return Math.min(Math.max(value - offset, min), max);  
    };  
   // 使用adjustPosition函数来调整left值  
    // 这里假设left的最小值为0，最大值为200，偏移量为100
    left.value = adjustPosition(elementX.value, 0, 200, 100); 
    // 使用adjustPosition函数来调整top值  
    // 同理，top的最小值为0，最大值为200，偏移量为100   
    top.value = adjustPosition(elementY.value, 0, 200, 100);  
  
    positionX.value = -left.value * 2;  
    positionY.value = -top.value * 2;  
});

// 监听并跟随鼠标
// watch([elementX, elementY, isOutside], () => {
//     //如果鼠标没有在盒子里，则不需要执行后面的逻辑
//     if (isOutside.value) return
//     // 横向
//     if (elementX.value > 100 && elementX.value < 300) { left.value = elementX.value - 100 }
//     //纵向
//     if (elementY.value > 100 && elementY.value < 300) { top.value = elementY.value - 100 }
//     //处理边界
//     if (elementX.value > 300) { left.value = 200 }
//     if (elementX.value < 200) { left.value = 0 }

//     if (elementY.value > 300) { top.value = 200 }
//     if (elementY.value < 200) { top.value = 0 }

//     //控制大图的显示
//     positionX.value = -left.value * 2
//     positionY.value = -top.value * 2
// })

</script>

<style lang="scss" scoped>
.goods-image {
    width: 480px;
    height: 400px;
    position: relative;
    display: flex;

    .middle {
        width: 400px;
        height: 400px;
        background: #f5f5f5;
    }

    .large {
        position: absolute;
        top: 0;
        left: 412px;
        width: 400px;
        height: 400px;
        z-index: 500;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-repeat: no-repeat;
        // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
        background-size: 800px 800px;
        background-color: #f8f8f8;
    }

    .layer {
        width: 200px;
        height: 200px;
        background: rgba(0, 0, 0, 0.2);
        // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
        left: 0;
        top: 0;
        position: absolute;
    }

    .small {
        width: 80px;

        li {
            width: 68px;
            height: 68px;
            margin-left: 12px;
            margin-bottom: 15px;
            cursor: pointer;

            &:hover,
            &.active {
                border: 2px solid $xtxColor;
            }
        }
    }
}
</style>