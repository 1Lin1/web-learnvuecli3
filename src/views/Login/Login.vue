<template>
  <div class="login-wrap" >
    <tab-control></tab-control>
    <div>
      <div class="load-menu">
    
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      
      
      
          <el-form-item label="邮箱:" prop="username" class="load-item">
            <el-input  v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
      
          <el-form-item label=" 密码：" prop="checkPass" class="load-item">
            <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    maxlength="20"
            ></el-input>
          </el-form-item>
      
<!--          <el-form-item label="验证码:" prop="mobilePass" class="load-item " >-->
<!--        -->
<!--        -->
<!--        -->
<!--            <el-row :gutter="0">-->
<!--              <el-col :span="15">-->
<!--                <el-input v-model.number="ruleForm.mobilePass"-->
<!--                          maxlength="6">-->
<!--                </el-input>-->
<!--              </el-col>-->
<!--          -->
<!--              <el-col :span="8">-->
<!--                <el-button type="success"-->
<!--                           class="submit-button"-->
<!--                           style="margin-left: 1rem"-->
<!--                           @click="getSureCode"-->
<!--                           :disabled="isDisableGetCode"-->
<!--                >获取验证码</el-button>-->
<!--              </el-col>-->
<!--        -->
<!--            </el-row>-->
<!--      -->
<!--          </el-form-item>-->
      
      
          <el-form-item>
            <el-button type="danger"
                       @click="submitRegisterForm('ruleForm')"
                       class="submit-button"
                       :disabled="isDisableButton"
            >登录</el-button>
            <!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
        </el-form>
  
  
      </div>
    </div>
<!--    <button  @click="checkStatus">切换状态</button>-->
<!--    <div v-show="isLoad">{{isLoad}}</div>-->
  </div>
</template>

<script>
  import { stripscript, validatePass, validateEmail, validateVCode } from '@/utils/validate';
  import {loadUser} from "../../network/login";
  import sha1 from 'js-sha1';
  import cookie from 'js-cookie';
  import {setUserName_Token,setPwd_Token} from "../../app/index";

  import TabControl from "../TabControl/TabControl";

  export default {
    
    components:{
      TabControl
    },
    data() {
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
          this.isDisableButton = true;
        } else if(validateEmail(value)){
          callback(new Error('邮箱格式有误'));
          this.isDisableButton = true;
  
        }
        else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
          this.isDisableButton = true;
  
        } else if(validatePass(value)){
          callback(new Error('请输入6-20位 字母加数字 密码'));
          this.isDisableButton = true;
  
        } else {
          callback();
          this.isDisableButton = false;
  
        }
      };
  
      
      // var checkMobilePass = (rule, value, callback) =>  {
      //   if (!value) {
      //     this.isDisableButton = true;
      //     // return callback(new Error('验证码不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (validateVCode(value)) {
      //       callback(new Error('请输入正确验证码'));
      //     } else {
      //       callback();
      //     }
      //   }, 1000);
      // };
      
      return {
        ruleForm: {
          username: '',
          checkPass: '',
          // mobilePass: ''
        },
        rules: {
          username: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
          // mobilePass: [
          //   { validator: checkMobilePass, trigger: 'blur' }
          // ]
        },
        isDisableButton:true,
        // isDisableGetCode:true,
        
        isLoad:false,
      };
    },
    methods: {
      submitRegisterForm(formName) {
        this.$refs[formName].validate((valid) => {
           if (valid) {
             console.log('登录用户' + this.ruleForm.username + this.ruleForm.checkPass);
             loadUser(this.ruleForm.username,sha1(this.ruleForm.checkPass)).then((res) => {
               console.log(res);
               if(res.length !==0){
                 
                 
                 //vuex管理token
                 this.$store.dispatch('addUserName_Token',res[0].username);
                 this.$store.dispatch('addPwd_Token',res[0].passWord);
                 
                 // cookie管理token
                 setUserName_Token(res[0].username);
                 setPwd_Token(res[0].passWord);
                 
                 this.$router.push('/home')
               }else{
                 alert('登录失败 密码错误 请重新登录')
  
               }
             })
           } else {
             alert('登录失败 密码错误 请重新登录')
             console.log('error submit!!');
             return false;
           }
          
        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },
  
      checkStatus(){
        this.isLoad = !this.isLoad;
        
        // html5存储session
        // sessionStorage.setItem('isLoad',JSON.stringify(this.isLoad))
        
        // local需要手动清除
        localStorage.setItem('isLoad',JSON.stringify(this.isLoad))
        
      },
  
      getSureCode(){
        console.log('获取验证码');
        if(!this.ruleForm.username){
          this.$message({
            showClose: true,
            message: '邮箱不能为空',
            type: 'error',
            center: true
          });
  
        }else if(!this.ruleForm.checkPass){
          this.$message({
            showClose: true,
            message: '密码不能为空',
            type: 'error',
            center: true
          });
  
        }
      }
      
    
    },
    mounted() {
      this.isLoad = localStorage.getItem('isLoad') || false;
    },
    // watch: {
    //   'ruleForm.mobilePass': function (newValue, oldVal) {
    //     let statusLength = newValue.toString().length;
    //     if(this.ruleForm.username && this.ruleForm.checkPass && statusLength === 6){
    //       this.isDisableButton = false;
    //     }else {
    //       this.isDisableButton = true;
    //     }
    //   }
    // }
  }
</script>

<style scoped lang="scss">
  .submit-button{
    display: block;
    width: 100%;
  }
  .login-wrap{
    width: 100vw;
    height: 100vh;
    position: relative;
    
    text-align: center;
  }
  .load-menu{
    width: 30rem;
    height: 40rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 10rem;
    bottom: 0;
    margin: auto auto;
  }
  .load-item{
    margin-bottom: 1rem;
  }
  .mobile-code{
    margin-right: 1rem;
  }
</style>