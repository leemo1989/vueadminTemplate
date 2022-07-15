<template>
  <div id="LoginForm">
    <div class="login_panel">
      <el-card shadow="always" class="login_panel_form">
        <template #header>
          <div class="card-header">
            <span>用户登录</span>
            <el-button class="button" text>User Login</el-button>
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
            <el-input v-model="ruleForm.password" placeholder="admin"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleFormRef')">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <div class="login_panel_right" />
    </div>
  </div>


</template>
<script>
import { reactive,ref } from 'vue'
import {Login,getMenu} from '@/api/user'
import router from '@/router/index';
// import  { FormInstance, FormRules } from 'element-plus'
export default {
  name: 'UserLogin',
  data() {
    return {
    }
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success("login success")
          Login().then(res=>{
            console.log(res,4444);
            getMenu().then(res=>{
              console.log(res.data,666)
              const asyncRouters = ref([])
              res.data.menus.forEach(t => {
                console.log('t',t.meta)
                router.addRoute(t.meta)
                router.getRoutes()
              })
              console.log(router,77777,asyncRouters)
            })
          })

          // localStorage.setItem('token','123456789')
          // 这里需要做的事情，从后端获取token、用户信息、路由权限
          // 把获取到的用户信息和token存储到store
          // 把获取的路由用动态加载的方式存储起来
          // this.$router.push('/dashboard')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  setup(){
    const ruleForm = reactive({
        user: '',
        password: ''
      })

    const validatePass = (rule, value, callback)=>{
      console.log(rule,value,888)
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

    return {ruleForm,rules}

  }
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
