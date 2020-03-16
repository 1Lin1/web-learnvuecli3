<template>
  <div class="menu-left">
    <div class="cate-all">
      <ul class="menu-list">
        <li><span>所有分类</span></li>
        <li v-for="item in menuListItem"><a href=""><span>{{item}}</span></a></li>
      </ul>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: "Menu-Left",
    data(){
      return{
        menuListItem:['美容彩妆','母婴儿童','营养保健','个人洗护','医疗设施',
          '服装鞋靴','运动户外','手表配饰','轻奢物品','家居生活','环球美食']
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-color:#ffffff;
  $font-hover-color:#ff0000;
  $bg-hover-color:#ffffff;
  $font-size:16px;
  $border-bottom-color:#eeee;
  .menu-left{
    .cate-all{
      height: 41px;
      line-height: 41px;
      width: 160px;
      
      text-align: center;
      color: $font-color;
      font-size: $font-size;
      position: relative;
      
      .menu-list{
        position: absolute;
        width: 160px;
        li{
          background:linear-gradient(90deg,red,#ff3264);
          a{
            display: inline-block;
            height: 41px;
            line-height: 41px;
            width: 160px;
            color: $font-color;
            &:hover{
              color: $font-hover-color;
              background:$bg-hover-color;
            }
          }
          border-bottom: 0.5px solid $border-bottom-color;
        }
      }
     
    }
  }
</style>