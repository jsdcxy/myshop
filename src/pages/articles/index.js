import Vue from 'vue'
import articlesList from '@/components/articles/list/main.vue'
import artSearch from '@/components/articles/artsearch/main.vue'

export default {
  components: {
    articlesList,
    artSearch
  },
  data() {
    return {
      active: 0,
      tabList: [],
      categoryId: 'featured',
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
    this.getTablist()
  },
  methods: {
    // onTabsChange(activeIndex) {
    //   this.activeIndex = activeIndex
    // },
    closeSeach() {
      this.show = false
    },
    slide(index, title) {
      this.mySwiper.slideTo(index, 500, true)
        // this.active = index
    },
    getTablist() {
      Vue.$http.get('https://api.fccn.cc/Api/v1.1/PlatformArticles/PlatformArticleCategory/List?IsApp=true&OrderBy=sort_asc').then((response) => {
        let restabList = response.data
        this.tabList = restabList.map((item, index) => {
          return { title: item.Title, id: item.Id, index: index + 1 }
        })
        this.tabList.unshift({ title: '精选', id: 'featured', index: 0 })
          // this.tabList.forEach((item) => {
          //   Vue.set(this.listMap, `list-${item.id}`, [])
          //   Vue.set(this.pageMap, `page-${item.id}`, 0)
          // })
      })
    },
    onClickRight() {
      this.show = !this.show
    }
  }
}
