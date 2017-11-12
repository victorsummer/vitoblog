<template lang="html">
  <div>
    <div class="post">
      <h3 class="post-title">{{$route.params.filename}}</h3>
      <p class="datetime">{{Mtime}}</p>
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
      content: '',
      Mtime: ''
    }
  },
  created () {
    this.$http.get('/api/blog/post?file='+this.$route.params.filename+'.md').then((res) => {
      this.content = res.data.content;
      this.Mtime = res.data.Mtime;
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
<style lang="css" >
  div.post {
    width: 10.5rem;
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
    font-size: 14px;
  }
  div.post div.content blockquote > p{
    position: relative;
    overflow: visible;
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
