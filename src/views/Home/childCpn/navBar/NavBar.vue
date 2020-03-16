<template>
  <!--    导航栏部分-->
  <div class="wrap">
    <div class="nav content">
      <div class="nav-left">
        <span>考拉欢迎你</span>
        <a href="">登录</a>
        <a href="">免费注册</a>
        <a href="">手机考拉</a>
      </div>
      
      <div class="nav-right">
        <div class="group1" >
          <a href="">每日签到</a>
          <a href="">我的订单</a>
        </div>
        <div class="group2">
          <a href="">
            个人中心
            <i></i>
            <ul class="profile-admin">
              <li>我的优惠券</li>
              <li>我的红包</li>
              <li>我的考拉豆</li>
              <li>账号管理</li>
              <li>我的实名认证</li>
              <li>我的发票抬头</li>
              <li>我收藏的商品</li>
              <li>我关注的品牌</li>
              <li>售后管理</li>
            </ul>
            
          </a>
          <a href="">客户服务
            <i></i>
            <ul class="service-customer">
              <li>联系客服</li>
              <li>帮助中心</li>
              <li>知识产权保护</li>
              <li>规则中心</li>
             
            </ul>

          </a>
          <a href="">充值中心
            <i></i>
            <ul class="paid-center">
              <li>话费充值</li>
              <li>游戏充值</li>
              <li>AppStore充值</li>
  
            </ul>
          </a>
          <a href="">消费者权益
            <i></i>
            <ul class="paid-center">
              <li>消费者告知书</li>
            </ul>
          </a>
          <a href="">更多
            <i></i>
          </a>
        </div>
      </div>
    
    
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="scss">
  #home-cpn{
    .wrap{
      height: 30px;
      line-height: 30px;
      background-color: #000000;
      .nav{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        span,a{
          color: #999999;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          font-size: 12px;
          &:hover{
            color:#ffffff;
          }
        }
        .nav-right{
          display: flex;
          .group2 i{
            display: inline-block;
            width: 0;
            height: 0;
            border: 4px solid #999999;
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            
            margin-top: 5px;
            transition: transform .3s linear;
            transform-origin: center 2px;
          }
          
          .group2 a{
            position: relative;
            &:hover{
              color: red;
              background-color: #ffffff;
              i{
                border-top-color: red;
                transform: rotate(180deg);
              }
              
              ul{
                background-color: #ffffff;
                display: block;
                position: absolute;
                width: 120px;
                left: 0;
                z-index: 99;
                li{
                  display: block;
                  background-color: #ffffff;
                }
              }
            }
          }
          
          .group2 {
            a {
              
              .service-customer {
                display: none;
                li{
                  margin-left: 13px;
                  color:#999999;
                  height: 30px;
                  line-height: 30px;
                  &:hover{
                    color:#ff0000;
                  }
                }
                
              
              }
              .profile-admin{
                display: none;
                li{
                  margin-left: 13px;
                  color:#999999;
                  height: 30px;
                  line-height: 30px;
                  &:hover{
                    color:#ff0000;
                  }
                  &:nth-child(3){
                    border-bottom: 1px solid #EEEEEE;
                  }
                  &:nth-child(6){
                    border-bottom: 1px solid #EEEEEE;
                  }
                  &:nth-child(8){
                    border-bottom: 1px solid #EEEEEE;
                  }
                }
              }
              .paid-center{
                @extend .service-customer
              }
            }
          }
        }
        
      }
    }
  }
</style>