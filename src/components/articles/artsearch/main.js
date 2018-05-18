import Vue from 'vue'
export default {
  name: 'home-search',
  data() {
    return {
      value: '',
      hotWords: [],
      searchList: [],
      page: 0,
      openInfinite: false,
      hotword: ''
    }

  },
  mounted() {
    this.hotSearch()
  },
  methods: {
    closeSearch() {
      this.$emit('close')
    },
    search() {
      if (this.openInfinite) {
        this.resetList()
      }
      this.openInfinite = true
    },
    hotSearch() {
      Vue.$http.get('https://devapi.fccn.cc/Api/v1.1/PlatformArticles/PlatformArticleSearch/List').then(res => {
        this.hotWords = res.data
        console.log(this.hotWords)
      }).catch(function(error) {
        console.log(error)
      })
    },
    searchByHot(val) {
      this.value = ''
      this.hotword = val
      if (this.openInfinite) {
        this.resetList()
      }
      this.openInfinite = true
    },
    toDetail(val) {
      this.$router.push({ path: `/articles/${val}` })
    },
    resetList() {
      this.page = 0
      this.searchList = []
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset')
    },
    onInfinite($state) {
      let apiUrl = `https://devapi.fccn.cc/Api/v1.1/PlatformArticles/PlatformArticle/List?fields=PlatformArticleAlbum&Skip=${this.page * 10}&Take=10&Keyword=${this.value.length ? this.value : this.hotword}`
      Vue.$http.get(apiUrl).then((response) => {
        if (response.data.length) {
          this.searchList = this.searchList.concat(response.data)
          this.page += 1
          $state.loaded()
          if (response.data.length !== 10) {
            $state.complete()
          }
        } else {
          $state.complete()
        }
      })
    }
  }
}
