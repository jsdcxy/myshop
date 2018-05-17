import Vue from 'vue'
import newList from '@/components/news/newlist/main.vue'
import newSearch from '@/components/news/search/main.vue'
export default {
  components: {
    newList,
    newSearch
  },
  data() {
    return {
      active: 0,
      tabList: [],
      categoryId: 'new-127-258-369',
      currentTab: '精选',
      show: false
    }
  },
  computed: {
    // vue-awesome-swiper 配置，包含滑动时触发切换标签栏
    swiperOption() {
      let _this = this
      return {
        initialSlide: 0,
        autoheight: true,
        on: {
          slideChangeTransitionStart() {
            _this.currentTab = _this.tabList[this.activeIndex].title
            _this.categoryId = _this.tabList[this.activeIndex].id
            _this.active = _this.tabList[this.activeIndex].index
          }
        }
      }
    }
  },
  created() {
    this.getNews()
  },
  methods: {
    closeSeach() {
      this.show = false
    },
    // onTabsChange(activeIndex) {
    //   this.activeIndex = activeIndex
    // },
    slide(index, title) {
      this.mySwiper.slideTo(index, 500, true)
        // this.active = index
    },
    getNews() {
      Vue.$http.get('/text').then(res => {
        let restabList = res.data
        this.tabList = restabList.map((item, index) => {
          return { title: item.title, id: item.id, index: index + 1 }
        })
        this.tabList.unshift({ title: '精选', id: 'new-127-258-369', index: 0 })
      }).catch(function(error) {
        console.log(error)
      })
    },
    onClickLeft() {},
    onClickRight() {
      this.show = !this.show
    }
  }
}
