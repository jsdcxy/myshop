
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
      goods: []
    }
  },
  created () {
    this.getGoods()
    // this.getTitle();
  },
  methods: {
    getGoods () {
      let apiUrl = '/foods/'
      let s = this.categoryId.substring(0, 3)
      console.log(s)
      if (s === '100') {
        apiUrl = `${apiUrl}${this.categoryId}`
      } else {
        apiUrl = '/books/'
        apiUrl = `${apiUrl}${this.categoryId}`
      }
      this.$http.get(apiUrl).then(res => {
        this.goods = res.data
        console.log(this.goods)
      })
    },
    formatPrice () {
      return '¥' + (this.goods.price / 100).toFixed(2)
    },
    onClickCart () {
      this.$router.push('cart')
    },
    sorry () {
      Toast('暂无后续逻辑~')
    }
  }
}
