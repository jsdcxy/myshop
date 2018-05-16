import Vue from 'vue'
import articlesList from '@/components/articles/list/main.vue'

export default {
  components: {
    articlesList
  },
  data() {
    return {
      activeIndex: 0,
      tabList: []
    }
  },
  created() {
    this.getTablist()
  },
  methods: {
    onTabsChange(activeIndex) {
      this.activeIndex = activeIndex
    },
    getTablist() {
      Vue.$http.get('https://api.fccn.cc/Api/v1.1/PlatformArticles/PlatformArticleCategory/List?IsApp=true&OrderBy=sort_asc').then((response) => {
        let restabList = response.data
        this.tabList = restabList.map((item, index) => {
          return { title: item.Title, id: item.Id, index: index + 1 }
        })
        this.tabList.unshift({ title: '精选', id: 'featured', index: 0 })

        this.tabList.forEach((item) => {
          Vue.set(this.listMap, `list-${item.id}`, [])
          Vue.set(this.pageMap, `page-${item.id}`, 0)
        })
      })
    }
  }
}
