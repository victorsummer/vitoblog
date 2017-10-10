<template lang="html">
  <div>
    <div class="about">
      <h1>About Me</h1>
      <h3>Profile</h3>
      <p class="text">
        balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala
      </p>
      <h3>Skills</h3>
      <ul class="list">
        <li>Html, Javascript, CSS</li>
        <li>React, Vue, Angular</li>
        <li>Qt, C++, C</li>
        <li>React Native</li>
        <li>Node.js, Java</li>
      </ul>
      <p  class="text">
        balabalabalabala
        balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabal
        balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabal
        balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabal
        balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabal
        balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabal
      </p>
      <h3>Contact Me</h3>
      <ul class="list">
        <li><a href="http://weibo.com/2808915224" target="_blank">Sina</a></li>
        <li><a href="https://github.com/Lee-Cloud" target="_blank">Gitbub</a></li>
        <li>Wechat: victorsummer</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  div.about {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
  }
  div.about > h1 {
    margin-bottom: 0.4rem;
  }
  div.about > h2 {
    margin-bottom: 0.3rem;
  }
  div.about > h3 {
    margin: 0.1rem;
  }
  div.about > p.text {
    margin-bottom: 0.4rem;
    line-height: 200%;
    text-indent: 40px;
    color: #555;
    text-align: justify;
  }
  div.about > ul.list {
    padding-left: 0.4rem;
    list-style-position: inside;
    list-style-type: disc;
    line-height: 200%;
  }
</style>
