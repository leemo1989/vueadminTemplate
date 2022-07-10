<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="账号">
      <el-input v-model="form.user" placeholder="admin"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" placeholder="admin"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      form:{
        user: '',
        password: ''
      }
    }
  },
  methods:{
    onSubmit(){
      if (this.form.user === this.form.password){
        this.$message.success("login success")
        window.localStorage.setItem('token','123456789')
        this.$router.push('/dashboard')
      }
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
