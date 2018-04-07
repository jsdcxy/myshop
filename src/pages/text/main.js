import Vue from 'vue'

export default {
  data () {
    return {
      texts: [],
      a: ["a","b","c"]
    }
  },
  created () {
    this.getTexts()
  },
  methods: {
    getTexts () {
      Vue.$http.get('/banners').then(res => {
        this.texts = res.data
        // console.log(this.menus)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
