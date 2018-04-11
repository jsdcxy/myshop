import Vue from 'vue'
export default {
  data () {
    return {
      products: [],
      currentDate: new Date().toLocaleDateString()
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      Vue.$http.get('/menus').then(res => {
        this.products = res.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
