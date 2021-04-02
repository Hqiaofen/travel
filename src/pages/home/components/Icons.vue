<template>
    <div class="icons">
      <swiper>
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img  class="icon-img-content" :src="item.imgUrl"/>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_fight.png',
        desc: '机票'
      }, {
        id: '0002',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_train.png',
        desc: '机票'
      }, {
        id: '0003',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_hotel.png',
        desc: '机票'
      }, {
        id: '0004',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_trip.png',
        desc: '机票'
      }, {
        id: '0005',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_fight.png',
        desc: '机票'
      }, {
        id: '0006',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_train.png',
        desc: '机票'
      }, {
        id: '0007',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_hotel.png',
        desc: '机票'
      }, {
        id: '0008',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_trip.png',
        desc: '机票'
      }, {
        id: '0009',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_fight.png',
        desc: '机票'
      }, {
        id: '0010',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_train.png',
        desc: '机票'
      }, {
        id: '0011',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_hotel.png',
        desc: '机票'
      }, {
        id: '0012',
        imgUrl: '//file.40017.cn/appresource/image/touch/home/icon_trip.png',
        desc: '机票'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scope>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    height: 0
    float: left
    width: 25%
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img-content
        display: block
        height: 100%
        transform: scale(0.6)
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTestColor
</style>
