import Vue from 'vue'

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
Vue.component('blog-post', {
  props: ['post'],
  template: `<div class="blog-post">
  <h3>{{ post.title }}</h3>
  <button>
    Enlarge text
  </button>
  <div v-html="post.content"></div>
</div>`
})
export default {
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue', content: '123' },
        { id: 2, title: 'Blogging with Vue', content: '456' },
        { id: 3, title: 'Why Vue is so fun', content: '789' }
      ],
      postFontSize: 1
    }
  }
}
