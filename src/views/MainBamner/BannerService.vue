<template>
  <div class="banner-service">
<!--    毛玻璃效果-->
    <div class="blur"></div>
    <div class="service-list">
      <ul class="service-list-ul">
        <li v-for="item in serviceList"><a href="">{{item}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BannerService",
    data(){
      return{
        serviceList:['考拉自营','全球直采','假一赔十','售后无忧']
      }
    }
  }
</script>

<style scoped lang="scss">
  .banner-service{
    height: 45px;
    position: absolute;
    bottom: 0;
    /*继承父元素的width*/
    width: 100%;
    
    overflow: hidden;
    .blur{
      position: absolute;
      width: 100%;
      height: 100%;
      background:url("https://haitao.nosdn1.127.net/a869f127-8e64-403c-bad7-3427e14fc27cT20021701042_1920_506.jpg?imageView&thumbnail=1920x0&quality=90")
      center bottom;
  
      filter: blur(5px);
    }
    .service-list{
      position:absolute;
      width: 100%;
      height: 100%;
      .service-list-ul{
        position: relative;
        left: 400px;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4,8%);
        align-items: center;
        justify-items: center;
        
        a{
          display: inline-block;
          height: 45px;
          line-height: 45px;
          width: 100%;
          
          color: #ffffff;
          font-size: 15px;
          font-weight: bold;
        }
      }
    }
    
  }
</style>