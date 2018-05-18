import Vue from 'vue'
import listItem from '../listItem/main.vue'

export default {
  props: {
    currentId: {
      type: String
    }
  },
  components: {
    listItem
  },
  data() {
    return {
      list: [],
      page: 0
    }
  },
  methods: {
    onInfinite($state) {
      let apiUrl = `https://devapi.fccn.cc/Api/v1.1/PlatformArticles/PlatformArticle/List?Take=8&Skip=${this.page * 8}&fields=PlatformArticleCategory,PlatformArticleAlbum,Types}`

      if (this.currentId === 'featured') {
        apiUrl = `${apiUrl}&IsTop=true`
      } else {
        apiUrl = apiUrl + `&categoryId=${this.currentId}`
      }

      Vue.$http.get(apiUrl).then((res) => {
        if (res.data.length) {
          this.list = this.list.concat(res.data)
          this.page += 1
          $state.loaded()
          if (res.data.length !== 8) {
            $state.complete()
          }
        } else {
          $state.loaded()
        }
      }).catch(function(error) {
        console.log(error)
      })
    }
  }
}
