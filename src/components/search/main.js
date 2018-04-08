export default {
  name: 'home-search',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    toSearch () {
      this.$router.push('/search')
    }
  }
}
