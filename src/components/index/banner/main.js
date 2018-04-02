import Vue from 'vue'

export default {
  data () {
    return {
      images: []
    }
  },
  created () {
    this.getImages()
  },
  methods: {
    getImages () {
      Vue.$http.get('/banners').then(res => {
        this.images = res.data
        // console.log(res)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
