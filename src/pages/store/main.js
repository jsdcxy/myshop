export default {
  data () {
    return {
      // 要添加的新类别的名字
      category: '',
      // 类别列表
      categoryList: [
        {
          // 类别名
          name: '颜色',
          // 类别属性列表
          propertyList: ['白色', '绿色']
        },
        {
          name: '尺寸',
          propertyList: ['10', '20']
        },
        {
          name: '类型',
          propertyList: ['衣服', '裤子']
        }
      ],
      'result': ''
    }
  },
  computed: {
    // 输出列表
    showList () {
      let arr = []
      this.toGet(arr, {}, 0, this.categoryList.length)
      return arr
    }
  },
  methods: {
    // 添加一个新的类别
    addCategory () {
      // 创建新类别
      let obj = {
        name: this.category,
        propertyList: [],
        newPropertyName: ''
      }
      // 添加到类别列表中
      this.categoryList.push(obj)
      this.category = ''
    },
    // 向类别添加属性
    addToPropertyList (category) {
      // 在该类别的属性里列表里添加新的属性
      category.propertyList.push(category.newPropertyName)
      category.newPropertyName = ''
    },
    // 递归
    getList () {
      console.log(this.showList)
      this.result = this.showList
      return this.showList
    },
    // 将数据组合成列表，利用递归的特性
    toGet (arr, obj, currentIndex, maxLength) {
      if (currentIndex >= maxLength) {
        return
      }
      this.categoryList[currentIndex].propertyList.forEach(item => {
        // 在组合到最后一个之前，不停的往模板对象上添加属性
        obj[this.categoryList[currentIndex].name] = item
        if (currentIndex === maxLength - 1) {
          // 组合到最后一个后，创建一个新的对象，然后放置入列表中
          let result = Object.assign({}, obj)
          result.price = '0'
          result.count = '1'
          arr.push(result)
        } else {
          this.toGet(arr, obj, currentIndex + 1, maxLength)
        }
      })
    }
  }
}
