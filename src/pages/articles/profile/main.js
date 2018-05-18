import Vue from 'vue'

export default {
  components: {

  },
  data() {
    return {
      article: {}
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
      let apiUrl = `https://devapi.fccn.cc/Api/v1.1/PlatformArticles/PlatformArticle/${this.articleId}?fields=PlatformArticleAlbum,Contents`
      Vue.$http.get(apiUrl).then((response) => {
        this.article = response.data
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
