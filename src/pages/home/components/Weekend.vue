<template>
  <div>
      <div class="recommend-title">周末去哪儿</div>
      <ul>
        <li class="item" v-for="item of list" :key="item.id">
          <!-- 热销推荐的图片 -->
          <div class="item-img-swiper">
            <img class="item-img" :src="item.imgUrl"/>
          </div>
          <!-- 景点的相关信息 -->
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     weekendList: [{
  //       id: '0001',
  //       imgUrl: 'https://imgs.qunarzz.com/sight/source/1509/b5/07bc81fc254ed6.jpg_r_640x214_8879c815.jpg',
  //       title: '感受闽文化',
  //       desc: '一座座神秘的建筑，一段段传奇的历史，在这里深刻体会历史留下的点点足迹'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg',
  //       title: '泉州欢迎你',
  //       desc: '这个冬天不干燥，养生养颜休闲一举两得，这里有厦门独特的温泉渡假旅游区'
  //     }
  //     ]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background:#eee
    text-indent: .2rem
  .item-img-swiper
    overflow: hidden
    height: 0
    padding-bottom: 33%
    .item-img
      width: 100%
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
