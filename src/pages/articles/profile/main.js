import Vue from 'vue'

export default {
  components: {

  },
  data() {
    return {
      article: []
    }
  },
  computed: {
    articleId() {
      return this.$route.params.profile
    }
  },
  mounted() {
    this.fetcharticleProfile()
  },
  methods: {
    fetcharticleProfile() {
      let apiUrl = `/hjsnew?newid=${this.articleId}`
      Vue.$http.get(apiUrl).then((response) => {
        console.log(response)
        this.article = response.data[0]
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
