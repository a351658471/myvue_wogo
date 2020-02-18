<template>
  <div class="header">
      <div class="header-left iconfont">&#xe64a;</div>
      <div class="header-center">输入城市/景点/游玩主题</div>
      <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    .header{
        display :flex;
        line-height : .86rem;
        background:#00bcd4;
        color:#fff
        .header-left{
            width: .64rem
        }

        .header-center{
            flex :1;
            background:#fff
            height :.64rem
            line-height :.64rem
            margin-top 0.12rem
            border-radius:.1rem
            margin-left .2rem
            color:#ccc


        }

        .header-right{
            width:1.24rem
        }
    }


</style>