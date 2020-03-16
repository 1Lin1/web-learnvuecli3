<template>
  <!--    搜索框部分-->
  <div class="operate content">
    <div class="bigLogo">
      <a href="">
        <img src="@/assets/img/logo-top.png" alt="">
      </a>
    </div>
    <search-cart></search-cart>
    <shop-cart></shop-cart>
  </div>
</template>

<script>
  import SearchCart from "./SearchCart";
  import ShopCart from "./ShopCart";
  export default {
    name: "OperateBar",
    components: {ShopCart, SearchCart}
  }
</script>

<style scoped lang="scss">
  #home-cpn{
    .operate{
      height: 120px;
      line-height: 120px;
      display: grid;
      grid-template-columns: 4fr 5fr 2fr;
    }
  
  }
</style>