<template lang="html">
  <div>
    <div class="about">
      <h1>About Me</h1>
      <h3>Business Scope</h3>
      <p class="text">
        With 10 years' C++/OOP experience, I offer technical support services to clients worldwide.
      </p>
      <h3>Skills</h3>
      <ul class="list">
        <li>Html, Javascript, CSS</li>
        <li>React, Vue, Angular</li>
        <li>Qt, C++, C</li>
        <li>React Native</li>
        <li>Node.js, Java</li>
      </ul>
      <p class="text">
        Over the past 10 years, I've been involved in mobile industry, Automotive, Oil, desktop software development and other fields. I've ever been employed by Tieto, Harman International, Qt and am working for AutoIO at the moment.
        
        With strong knowledge in C/C++, C#, Qt/QML, Javascript, Android, Java, Ruby, Python, Linux Shell Script, Embedded Linux system, Cross platform software design, Unit testing, Automatic testing, Continuous Integration, Agile development and other skills, I always provide my clients with the best services.
      </p>
      <h3>Contact Info</h3>
      <ul class="list">
        <li><a href="https://www.linkedin.com/in/vito-ao-5006757b" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/victorsummer" target="_blank">Gitbub</a></li>
        <li>Wechat: victorsummer</li>
        <li>Skype: walkaloneinrain@hotmail.com</li>
        <li>Hangout/GTalk: victorsummer@gmail.com</li>
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
