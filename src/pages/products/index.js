
export default {

  name: 'products-list',
  computed: {
    categoryId () {
      return this.$route.params.category
    }
  },
  data () {
    return {
      products: []
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    fetchProducts () {
      var apiUrl = '/menus/'
      let s = this.categoryId
      if (s === '0') {
        apiUrl = '/Foods/'
      } else if (s === '1') {
        apiUrl = '/Books/'
      } else if (s === '2') {
        apiUrl = '/Digital/'
      } else if (s === '3') {
        apiUrl = '/MensWear/'
      } else if (s === '4') {
        apiUrl = '/WomensWear/'
      } else if (s === '5') {
        apiUrl = '/Appliance/'
      } else if (s === '6') {
        apiUrl = '/Beddings/'
      } else if (s === '7') {
        apiUrl = '/Articles/'
      } else if (s === '8') {
        apiUrl = '/Shoes/'
      } else {
        apiUrl = '/Rests/'
      }
      this.$http.get(apiUrl).then(res => {
        this.products = res.data
      })
    }
  }
}
