import Vue from 'vue'
export default {
  name: 'home-search',
  data() {
    return {
      value: '',
      hotWords: [],
      searchList: [],
    }
  },
  mounted() {
    this.hotSearch()
  },
  methods: {
    toSearch() {
      // this.$router.push('/search')
    },
    closeSearch() {
      this.$emit('close')
    },
    search() {},
    hotSearch() {
      Vue.$http.get('/hotwords').then(res => {
        this.hotWords = res.data
        console.log(this.hotWords)
      }).catch(function(error) {
        console.log(error)
      })
    },
    searchByHot(val) {
      // this.keyword = ''
      // this.hotword = val
      // if (this.openInfinite) {
      //   this.resetList()
      // }
      // this.openInfinite = true
    },
  }
}
