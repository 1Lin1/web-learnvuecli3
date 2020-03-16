<template>
  <div id="mei-zhuang">
    <div class="content">
      <div class="topTitle">
        <span class="hot-brand">热门品牌</span>
        <span class="other-title">全球精选，一网打尽</span>
      </div>
      <div class="shopGoods">
        <div class="left-banner">
          <div class="up-content">哈哈哈</div>
          <div class="down-content">呵呵呵</div>
        </div>
        <ul class="right-goods">
          <li v-for="item in goodsItemTitle"><a href=""><span>{{item}}</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MeiZhuang",
    data(){
      return{
        goodsItemTitle:['四亿人选择的零食品牌','好吃都在三只松鼠','创造美丽生活的文化','日本高人气日化品牌',
        '中国零食品牌','打造健康肌肤','科学配方 优质原材料','SPA体验型护肤品牌']
      }
    }
  }
</script>

<style scoped lang="scss">
  $shop-goods-border-size:1px solid #dddddd;
  #mei-zhuang{
   
    margin-top: 50px;
    .content{
      &:before{
        content: '';
        height: 1px;
        width: 1100px;
        background-color: #EEEEEE;
        position: absolute;
      }
      .topTitle{
        height: 74px;
        line-height: 74px;
        .hot-brand{
          font-size: 22px;
          color:#333;
          font-weight: 700;
          margin-right: 8px;
        }
        .other-title{
          color:#999999;
        }
        
      }
      height: 429px;
      display: grid;
      grid-template-rows: 74px 352px;
      .shopGoods{
        background-color: #ffffff;
        border-top: $shop-goods-border-size;
        border-left: $shop-goods-border-size;
        
        
        display: grid;
        grid-template-columns: 1fr 4fr;
        .left-banner{
          display: grid;
          grid-template-rows: 4fr 2fr;
          border-right: $shop-goods-border-size;
          .up-content,.down-content{
            border-bottom: $shop-goods-border-size;
          }
        }
        .right-goods{
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: repeat(4,1fr);
          
          align-items: end;
          text-align: center;
          
          li{
            display: inline-block;
            height: 100%;
            width: 100%;
            border-bottom: $shop-goods-border-size;
            border-right: $shop-goods-border-size;
          }
        }
      }
    }
    
  }
</style>