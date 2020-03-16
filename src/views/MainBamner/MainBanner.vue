<template>
  <div class="banner">
    <a  href="">
      <img src="https://haitao.nosdn1.127.net/a869f127-8e64-403c-bad7-3427e14fc27cT20021701042_1920_506.jpg?imageView&thumbnail=1920x0&quality=90" alt="">
    </a>
    
    <banner-service></banner-service>
  </div>
</template>

<script>
  import BannerService from "./BannerService";
  export default {
    name: "MainBanner",
    components: {BannerService}
  }
</script>

<style scoped lang="scss">
  #home-cpn{
    .banner{
      height: 505px;
      position: relative;
      overflow: hidden;
      img{
        transform: translate(-50%);
        margin-left: 50%;
        
        position: relative;
      }
    }
  }
</style>