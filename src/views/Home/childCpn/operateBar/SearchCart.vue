<template>
  <div class="search-cart">
    <div class="search-content">
      <input type="text" placeholder="搜索框">
      <el-button class="search-button">搜索</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchCart"
  }
</script>

<style scoped lang="scss">
  $font-color:#ffffff;
  .search-cart{
    background-color: #fff;
    width: 479px;
    height: 30px;
    border:2px solid #ff0000;
    padding:6px 39px 6px 30px;
    border-radius: 24px ;
    align-self: center;
    
    position: relative;
  
  .search-content{
    position: absolute;
    top:-40px;
  input{
    border: none;
    background-color: transparent;
    outline: none;
  }
  
  .search-button{
    color:$font-color;
    height:44px ;
    width: 80px;
    background-color: #ff0000;
    
    border-radius: 25px;
    
    position: absolute;
    left: 440px;
    top: 38px;
  }
  }
  }

</style>