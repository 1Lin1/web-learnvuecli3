<template>
  <div id="home-cpn">
    <!--    导航栏-->
    <nav-bar></nav-bar>
    
    <!--    搜索一栏-->
    <operate-bar></operate-bar>
    
    <!--    主菜单栏-->
    <Menu></Menu>
    
    <!--    主要轮播图-->
    <MainBanner></MainBanner>
    
<!--    美妆专区-->
    <MeiZhuang></MeiZhuang>
  
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  import {removeUserName_Token,removePwd_Token} from "../../app/index";
  import { mapGetters } from 'vuex';
  
  import NavBar from "./childCpn/navBar/NavBar";
  import OperateBar from "./childCpn/operateBar/OperateBar";
  import Menu from "./childCpn/Menu/Menu"
  import MainBanner from "../MainBamner/MainBanner";
  import MeiZhuang from "./childCpn/MeiZhuang/MeiZhuang";
  export default {
    name: "Home",
    components: {
      MeiZhuang,
      MainBanner,
      OperateBar,
      NavBar,
      Menu,
    },
    methods:{
      exit_user(){
        //点击退出按钮 同意要清除cookie和vuex的token
        removeUserName_Token();
        removePwd_Token();
        
        this.$store.dispatch('addUserName_Token','');
        this.$store.dispatch('addPwd_Token','').then(res => {
        });
        this.$router.push('/login');
      }
    },
    computed:{
      ...mapGetters(['getterUserName_Token'])
    },
  }
</script>

<style scoped lang="scss">
  @import "./src/styles/home";
</style>