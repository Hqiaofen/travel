<template>
  <div>
      <div class="recommend-title">热销推荐</div>
      <ul>
        <li class="item" v-for="item of recommendList" :key="item.id">
          <!-- 热销推荐的图片 -->
          <img class="item-img"
          :src="item.imgUrl"/>
          <!-- 景点的相关信息 -->
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1901/3c/3cbe7f7c05d2f87aa3.img.jpg_200x200_c393415d.jpg',
        title: '福建福州平潭海坛古城',
        desc: '来一次说走就走的旅行'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2005/c9/c95ecb375175dac9a3.img.jpg_200x200_ac0be772.jpg',
        title: '福建福州连江奇达村',
        desc: '世界很大，要出去看看'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/23/a346e9bd7f4dc220c8d65eac.jpg_200x200_1fbabfc0.jpg',
        title: '福建福州鼓山',
        desc: '看日出日落的好地方哦'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background:#eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
