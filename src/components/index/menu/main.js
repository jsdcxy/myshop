import Vue from 'vue'

export default {
  data () {
    return {
      menus: []
    }
  },
  created () {
    this.getMenus()
  },
  methods: {
    getMenus () {
      Vue.$http.get('/menus').then(res => {
        this.menus = res.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
