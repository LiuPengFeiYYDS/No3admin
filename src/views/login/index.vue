<template>
  <div class="login">
    <div class="login-min">
      <h1>火星</h1>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :size="formSize"
        status-icon
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" :prefix-icon="Avatar" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model="ruleForm.userPwd"  :prefix-icon="View" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { Avatar, View } from '@element-plus/icons-vue'
import { reactive } from 'vue'
// import { useStore } from 'vuex';
//  import { useRouter, useRoute } from 'vue-router';
//  export default {
// setup(props, ctx) {
// const store = useStore();
// const router = useRouter();
// const route = useRoute();
// const data = reactive({});
// return { ...toRefs(data) };
//  },
//  };
const ruleForm = reactive({
  username: '',
  userPwd: ''
})
const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url(https://img2.baidu.com/it/u=883742208,2621708329&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=422);
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
