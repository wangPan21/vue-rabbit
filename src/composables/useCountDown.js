//封装倒计时函数
import { computed, ref } from "vue";
import dayjs from "dayjs";

export const useCountDown = () => {
    //响应式数据
    const time = ref(0)
    //格式化时间 xx min xx s
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    //开启倒计时的函数
    const start = (currentTime) => {
        //开始倒计时的逻辑
        time.value = currentTime,
            setInterval(() => {
                time.value--
            }, 1000)
    }
    return {
        formatTime,
        start
    }
}
