import Vue from 'vue'

export default {
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  computed: {},
  methods: {
    toDetail(val) {
      this.$router.push({
        name: 'articles-profile',
        params: { profile: val }
      })
    },
    filterImg(imgSrc) {
      if (imgSrc && imgSrc.startsWith('http:')) {
        return imgSrc = imgSrc.substring(5);
      }
    }
  }
}
