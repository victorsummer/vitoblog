<template lang="html">
  <div>
    <ul class="posts">
      <li v-for="post in posts">
        <h3>{{post.title}}</h3>
        <p>{{post.datetime}}</p>
        <p class="click" v-on:click="read(post.title)">Read More>></p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
import router from '../router'
export default {
  data () {
    return {
      posts : []
    }
  },
  created () {
    this.$http.get('/api/blog/posts').then((res) => {
      this.posts = res.data;
    })
  },
  computed: {},
  mounted () {},
  methods: {
    read: function(file){
      router.push('post/'+file);
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
  ul.posts {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
    list-style: none;
  }
  ul.posts h3 {
    color: #555;
  }
  ul.posts > li {
    position: relative;
    /*padding: 0.4rem 0;*/
    border-bottom: 1px dashed #ccc;
  }
  ul.posts > li > p {
    font-size: 12px;
    color: #666;
    /*margin-top: 6px;*/
  }
  ul.posts > li > p.click {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline;
  }
</style>
