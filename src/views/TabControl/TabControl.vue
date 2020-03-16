<template>
  <div class="button-load">
    <el-row >
      <el-button type="primary" @click="toLogin">登录</el-button>
      <el-button type="primary" @click="toRegister">注册</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        path:''
      }
    },
    methods:{
      toLogin(){
        if(this.$route.path !== '/login'){
          this.$router.push('/login')
        }
      },
      toRegister(){
        if(this.$route.path !== '/register'){
          this.$router.push('/register')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .button-load{
    text-align: center;
    position: relative;
    left: 4rem;
    top:5rem;
    z-index: 100;
  }
</style>