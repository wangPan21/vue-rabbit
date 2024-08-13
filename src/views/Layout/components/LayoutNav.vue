<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 多模版渲染 -->
        <template v-if="userStore.userInfo.token">
          <li><a href="javascript:;"><i class=" iconfont icon-user"></i>{{ userStore.userInfo.account }}</a></li>
          <li>
            <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消" @confirm="logOuts">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;" @click="$router.push('/member')">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

//初始化仓库实例
const userStore = useUserStore()

//初始化路由
const router = useRouter()

//退出登录按钮的回调
const logOuts = async () => {
  //清理用户信息
  await userStore.logOut()
  ElMessage({
    type:'success',
    message:'退出成功，请重新登录'
  })
  //退出成功后，跳转到登录页面
  router.push({path:'/login'})
}
</script>

<style lang="scss" scoped>
.app-topnav {
  background: #333;

  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>