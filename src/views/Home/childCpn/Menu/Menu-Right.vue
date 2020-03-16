<template>
  <div id="menu-right">
    <ul class="menu--right-list">
      <li v-for="item in menuRightItem"><a href="">{{item}}</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Menu-Right",
    data(){
      return{
        menuRightItem:['首页','国家馆','全球逛','工厂店','品质奶粉','人气面膜','充值']
      }
    }
  }
</script>

<style scoped lang="scss">
  $menu-right-font-color:#000000;
  $menu-right-font-size:15px;
  #menu-right{
    .menu--right-list{
      display: grid;
      grid-template-columns: repeat(7,1fr) 3fr;
      justify-items: center;
      li{
        a{
          text-align: center;
          height: 41px;
          line-height: 41px;
          width: 164px;
          font-size: $menu-right-font-size;
          color: $menu-right-font-color;
          font-weight: bold;
          
          &:hover{
            color: #ff0000;
          }
        }
      }
    }
  }
</style>