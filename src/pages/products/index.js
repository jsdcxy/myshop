
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
      if (this.categoryId) {
        apiUrl = `${apiUrl}${this.categoryId}`
      }
      this.$http.get(apiUrl).then(res => {
        this.products = res.data.store_list
      })
    }
  }
}
