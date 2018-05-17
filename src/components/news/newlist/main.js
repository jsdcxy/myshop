import Vue from 'vue'
import contentList from '@/components/news/contentlist/main.vue'
export default {
  props: {
    currentId: {
      type: String
    }
  },
  components: {
    contentList
  },
  data() {
    return {
      list: [],
      page: 1
    }
  },
  methods: {
    onInfinite($state) {
      let apiUrl = `/hjsnew?_page=${this.page }&_limit=4`
      if (this.currentId == 'new-127-258-369') {
        apiUrl = `${apiUrl}&isapp=true`
      } else {
        apiUrl = apiUrl + `&id=${this.currentId}`
      }

      Vue.$http.get(apiUrl).then((res) => {
        if (res.data.length) {
          this.list = this.list.concat(res.data)
          this.page += 1
          $state.loaded()
          if (res.data.length !== 4) {
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
