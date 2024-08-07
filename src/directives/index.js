import { useIntersectionObserver } from '@vueuse/core'

//定义懒加载插件
export const lazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
        app.directive('img-lazy', {
            //el:指令绑定到哪个元素上
            //binding： binding.value 指令等于号后面绑定的表达式的值
            mounted(el, binding) {
                //vueUse里的useIntersectionObserver
                const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting);
                        if (isIntersecting) {
                            //图片进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}