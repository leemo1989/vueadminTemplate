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
        <el-form :model="form" label-width="auto" status-icon ref="ruleFormRef">
          <el-form-item label="账号">
            <el-input v-model="form.user" placeholder="admin" :suffix-icon="User"/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" placeholder="admin"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <div class="login_panel_right" />
    </div>
  </div>


</template>
<script>
import { reactive } from 'vue'
export default {
  name: 'UserLogin',
  data() {
    return {
    }
  },
  methods:{
    submitForm(){
      if (this.form.user === this.form.password){
        this.$message.success("login success")
        window.localStorage.setItem('token','123456789')
        this.$router.push('/dashboard')
      }
      console.log('submit!')
    }
  },
  setup(){
    const form = reactive({
        user: '',
        password: ''
      })
    return {form}

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
