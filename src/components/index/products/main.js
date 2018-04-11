import Vue from 'vue'
export default {
  data () {
    return {
      images: [],
      // tle:[],
      currentDate: new Date().toLocaleDateString()
    }
  },
  created () {
    this.getImages()
    // this.getTitle();
  },
  methods: {
    getImages () {
      Vue.$http.get('/menus').then(res => {
        this.images = res.data
      }).catch(function (error) {
        console.log(error)
      })
    }
    // getTitle() {
    //   Vue.$http.get('/menus').then(res => {
    //       this.tle =res.data
    //       //console.log(res)
    //   }).catch(function (error) {
    //       console.log(error);
    //     });
    // }
  }
}
