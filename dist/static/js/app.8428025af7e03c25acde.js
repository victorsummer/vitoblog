webpackJsonp([1],{"26dS":function(t,e,n){"use strict";function a(t){n("MheA")}var s=n("iFcm"),i=n("urDR"),o=n("VU/8"),r=a,c=o(s.a,i.a,r,null,null);e.a=c.exports},C4Y5:function(t,e){},FBzZ:function(t,e,n){"use strict";function a(t){n("JrVc")}var s=n("fY6B"),i=n("Mqvk"),o=n("VU/8"),r=a,c=o(s.a,i.a,r,"data-v-f22a02e0",null);e.a=c.exports},HIbV:function(t,e,n){"use strict";e.a={data:function(){return{}},computed:{},mounted:function(){},methods:{scrollTop:function(){var t=document.getElementById("view"),e=setInterval(function(){t.scrollTop-=100,0==t.scrollTop&&clearInterval(e)},10)}},components:{}}},JrVc:function(t,e){},JubT:function(t,e,n){"use strict";var a=n("7+uW"),s=n("mtWM"),i=n.n(s),o=n("YaEn");a.a.prototype.$http=i.a,e.a={data:function(){return{posts:[]}},created:function(){var t=this;this.$http.get("/api/blog/posts").then(function(e){t.posts=e.data})},computed:{},mounted:function(){},methods:{read:function(t){o.a.push("post/"+t)}},components:{}}},KQIF:function(t,e,n){"use strict";var a=n("7+uW"),s=n("mtWM"),i=n.n(s),o=n("Yf01");a.a.prototype.$http=i.a,e.a={data:function(){return{content:"",Mtime:""}},created:function(){var t=this;this.$http.get("/api/blog/post?file="+this.$route.params.filename+".md").then(function(e){t.content=e.data.content,t.Mtime=e.data.Mtime})},computed:{},mounted:function(){},methods:{},components:{scrollTop:o.a}}},M93x:function(t,e,n){"use strict";function a(t){n("w8pn")}var s=n("xJD8"),i=n("tZrz"),o=n("VU/8"),r=a,c=o(s.a,i.a,r,null,null);e.a=c.exports},MheA:function(t,e){},Mqvk:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"about"},[n("h1",[t._v("About Me")]),t._v(" "),n("h3",[t._v("Profile")]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n        With 10 years' C++/OOP experience, I offer technical support services to clients worldwide.\n      ")]),t._v(" "),n("h3",[t._v("Skills")]),t._v(" "),n("ul",{staticClass:"list"},[n("li",[t._v("Html, Javascript, CSS")]),t._v(" "),n("li",[t._v("React, Vue, Angular")]),t._v(" "),n("li",[t._v("Qt, C++, C")]),t._v(" "),n("li",[t._v("React Native")]),t._v(" "),n("li",[t._v("Node.js, Java")])]),t._v(" "),n("p",{staticClass:"text"},[t._v("\n        Over the past 10 years, I've been involved in mobile industry, IVI, Oil, desktop software development and other fields. I've ever been employed by Tieto, Harman International, Qt and am working for AutoIO at the moment.\n\tWith strong knowledge in C++, C#, Qt, QML, Android, Java, Ruby, Python, Linux Shell Script, Embedded Linux system, Cross platform software design, Unit testing, Automatic testing, Continuous Integration, Agile development and other skills, I always provide my clients with the best services.\n      ")]),t._v(" "),n("h3",[t._v("Contact Me")]),t._v(" "),n("ul",{staticClass:"list"},[n("li",[n("a",{attrs:{href:"https://www.linkedin.com/in/vito-ao-5006757b",target:"_blank"}},[t._v("LinkedIn")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/victorsummer",target:"_blank"}},[t._v("Gitbub")])]),t._v(" "),n("li",[t._v("Wechat: victorsummer")]),t._v(" "),n("li",[t._v("Skype: walkaloneinrain@hotmail.com")]),t._v(" "),n("li",[t._v("Hangout/GTalk: victorsummer@gmail.com")])])])])}],i={render:a,staticRenderFns:s};e.a=i},NHnr:function(t,e,n){"use strict";function a(){window.innerWidth>750?document.getElementsByTagName("html")[0].style.fontSize="100px":document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/7.5+"px"}Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("M93x"),o=n("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}}),a(),window.onresize=a},TLso:function(t,e){},WUAQ:function(t,e,n){"use strict";function a(t){n("TLso")}var s=n("KQIF"),i=n("YLxk"),o=n("VU/8"),r=a,c=o(s.a,i.a,r,null,null);e.a=c.exports},YLxk:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"post"},[n("h3",{staticClass:"post-title"},[t._v(t._s(t.$route.params.filename))]),t._v(" "),n("p",{staticClass:"datetime"},[t._v(t._s(t.Mtime))]),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("scrollTop")],1)])},s=[],i={render:a,staticRenderFns:s};e.a=i},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),s=n("/ocq"),i=n("26dS"),o=n("ue/K"),r=n("WUAQ"),c=n("FBzZ");a.a.use(s.a),e.a=new s.a({mode:"history",base:"blog",routes:[{path:"/",redirect:"/home"},{path:"/home",component:i.a},{path:"/posts",component:o.a},{path:"/post/:filename",component:r.a},{path:"/about",component:c.a}]})},Yf01:function(t,e,n){"use strict";function a(t){n("uBXW")}var s=n("HIbV"),i=n("yRrT"),o=n("VU/8"),r=a,c=o(s.a,i.a,r,"data-v-7b5336db",null);e.a=c.exports},aNEP:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"posts"},t._l(t.posts,function(e){return n("li",[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.datetime))]),t._v(" "),n("p",{staticClass:"click",on:{click:function(n){t.read(e.title)}}},[t._v("Read More>>")])])}))])},s=[],i={render:a,staticRenderFns:s};e.a=i},fY6B:function(t,e,n){"use strict";e.a={data:function(){return{}},computed:{},mounted:function(){},methods:{},components:{}}},iFcm:function(t,e,n){"use strict";var a=n("7+uW"),s=n("mtWM"),i=n.n(s),o=n("Yf01");a.a.prototype.$http=i.a,e.a={data:function(){return{header:"",content:""}},created:function(){var t=this;this.$http.get("/api/blog/posts").then(function(e){t.header=e.data[0],t.$http.get("/api/blog/post?file="+t.header.title+".md").then(function(e){t.content=e.data.content})})},computed:{},mounted:function(){},methods:{},components:{scrollTop:o.a}}},tZrz:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.state],attrs:{id:"app"}},[n("header",{staticClass:"header"},[t._m(0),t._v(" "),n("i",{staticClass:"icon-down",on:{click:t.rollDown}}),t._v(" "),n("i",{staticClass:"icon-up",on:{click:t.rollUp}})]),t._v(" "),n("nav",{staticClass:"navbar"},[n("ul",{staticClass:"nav"},[n("li",[n("router-link",{attrs:{to:"/home"}},[t._v("HOME")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/posts"}},[t._v("ARTICLES")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("ABOUT ME")])],1)])]),t._v(" "),n("router-view",{staticClass:"view",attrs:{id:"view"}})],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("h1",[t._v("Vito's Blog")]),t._v(" "),n("h3",[t._v("The only thing standing between you and your dreams is ... reluctance.")]),t._v(" "),n("p",{staticClass:"socials"},[n("a",{staticClass:"icon github",attrs:{href:"https://github.com/victorsummer",target:"_blank"}}),t._v(" "),n("a",{staticClass:"icon linkedin",attrs:{href:"https://www.linkedin.com/in/vito-ao-5006757b",target:"_blank"}}),t._v(" "),n("a",{staticClass:"icon twitter",attrs:{href:"https://twitter.com/ao_vito",target:"_blank"}})])])}],i={render:a,staticRenderFns:s};e.a=i},uBXW:function(t,e){},"ue/K":function(t,e,n){"use strict";function a(t){n("C4Y5")}var s=n("JubT"),i=n("aNEP"),o=n("VU/8"),r=a,c=o(s.a,i.a,r,"data-v-4f32c3d6",null);e.a=c.exports},urDR:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"post scroll"},[n("h3",{staticClass:"post-title"},[t._v("[TOP] "+t._s(t.header.title))]),t._v(" "),n("p",{staticClass:"datetime"},[t._v(t._s(t.header.datetime))]),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("scrollTop")],1)])},s=[],i={render:a,staticRenderFns:s};e.a=i},w8pn:function(t,e){},xJD8:function(t,e,n){"use strict";var a=n("lbHh");n.n(a);e.a={name:"app",data:function(){return{state:a.get("scrollState")}},created:function(){},computed:{},mounted:function(){},methods:{rollDown:function(){this.state="roll-down",a.set("scrollState","roll-down",{expires:7,path:""})},rollUp:function(){this.state="roll-up",a.set("scrollState","roll-up",{expires:7,path:""})}},components:{}}},yRrT:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"scrollTop",on:{click:t.scrollTop}})},s=[],i={render:a,staticRenderFns:s};e.a=i}},["NHnr"]);
//# sourceMappingURL=app.8428025af7e03c25acde.js.map