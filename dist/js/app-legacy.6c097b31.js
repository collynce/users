(function(){"use strict";var e={8675:function(e,t,s){s(6992),s(8674),s(9601),s(7727);var n=s(8935),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],i=s(1001),o={},c=(0,i.Z)(o,a,r,!1,null,null,null),u=c.exports,l=(s(1539),s(2809)),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-form"},[s("p",{staticClass:"login-form-heading"},[e._v("Sign in to your account")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"login-form-input",attrs:{type:"text",placeholder:"Enter username",name:"username",id:"username",required:""},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"login-form-input",attrs:{type:"password",placeholder:"Enter password",name:"password",id:"password",required:""},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),s("button",{staticClass:"button",attrs:{type:"submit",disabled:e.submitting||!e.canSubmit}},[e._v("SIGN IN")])])])},m=[],v={name:"login",data:function(){return{form:{},submitting:!1}},computed:{canSubmit:function(){return this.form.username&&""!==this.form.username&&this.form.password&&""!==this.form.password}},methods:{login:function(){var e=this;this.submitting=!0,this.$store.dispatch("login",this.form).then((function(){console.log("done"),e.submitting=!1,e.$router.push("/users")}))}}},f=v,p=(0,i.Z)(f,d,m,!1,null,"8194b8f0",null),h=p.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"grid-container"},[e._m(0),s("aside",{staticClass:"aside"},[e._m(1),s("ul",{staticClass:"aside_list"},[s("li",{staticClass:"aside_list-item",on:{click:function(t){return e.$router.push({name:"dashboard"})}}},[e._v("Dashboard")]),s("li",{staticClass:"aside_list-item",on:{click:function(t){return e.$router.push({name:"dashboard"})}}},[e._v("Users")]),s("li",{staticClass:"aside_list-item"},[e._v("Settings")])]),s("div",{staticClass:"username",on:{click:e.logout}},[e._v("< Admin")])]),s("main",{staticClass:"main"},[s("h3",[e._v("Users")]),e.fetchingData?s("placeholder"):e._e(),e.fetchingData?e._e():s("div",{staticClass:"main_overview"},e._l(e.users,(function(t,n){return s("div",{key:n,staticClass:"main_overview_card",style:{background:"url("+t.image+") no-repeat center center / cover"},on:{click:function(s){return e.showDetails(t)}}},[s("div",{staticClass:"middle"},[s("div",{staticClass:"text"},[s("p",[s("strong",[e._v(e._s(t.name))])]),s("p",[e._v(e._s(t.address.city))])])])])})),0)],1)]),e.showModal?s("modal",{attrs:{user:e.selectedUser},on:{close:function(t){e.showModal=!1}}}):e._e()],1)},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"menu-icon"},[s("strong",[e._v("☰")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aside_close-icon"},[s("strong",[e._v("×")])])}],C=s(3019),w=s(4665),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"modal",attrs:{id:"myModal"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("span",{staticClass:"close",on:{click:function(t){return e.$emit("close")}}},[e._v("×")])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-cell image",style:{background:"url("+e.user.image+") no-repeat center center / cover"}}),s("div",{staticClass:"flex-cell content"},[s("p",[e._v("Name: "+e._s(e.user.name))]),s("p",[e._v("Email: "+e._s(e.user.email))]),s("p",[e._v("Phone: "+e._s(e.user.phone))]),s("p",[e._v("Address: "+e._s(e.user.address.street+", "+e.user.address.city))])])])])])])])},y=[],x={name:"modal",props:["user"]},$=x,q=(0,i.Z)($,b,y,!1,null,"7daede8e",null),k=q.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main_overview"},[s("div",{staticClass:"main_overview_card loading"},[s("div",{staticClass:"placeholder wave"},[s("div",{staticClass:"square"})])]),s("div",{staticClass:"main_overview_card loading"},[s("div",{staticClass:"placeholder wave"},[s("div",{staticClass:"square"})])]),s("div",{staticClass:"main_overview_card loading"},[s("div",{staticClass:"placeholder wave"},[s("div",{staticClass:"square"})])]),s("div",{staticClass:"main_overview_card loading"},[s("div",{staticClass:"placeholder wave"},[s("div",{staticClass:"square"})])]),s("div",{staticClass:"main_overview_card loading"},[s("div",{staticClass:"placeholder wave"},[s("div",{staticClass:"square"})])]),s("div",{staticClass:"main_overview_card loading"},[s("div",{staticClass:"placeholder wave"},[s("div",{staticClass:"square"})])]),s("div",{staticClass:"main_overview_card loading"},[s("div",{staticClass:"placeholder wave"},[s("div",{staticClass:"square"})])]),s("div",{staticClass:"main_overview_card loading"},[s("div",{staticClass:"placeholder wave"},[s("div",{staticClass:"square"})])])])}],Z={name:"placeholder"},O=Z,U=(0,i.Z)(O,E,S,!1,null,"e185190c",null),I=U.exports,D={name:"index",components:{modal:k,placeholder:I},data:function(){return{fetchingData:!1,showModal:!1,selectedUser:{}}},computed:(0,C.Z)({},(0,w.Se)({users:"users"})),methods:{getUsers:function(){var e=this;this.fetchingData=!0,this.$store.dispatch("getUsers").then((function(){setTimeout((function(){e.fetchingData=!1}),3e3)})).catch((function(){}))},showDetails:function(e){this.showModal=!0,this.selectedUser=e},logout:function(){var e=this;this.$store.dispatch("logout").then((function(){e.$router.push({name:"login"})}))}},mounted:function(){this.getUsers();var e=document.querySelector(".menu-icon"),t=document.querySelector(".aside"),s=document.querySelector(".aside_close-icon");function n(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)}e.addEventListener("click",(function(){n(t,"active")})),s.addEventListener("click",(function(){n(t,"active")}))}},N=D,P=(0,i.Z)(N,g,_,!1,null,"d03b2a80",null),j=P.exports,A=(s(8862),s(6166)),M=s.n(A),L=s(7099),T=s.n(L);n.Z.use(w.ZP);var G=sessionStorage.getItem("user"),J=new w.ZP.Store({state:{users:[],loggedIn:!!G,user:G?JSON.parse(G):null,defaultUser:{username:"admin",password:"1234"}},getters:{users:function(e){return e.users},user:function(e){return e.user},loggedIn:function(e){return e.loggedIn}},mutations:{set_users:function(e,t){e.users=t},set_loggedin_user:function(e,t){e.user=t.username,sessionStorage.setItem("user",JSON.stringify({username:t.username}))},logout:function(e){e.user={},sessionStorage.clear()}},actions:{getUsers:function(e,t){var s=e.commit;M().get("/users.json").then((function(e){var t=e.data;s("set_users",t)})).catch((function(){}))},login:function(e,t){var s=e.commit,n=e.state,a=t.username,r=t.password;a!==n.defaultUser.username||r!==n.defaultUser.password?T().fire({icon:"error",title:"Oops...",text:"Incorrect username or password"}):s("set_loggedin_user",t)},logout:function(e,t){var s=e.commit;s("logout")}}});n.Z.use(l.Z);var B=[{path:"/",name:"home",component:j,meta:{requireAuth:!0}},{path:"/users",name:"dashboard",component:j,meta:{requireAuth:!0}},{path:"/login",name:"login",component:h,meta:{requireAuth:!1}}],F=new l.Z({mode:"history",routes:B});F.beforeEach((function(e,t,s){var n=J.getters.loggedIn;e.matched.some((function(e){return e.meta.requireAuth}))?n?s():s({path:"/login",query:{redirect:e.fullPath}}):s()}));var z=F,H=s(81),K=s(6978),Q=s(9009);H.vI.add(K.BC0),n.Z.component("font-awesome-icon",Q.GN),n.Z.config.productionTip=!1,new n.Z({router:z,store:J,render:function(e){return e(u)}}).$mount("#app")}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,a,r){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],r=e[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(o=!1,r<i&&(i=r));if(o){e.splice(l--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,a,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,i=n[0],o=n[1],c=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var l=c(s)}for(t&&t(n);u<i.length;u++)r=i[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(l)},n=self["webpackChunkusers"]=self["webpackChunkusers"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(8675)}));n=s.O(n)})();
//# sourceMappingURL=app-legacy.6c097b31.js.map