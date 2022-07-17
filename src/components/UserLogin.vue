<template>
  <div id="LoginForm">
    <div class="login_panel">
      <el-card shadow="always" class="login_panel_form">
        <template #header>
          <div class="card-header">
            <span>用户登录</span>
            <el-button class="button" text closed>User Login</el-button>
          </div>
        </template>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          label-width="auto"
          @keyup.enter="submitForm"
          :rules="rules">
          <el-form-item label="账号" prop="user">
            <el-input v-model="ruleForm.user" placeholder="admin" :suffix-icon="User"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" placeholder="admin" :suffix-icon="Lock"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <div class="login_panel_right" />
    </div>
  </div>


</template>
<script setup>
import { reactive,ref } from 'vue'
import { ElMessage } from 'element-plus'
import {Login} from '@/api/user'
// import router from '@/router/index';
import { globalStore } from '@/store/modules/global'
import { User,Lock } from '@element-plus/icons-vue'
import router from "@/router";
// import  { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref(null)
const ruleForm = reactive({
    user: '',
    password: ''
  })

const validatePass = (rule, value, callback)=>{
  if (value !== 'admin') {
    return callback(new Error('请输入正确的密码'))
  } else {
    callback()
  }
}
const rules =reactive({
  user: [{required:true,trigger:'blur'}],
  password: [{ validator: validatePass, trigger: 'blur' }]
})
const submitForm = ()=>{
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      Login(ruleForm.user,ruleForm.password).then(res=>{
        if (res.code ===0){
          ElMessage({
            type: 'success',
            message: '登录成功',
            showClose: true,
          })
          globalStore().setUserInfo(res.data.user)
          globalStore().setRouters(res.data.token)
          localStorage.setItem('token',res.data.token)
          router.push('/dashboard')
        }else{
          ElMessage({
            type: 'error',
            message: '登录失败:'+ res.code,
            showClose: true,
          })
          return false
        }
      })
    } else {
      return false;
    }
  });
}
</script>

<style lang="scss" scoped>
#LoginForm{
    margin: 0;
    padding: 0;
    background-image: url("@/assets/login_background.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
      .login_panel {
        position: absolute;
        top: 3vh;
        left: 2vw;
        width: 96vw;
        height: 94vh;
        background-color: rgba(255, 255, 255, .8);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .login_panel_right {
          background-image: url("@/assets/login_left.svg");
          background-size: cover;
          width: 40%;
          height: 60%;
          float: right !important;
        }

        .login_panel_form {
          width: 300px;
          padding: 20px;
        }
      }
}
</style>
