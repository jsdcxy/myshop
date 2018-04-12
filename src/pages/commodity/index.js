
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant'
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  computed: {
    categoryId () {
      return this.$route.params.category
    }
  },
  data () {
    return {
      goods: [],
      show: false
    }
  },
  created () {
    this.getGoods()
    // this.getTitle();
  },
  methods: {
    getGoods () {
      let apiUrl = '/Foods/'
      let s = this.categoryId.substring(0, 3)
      if (s === '100') {
        apiUrl = `${apiUrl}${this.categoryId}`
      } else if (s === '200') {
        apiUrl = '/Books/'
        apiUrl = `${apiUrl}${this.categoryId}`
      } else if (s === '300') {
        apiUrl = '/Digital/'
        apiUrl = `${apiUrl}${this.categoryId}`
      } else if (s === '400') {
        apiUrl = '/MensWear/'
        apiUrl = `${apiUrl}${this.categoryId}`
      } else if (s === '500') {
        apiUrl = '/WomensWear/'
        apiUrl = `${apiUrl}${this.categoryId}`
      } else if (s === '600') {
        apiUrl = '/Appliance/'
        apiUrl = `${apiUrl}${this.categoryId}`
      } else if (s === '700') {
        apiUrl = '/Beddings/'
        apiUrl = `${apiUrl}${this.categoryId}`
      } else if (s === '800') {
        apiUrl = '/Articles/'
        apiUrl = `${apiUrl}${this.categoryId}`
      } else if (s === '900') {
        apiUrl = '/Shoes/'
        apiUrl = `${apiUrl}${this.categoryId}`
      } else {
        apiUrl = '/Rests/'
        apiUrl = `${apiUrl}${this.categoryId}`
      }
      this.$http.get(apiUrl).then(res => {
        this.goods = res.data
      })
    },
    formatPrice () {
      return '¥' + (this.goods.price / 100).toFixed(2)
    },
    onClickCart (info) {
      this.$router.push('/cart')
    },
    sorry () {
      Toast('暂无后续逻辑~')
    }
  }
}
