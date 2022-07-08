<template>
 <div class="login">
    <div class="login-min">
      <h1>火星</h1>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon>
        <el-form-item prop="userName">
          <el-input v-model="ruleForm.userName" :prefix-icon="Avatar" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model="ruleForm.userPwd" :prefix-icon="View" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { validatePass } from './validate'
import { Avatar, View } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const ruleForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})

const rules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, validator: validatePass, trigger: 'blur' }]
})

/**
 * 登录
 */
const ruleFormRef = ref()
function handleLogin() {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const res = await store.dispatch('user/handleLogin', ruleForm)
      if (res) router.push('/')
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url(https://img0.baidu.com/it/u=994419308,327898371&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=492);
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-min {
  width: 400px;
  height: 300px;
  background: rgba(18, 37, 18, 0.5);
  box-shadow: #ccc 0px 0px 30px;
  text-align: center;
}
h1 {
  font-size: 24px;
  margin: 10px 0;
  color: #fff;
}
.el-form {
  padding: 15px;
  .el-button {
    width: 100%;
  }
  .el-input {
    height: 40px;
    color: aqua;
    font-size: 14px;
  }
}
</style>
