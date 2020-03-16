<template>
  <div id="menu">
    <div class="content">
      <MenuLeft></MenuLeft>
      <MenuRight></MenuRight>
    </div>
  </div>
</template>

<script>
  import MenuLeft from "./Menu-Left";
  import MenuRight from "./Menu-Right";
  export default {
    name: "Menu",
    components: {MenuRight, MenuLeft}
  }
</script>

<style scoped lang="scss">
  #menu{
    position: relative;
    z-index: 10;
    .content{
      display: grid;
      grid-template-columns: 0.15fr 0.9fr;
    }
  }
</style>