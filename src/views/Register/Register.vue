<template>
  <div class="login-wrap" >
    <tab-control class="tab-control"></tab-control>
  
    <div>
      <div class="load-menu">
        
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          
          
          
          <el-form-item label="邮箱:" prop="username" class="load-item">
            <el-input  v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          
          <el-form-item label="密码:" prop="checkPass" class="load-item">
            <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    maxlength="20"
            ></el-input>
          </el-form-item>
          
          
          <el-form-item label="确认输入:" prop="checkPassAgain" class="load-item" >
            <el-input
                    type="password"
                    v-model="ruleForm.checkPassAgain"
                    autocomplete="off"
                    maxlength="20"
            ></el-input>
          </el-form-item>
          
          
          <el-form-item label="验证码:" prop="mobilePass" class="load-item " >
            
            <el-row :gutter="0">
              <el-col :span="15">
                <el-input v-model.number="ruleForm.mobilePass"
                          maxlength="6">
                </el-input>
              </el-col>
              
              <el-col :span="8">
                <el-button type="success"
                           class="submit-button"
                           style="margin-left: 1rem"
                           @click="getRegisterSureCode"
                           :disabled="isDisableGetCode"
                
                >{{ruleForm.GetCodeText}}</el-button>
              </el-col>
            
            </el-row>
          
          </el-form-item>
          
          
          <el-form-item>
            <el-button type="danger"
                       @click="submitRegisterForm('ruleForm')"
                       class="submit-button"
                       :disabled="isDisableButton"
            >注册</el-button>
            <!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
        </el-form>
      
      
      </div>
    </div>
    
  </div>
</template>

<script>
  import { stripscript, validatePass, validateEmail, validateVCode } from '@/utils/validate';
  import {registerUser} from "../../network/register";
  import  sha1 from 'js-sha1'
  import TabControl from "../TabControl/TabControl";

  export default {
  
    components:{
      TabControl
    },
    data() {
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
          this.isDisableGetCode = true;
        } else if(validateEmail(value)){
          callback(new Error('邮箱格式有误'));
          this.isDisableGetCode = true;
          
        }
        else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(validatePass(value)){
          callback(new Error('请输入6-20位 字母加数字 密码'));
        } else {
          callback();
        }
      };
      
      var validatePassAgain = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if(value !== this.ruleForm.checkPass){
          this.isDisableGetCode = true;
          callback(new Error('两次密码不一致'));
        } else {
          this.isDisableGetCode = false;
          callback();
        }
      };
      var checkMobilePass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (validateVCode(value)) {
            callback(new Error('请输入正确验证码'));
          } else {
            callback();
          }
        }, 1000);
      };
      
      return {
        ruleForm: {
          username: '',
          checkPass: '',
          checkPassAgain:'',
          mobilePass: '',
          GetCodeText:'获取验证码',
        },
        rules: {
          username: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
          checkPassAgain: [
            { validator: validatePassAgain, trigger: 'blur' }
          ],
          mobilePass: [
            { validator: checkMobilePass, trigger: 'blur' }
          ]
        },
        isDisableButton:true,
        isDisableGetCode:true,
        
      };
    },
    methods: {
      submitRegisterForm(formName) {
        this.$refs[formName].validate((valid) => {
          alert(valid);
          if (valid) {
            console.log('注册成功');
            let passWord = this.ruleForm.checkPass;
            
            registerUser(this.ruleForm.username,sha1(passWord)).then(res => {
              console.log(res);
            })
            
            this.$router.push('/login');
          } else {
            alert('注册失败 请填写正确格式');
            return false;
          }
          
        });
      },
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },
      
      // 获取注册验证码
      getRegisterSureCode(){
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
          
        }else if(!this.ruleForm.checkPassAgain){
          this.$message({
            showClose: true,
            message: '确认密码不能为空',
            type: 'error',
            center: true
          });
          
        }else{
          // 点击获取验证码后倒计时
         setTimeout(() => {
           console.log('成功发送验证码');
           this.isDisableGetCode = true;
           this.timeInterval(10);
         },1000)
        }
      },
      
      //点击获取倒计时
      timeInterval(number){
        let timer = number;
        let myInterval = setInterval(() => {
          this.ruleForm.GetCodeText = `发送中${timer}`;
          timer --;
          if(timer === -1){
            this.ruleForm.GetCodeText = '重新发送';
            this.isDisableGetCode = false;
            clearInterval(myInterval);
          }
        },1000)
      }
    },
    mounted() {
    
    },
    watch: {
      'ruleForm.mobilePass': function (newValue, oldVal) {
        let statusLength = newValue.toString().length;
        if(this.ruleForm.username && this.ruleForm.checkPass && statusLength === 6 && this.isDisableGetCode){
          this.isDisableButton = false;
        }else {
          this.isDisableButton = true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  /*scss语法*/
  $font-color:red;
  h1{
    color: $font-color;
  }
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