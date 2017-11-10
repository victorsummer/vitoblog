<template lang="html">
  <div>
    <div class="post scroll">
      <h3 class="post-title">[TOP] {{header.title}}</h3>
      <p class="datetime">{{header.datetime}}</p>
      <div class="content" v-html="content"></div>
      <scrollTop></scrollTop>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
import scrollTop from '../components/scrollTop.vue'

export default {
  data () {
    return {
      header:'',
      content:''
    }
  },
  created (){
    this.$http.get('/api/blog/posts').then((res) => {
      this.header = res.data[0];
      this.$http.get('/api/blog/post?file='+this.header.title+'.md').then((res) => {
        this.content = res.data.content;
      })
    })
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    scrollTop
  }
}
</script>

<style lang="css">
  div.post {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
    color: #666;
    line-height: 200%;
    text-align: justify;
  }
  div.post > h3.post-title {
    text-align: center;
    line-height: 160%;
    margin-bottom: 0.2rem;
    color: #444;
  }
  div.post > p.datetime {
    text-align: center;
    color: #888;
    font-size: 14px;
  }
  div.post div.content pre {
    background-color: #eee;
    overflow-x: scroll;
    padding: 0.2rem 0.3rem;
    font-size: 14px;
  }
  div.post div.content blockquote > p{
    position: relative;
    overflow: visible;
    font-size: 14px;
  }
  div.post div.content blockquote > p::after {
    content: '';
    position: absolute;
    left: -20px;
    top: 0;
    width: 6px;
    height: 100%;
    background-color: #ddd;
  }
</style>
