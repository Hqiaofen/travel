<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市\景点\游玩主题
    </div>
    <div class="header-right">
        城市<span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scope>
@import '~styles/varibles.styl'
.header
  line-height: .86rem
  background: $bgColor
  color: #fff
  display: flex
  .header-left
    width: .64rem
    float: left
    text-align: center
    .back-icon
      text-align: center
      font-size: .32rem
  .header-input
    flex: 1
    height :.60rem
    line-height :.60rem
    padding-left :.2rem
    margin-top :.15rem
    margin-left :.20rem
    background: #fff
    border-radius :.1rem
    color : #ccc
  .header-right
    width: 1.24rem
    float: right
    text-align: center
    .arrow-icon
      font-size : .24rem
      padding-left :.1rem
</style>
