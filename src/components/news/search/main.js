export default {
  name: 'home-search',
  data() {
    return {
      value: '',
      sb: true
    }
  },
  methods: {
    toSearch() {
      // this.$router.push('/search')
    },
    fade() {
      this.sb = !this.sb
    }
  }
}
