<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
      src="//img1.qunarzz.com/sight/p0/1902/8d/8d1ea5090af3e637a3.img.jpg_600x330_6f607d2d.jpg">
      <div class="banner-info">
        <div class="banner-title">欢迎你来厦门，这里风景无限好</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary"
    @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['//img1.qunarzz.com/sight/p0/1508/97/ea51af995c4d4de85c53855302b2f5af.water.jpg_600x330_0f634ac7.jpg',
        '//img1.qunarzz.com/sight/p0/1902/8d/8d1ea5090af3e637a3.img.jpg_600x330_6f607d2d.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        padding: 0 .4rem
        margin-top: .14rem
        border-radius: .2rem
        background: rgba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
