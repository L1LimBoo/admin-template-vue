(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({BasicLayout:"BasicLayout",Login:"Login",Test:"Test",UserLayout:"UserLayout",VDescriptions:"VDescriptions",VLazyComponent:"VLazyComponent",VRichEditor:"VRichEditor",VTable:"VTable",VTagSelect:"VTagSelect",MenuDrawer:"MenuDrawer",TableToXlsx:"TableToXlsx"}[e]||e)+"-legacy."+{BasicLayout:"b884a6f4",Login:"328b4393",Test:"408c9dd0",UserLayout:"ca3cf8a8",VDescriptions:"32991f77",VLazyComponent:"eff0d38a",VRichEditor:"b3bd4f96",VTable:"68229fca",VTagSelect:"3971c495","chunk-283edbae":"c943e147","chunk-2d2095c8":"f2647583","chunk-2d230f8c":"cea3cf21","chunk-748ad46a":"bb350f46",MenuDrawer:"34870077",TableToXlsx:"1a4b87ff"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={BasicLayout:1,Login:1,UserLayout:1,VDescriptions:1,VLazyComponent:1,VTable:1,VTagSelect:1,MenuDrawer:1,TableToXlsx:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({BasicLayout:"BasicLayout",Login:"Login",Test:"Test",UserLayout:"UserLayout",VDescriptions:"VDescriptions",VLazyComponent:"VLazyComponent",VRichEditor:"VRichEditor",VTable:"VTable",VTagSelect:"VTagSelect",MenuDrawer:"MenuDrawer",TableToXlsx:"TableToXlsx"}[e]||e)+"."+{BasicLayout:"01ece2e0",Login:"cd0ee3e8",Test:"31d6cfe0",UserLayout:"9c219c80",VDescriptions:"e64b2eb0",VLazyComponent:"fa609af4",VRichEditor:"31d6cfe0",VTable:"b4d694b3",VTagSelect:"786eb2cb","chunk-283edbae":"31d6cfe0","chunk-2d2095c8":"31d6cfe0","chunk-2d230f8c":"31d6cfe0","chunk-748ad46a":"31d6cfe0",MenuDrawer:"c7e02482",TableToXlsx:"06e68ca0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"0f9a":function(e,t,n){"use strict";n.r(t);n("4160"),n("4fad"),n("ac1f"),n("5319"),n("159b"),n("96cf");var r=n("1da1"),a=n("3835"),o=n("c24f"),i=n("a14c"),u=n("ba41"),c=n("f121");t["default"]={namespaced:!0,state:{userId:null,username:"",token:"",avatar:"",nickname:""},getters:{status:function(e){return e.token?"online":"offline"}},mutations:{setToken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.token,r=t.remember;e.token=n;var a=c["a"].auth,o=a.template,s=a.key,l=a.expires,f=n?o.replace("TOKEN",n):null;i["b"].setHeader(s,f),u["b"].set(u["a"].TOKEN,n,{maxAge:1e3*l}),null!=r&&u["b"].set(u["a"].LOGIN_REMEMBER,r)},setUserInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.entries(t).forEach((function(t){var n=Object(a["a"])(t,2),r=n[0],o=n[1];return e[r]=o})),u["b"].set(u["a"].USER_INFO,t)}},actions:{handleLogin:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,i,u,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.username,i=t.password,u=t.remember,n.next=4,Object(o["b"])({username:a,password:i});case 4:return c=n.sent,r("setToken",{token:c.access_token,remember:u}),s={userId:c.info.id,avatar:c.info.avatar||c.info.nickname,nickname:c.info.nickname,username:c.info.username,email:c.info.email},r("setUserInfo",s),n.abrupt("return",c);case 9:case"end":return n.stop()}}),n)})))()},getPermissions:function(e){var t=e.state;return Object(o["a"])({userId:t.userId})}}}},1:function(e,t,n){e.exports=n("56d7")},"18d0":function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("37cf");t["default"]=[{path:"blank-page2",name:"Page2",meta:{title:"测试2",icon:"pie-chart"},component:Object(r["a"])("Page22"),children:[{path:"test21",name:"Test21",meta:{title:"测试21",icon:"credit-card"},component:function(){return n.e("chunk-2d230f8c").then(n.bind(null,"ef0e"))}},{path:"test22",name:"Test22",meta:{title:"测试22",icon:"smile"},component:function(){return n.e("chunk-2d2095c8").then(n.bind(null,"a971"))}}]}]},"1e54":function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("37cf");t["default"]=[{path:"blank-page1",name:"page1",redirect:{name:"Test11"},meta:{title:"测试1",icon:"pie-chart"},component:Object(r["a"])("Page11"),children:[{path:"test11",name:"Test11",meta:{title:"测试11",icon:"credit-card"},component:function(){return n.e("chunk-748ad46a").then(n.bind(null,"4aad0"))}},{path:"test12",name:"Test12",meta:{title:"测试12",icon:"smile"},component:function(){return n.e("chunk-283edbae").then(n.bind(null,"c9db"))}}]}]},2:function(e,t){},2395:function(e,t,n){},"2eff":function(e,t){},3:function(e,t){},"37cf":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5530"),a=n("2f62"),o=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{name:e,render:function(n){var r=n("RouterView"),a=n("KeepAlive",{props:{include:this.getAlive(e)}},[r]);return n("ACard",{props:{title:this.$route.meta.title}},[t?a:r])},computed:Object(r["a"])({},Object(a["c"])("app",["getAlive"]))}}},4360:function(e,t,n){"use strict";n("13d5"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0");var r=n("a026"),a=n("2f62");r["a"].use(a["a"]);var o=!0,i=n("d307"),u=i.keys().reduce((function(e,t){var n=t.replace(/^\.\/|\.[tj]s$/g,"");return e[n]=i(t).default,e}),{}),c=[];if(!o){var s=a["a"].createLogger({filter:function(e){var t=e.type;return"app/addAlive"!==t}});c.push(s)}var l=new a["a"].Store({strict:!o,modules:u,plugins:c});t["a"]=l},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("f23d"),o=(n("6a57"),n("99af"),n("4160"),n("caad"),n("4fad"),n("b64b"),n("2532"),n("159b"),n("96cf"),n("1da1")),i=n("3835"),u=n("fd4e"),c=n("f121"),s={$app:c["a"]},l=n("2eff"),f=(n("d3b7"),n("15fd")),d=n("5530"),p=(n("d81d"),n("b0c0"),n("a14c"));function v(e){var t=e.name,n=void 0===t?"image":t,r=e.headers,a=e.file,o=e.data,i=e.cancelToken,u=e.onUploadProgress,c=e.withCredentials;return["image","file","video","audio"].includes(n)?p["b"].post("upload/".concat(n),{headers:r||{"Content-Type":"multipart/form-data"},data:h(a,o),withCredentials:c,cancelToken:i,onUploadProgress:u}):Promise.reject({msg:"类型错误!"})}var h=function(e,t){var n=new FormData;return t&&Object.keys(t).map((function(e){return n.append(e,t[e])})),n.append("file",e),n},m=(n("13d5"),n("ac1f"),n("466d"),n("2909")),b=n("1146");function g(e){var t=e.dataSource,n=e.columns,r=e.fileName,a=void 0===r?String(Date.now()):r,o=n.reduce((function(e,t){var n;return e.key.push(null!==(n=t.key)&&void 0!==n?n:t.dataIndex),e.title.push(t.title),e}),{key:[],title:[]}),i=o.key,u=o.title,c=b["utils"].book_new(),s=O(i,t);s.unshift(u);var l=b["utils"].aoa_to_sheet(s);y(l,s),b["utils"].book_append_sheet(c,l,a),Object(b["writeFile"])(c,a+".xlsx")}function y(e,t){var n=t.map((function(e){return e.map((function(e){var t,n,r=String(null!==e&&void 0!==e?e:""),a=null!==(t=null===(n=r.match(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/g))||void 0===n?void 0:n.length)&&void 0!==t?t:0;return Math.max(r.length+4,8)+a}))}));e["!cols"]=n[0].map((function(e,t){return{wch:Math.max.apply(Math,Object(m["a"])(n.map((function(e){return e[t]}))))}}))}function O(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))}var j=function(e){var t="tinymce",n=function(e){return"".concat(c["a"].dbPrefix,"-tinyMCE-autosave-").concat(e,"-")};return{functional:!0,props:{config:Object,http:{type:Function,default:v},baseURL:{type:String,default:t},documentURL:{type:String,default:c["a"].assetsURL}},render:function(t,r){var a=r.parent,o=a.$route,i=a.$store,u=Object(d["a"])(Object(d["a"])({},r.props),{},{autoSavePrefix:n(o.fullPath),skin:i.state.app.layout.menuTheme||"light"});return t(e,Object(d["a"])(Object(d["a"])({},r.data),{},{props:u}),r.children)}}},w=function(e){var t=e.current,n=Object(f["a"])(e,["current"]);return Object(d["a"])({page:t},n)},k=function(e){var t=e.data,n=void 0===t?[]:t,r=e.meta,a=void 0===r?{}:r;return{data:n,total:a.total||n.length}},T=function(e){return"function"!==typeof e?e:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(w(t)).catch((function(){return{}})).then(k)}},E=function(e){return{functional:!0,props:{http:Function,rowKey:{type:[String,Function],default:"id"},scroll:{type:Object,default:function(){return{}}}},render:function(t,n){var r=[n.data.attrs,n.props,n.parent.$store],a=r[0],o=r[1],i=r[2],u=o.scroll,c=i.state.app.screenType.level<6,s=i.getters["app/isMobileDevice"];c&&(a.size="middle",u.x=u.x||!0),s&&(a.size="small");var l=Object(d["a"])(Object(d["a"])({},n.data),{},{props:{http:T(o.http),xlsx:g,rowKey:o.rowKey,scroll:u}});return t(e,l,n.children)}}},L={VRichEditor:j((function(){return n.e("VRichEditor").then(n.bind(null,"8256"))})),VLazyComponent:function(){return n.e("VLazyComponent").then(n.bind(null,"3304"))},VTable:E((function(){return n.e("VTable").then(n.bind(null,"f4f7"))})),VTagSelect:E((function(){return n.e("VTagSelect").then(n.bind(null,"9d29"))})),VDescriptions:E((function(){return n.e("VDescriptions").then(n.bind(null,"87a2"))}))},x=";position: fixed;top: 0;right: 0; bottom: 0;left: 0;transition: all 300ms ease-out;",D="__PREVIEW_CONTEXT__",A=function(e){return"IMG"===e.tagName},C=function(e,t){return Object(u["o"])(t)?{src:t}:Object(u["n"])(t)?Object(d["a"])({},t):A(e)&&e.src?{src:e.src}:void 0},F=function(){var e=document.documentElement;return{width:e.clientWidth,height:e.clientHeight}},_=function(e){var t=F(),n=[t.width/2,t.height/2],r=n[0],a=n[1];return A(e)?{width:Math.min(e.width,r),height:Math.min(e.height,a)}:{width:r,height:a}},M=function(e){var t=F(),n=Math.min(t.width/e.width,t.height/e.height);return Math.floor(900*n)/1e3},V=function(e,t){return new Promise((function(n,r){var a=_(t),o=a.width,i=a.height,u=new Image(o,i);u.src=e.src,u.setAttribute("style",x+"margin:auto;object-fit:contain;"),u.onload=function(){return n(u)},u.onerror=r}))},P=function(){var e=document.createElement("div"),t=x+"z-index:10000;background:rgba(0,0,0,.45);cursor:zoom-out;";return e.setAttribute("style",t),e},R=function(e,t){var n=function n(r){var a,o=function(){return document.removeEventListener("keyup",n)};if(!e.parentNode)return o();var i=null!==(a=r.key)&&void 0!==a?a:r.keyCode;"Escape"!==i&&"Esc"!==i&&27!==i||(o(),t())};document.addEventListener("keyup",n);var r=function(){document.removeEventListener("keyup",n),t()};Object(u["a"])(e,"click",r)},N=function(e){var t=e[D].options;V(t,e).then((function(n){var r,a=P();Object(u["b"])(a,n),Object(u["b"])(document.body,a);var o=null!==(r=t.scale)&&void 0!==r?r:M(n);Object(u["q"])(n,"transform","scale(".concat(o,")"));var i=function(){Object(u["p"])(a),a=n=null};e[D].remove=i;var c=function(){a&&(Object(u["q"])(n,"transform","scale(1)"),Object(u["h"])(300).then(i))};R(a,c)}))},S={bind:function(e,t){var n=t.value,r=C(e,n);if(r){var a=A(e)?"zoom-in":"pointer";Object(u["q"])(e,"cursor",a);var o=function(){return N(e)};e[D]={options:r,handler:o},e.addEventListener("click",o)}},update:function(e,t){var n=t.value;e[D].options=C(e,n)},unbind:function(e){var t,n;e.removeEventListener("click",e[D].handler),null===(t=(n=e[D]).remove)||void 0===t||t.call(n),e[D]=void 0}},U={previewImg:S},I=function(e,t){var n=new t,r=t.prototype,a=Object.keys(r).concat(Object.keys(n));Object.entries(e).forEach((function(e){var t=Object(i["a"])(e,2),n=t[0],o=t[1];if(a.includes(n))throw new Error("property '".concat(n,"' had existed!"));Object(u["g"])(r,n,o)}))},q=function(e,t){Object.entries(e).forEach((function(e){var n=Object(i["a"])(e,2),r=n[0],a=n[1];if(t.component(r))throw new Error("component '".concat(r,"' had existed!"));t.component(r,a)}))},z=function(e,t){Object.entries(e).forEach((function(e){var n=Object(i["a"])(e,2),r=n[0],a=n[1];return t.directive(r,a)}))},B={install:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:I(s,e),I(l,e),q(L,e),z(U,e);case 4:case"end":return t.stop()}}),t)})))()}},K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("AConfigProvider",{attrs:{locale:e.locale}},[n("RouterView")],1)],1)},X=[],$=(n("dca8"),n("677e")),H=n.n($),G=n("c1df"),W=n.n(G);n("5c3a");W.a.locale("zh-cn");var J={name:"App",data:function(){return{locale:Object.freeze(H.a)}}},Y=J,Q=(n("7c55"),n("2877")),Z=Object(Q["a"])(Y,K,X,!1,null,null,null),ee=Z.exports,te=n("a18c"),ne=n("4360"),re=n("9483"),ae=n("56cd"),oe=!0,ie="__SERVICE_WORKER_NOTIFICATION__",ue={ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.");var t=!e.active;if(!t){var n=function(e){return e("AIcon",{props:{type:"cloud-download"},style:{color:"#1890ff"}})};ae["a"].open({key:ie,message:"发现新内容",description:"正在下载与更新中...",duration:0,icon:n})}},updated:function(){console.log("New content is available; please refresh."),ae["a"].success({key:ie,message:"发现新内容",description:"已完成更新"})},offline:function(){console.log("No internet connection found. App is running in offline mode."),ae["a"].info({message:"当前处于离线模式"})},error:function(e){console.error("Error during service worker registration:",e)}};oe&&Object(re["a"])("".concat("","service-worker.js"),ue),r["a"].config.productionTip=!1,r["a"].config.performance=!1,r["a"].use(a["a"]),r["a"].use(B),new r["a"]({router:te["a"],store:ne["a"],render:function(e){return e(ee)}}).$mount("#app")},"5d9c":function(e,t,n){var r={"./zh-cn":"5c3a","./zh-cn.js":"5c3a"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="5d9c"},"6a57":function(e,t){var n=window.navigator.userAgent.toLowerCase(),r=n&&/msie|trident/.test(n),a=function(e){var t=document.createElement("div");return t.innerHTML=e,t.style.cssText="; position: fixed; z-index: 100000;width: 100%; top: 0; line-height: 36px;text-align: center;color: #fff; background: #ffad14; transition: all .3s",t},o=function(){var e=document.createElement("a");return e.innerText="关闭",e.style.cssText=";float:right; padding: 0 16px; cursor: pointer",e},i=function(){var e=this.parentNode;this.parentNode.style.top="-36px",this.parentNode.style.opacity=".6",setTimeout((function(){document.documentElement.removeChild(e)}),3e3)};if(r){var u='您的浏览器浏览效果不佳，推荐使用<a href="https://www.google.cn/chrome/"> Chrome </a>或<a href="https://www.mozilla.org/zh-CN/firefox/"> Firefox </a>浏览器',c=a(u),s=o();s.onclick=i,c.appendChild(s),document.documentElement.appendChild(c)}},"7c55":function(e,t,n){"use strict";var r=n("2395"),a=n.n(r);a.a},8562:function(e,t,n){var r={"./page1.js":"1e54","./page2.js":"18d0","./page3.js":"dd97"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="8562"},a14c:function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));var r=n("f121"),a=(n("99af"),n("4160"),n("159b"),n("5530")),o=n("d4ec"),i=n("bee2"),u=n("262e"),c=n("2caf"),s=n("fd4e"),l=(n("4de4"),n("d3b7"),n("2909")),f=n("15fd"),d=(n("96cf"),n("1da1")),p=n("bc3a"),v=n.n(p),h=function(){function e(t){Object(o["a"])(this,e),this.options=t,this.request=void 0,this.response=void 0}return Object(i["a"])(e,[{key:"status",get:function(){var e;return null===(e=this.request)||void 0===e?void 0:e.status}},{key:"url",get:function(){return this.options.url}},{key:"method",get:function(){return this.options.method}},{key:"headers",get:function(){var e;return null===(e=this.response)||void 0===e?void 0:e.headers}},{key:"data",get:function(){var e;return null===(e=this.response)||void 0===e?void 0:e.data}}]),e}(),m=h,b=(n("b0c0"),n("9072")),g=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(e){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.response,u=a.request;return Object(o["a"])(this,n),r=t.call(this,null!==e&&void 0!==e?e:null===i||void 0===i?void 0:i.statusText),r.name=r.constructor.name,r.response=i,r.request=u,r}return n}(Object(b["a"])(Error)),y=g,O=new Error("next() should not be called multiple times in one middleware"),j=function(e){return function(t,n){var r=-1,a=function a(o){var i;if(o<=r)return Promise.reject(O);r=o;var u=null!==(i=e[o])&&void 0!==i?i:n;if(!u)return Promise.resolve();try{return Promise.resolve(u(t,(function(){return a(o+1)})))}catch(c){return Promise.reject(c)}};return a(0)}},w=j,k=function(){function e(t){Object(o["a"])(this,e),this.instance=v.a.create(t),this._middlewares=[],this.requestMiddleware=this.requestMiddleware.bind(this)}return Object(i["a"])(e,[{key:"createContext",value:function(e){return new m(e)}},{key:"requestMiddleware",value:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(n){var r,a,o,i,u,c,s,l,d,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=null!==(r=n.options)&&void 0!==r?r:{},t.prev=1,t.next=4,this.instance.request(a);case 4:return o=t.sent,o.config,i=o.request,u=Object(f["a"])(o,["config","request"]),c=[i,u],n.request=c[0],n.response=c[1],t.abrupt("return",u);case 12:if(t.prev=12,t.t0=t["catch"](1),!t.t0.isAxiosError&&!e.isAborted(t.t0)){t.next=20;break}return s=t.t0.response||{},s.config,l=s.request,d=Object(f["a"])(s,["config","request"]),p=[l||t.t0.request,d],n.request=p[0],n.response=p[1],t.abrupt("return",Promise.reject(new y(t.t0.message,{request:l,response:d})));case 20:return t.abrupt("return",Promise.reject(t.t0));case 21:case"end":return t.stop()}}),t,this,[[1,12]])})));function n(e){return t.apply(this,arguments)}return n}()},{key:"collectMiddlewares",value:function(e){return[].concat(Object(l["a"])(this._middlewares),Object(l["a"])(e),[this.requestMiddleware]).filter(s["m"])}},{key:"use",value:function(e){if(!Object(s["m"])(e))throw new TypeError("middleware must be a function!");return this._middlewares.push(e),this}},{key:"request",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=this.createContext(Object(a["a"])({url:e},t)),o=Object(s["k"])(n)?n:[n],i=this.collectMiddlewares(o);return w(i)(r)}}],[{key:"isAborted",value:function(e){return Object(s["n"])(e)&&v.a.isCancel(e)}}]),e}(),T=k,E=function(e){Object(u["a"])(n,e);var t=Object(c["a"])(n);function n(e){var r;Object(o["a"])(this,n),r=t.call(this,e);var i=["get","post","delete","put","patch","head","options"];return i.forEach((function(e){r[e]=function(t,n){for(var o,i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return(o=r).request.apply(o,[t,Object(a["a"])({method:e},n)].concat(u))}})),r}return Object(i["a"])(n,[{key:"setHeader",value:function(e,t,n){var r=this.instance.defaults.headers;Object(s["k"])(n)?n.forEach((function(n){return r[n][e]=t})):r.common[e]=t}},{key:"baseURL",get:function(){return this.instance.defaults.baseURL},set:function(e){this.instance.defaults.baseURL=e}}]),n}(T),L=E,x=(n("4ec9"),n("3ca3"),n("ddb0"),n("56cd")),D=n("a18c");function A(e,t){return t().then((function(){return e.data})).catch((function(){return Promise.reject(e.data)}))}var C=new Map([[400,{message:"发出的请求有错误，服务器没有进行新建或修改数据的操作"}],[401,{message:"用户尚未认证授权",handler:D["c"]}],[403,{message:"用户已认证，但被禁止访问"}],[404,{message:"请求的资源不存在，服务器没有进行操作"}],[405,{message:"请求方法错误"}],[406,{message:"请求的资源格式错误"}],[408,{message:"请求超时"}],[410,{message:"请求的资源已被永久删除"}],[422,{message:"数据验证错误"}],[500,{message:"服务器发生错误，请检查服务器"}],[502,{message:"网关错误"}],[503,{message:"服务不可用，服务器暂时过载或维护"}],[504,{message:"网关超时"}]]);function F(e,t){Promise.resolve().then((function(){return x["a"].error({message:e,description:t})}))}function _(e,t){return t().catch((function(t){var n=e.status;if(n){var r,a,o,i=null!==(r=C.get(n))&&void 0!==r?r:{},u=null!==(a=i.message)&&void 0!==a?a:e.response.statusText;F("请求错误 ".concat(n,": ").concat(e.url),u),null===(o=i.handler)||void 0===o||o.call(i,e)}else F("网络异常","您的网络发生异常，无法连接服务器");return Promise.reject(t)}))}var M=function(){function e(){Object(o["a"])(this,e),this._controllerMap=new Map}return Object(i["a"])(e,[{key:"create",value:function(e){if(this.has(e))return this.get(e).token;var t=v.a.CancelToken.source();return this.set(e,t),t.token}},{key:"abort",value:function(e,t){var n=this.get(e);return!!n&&(n.cancel(t),this.delete(e),!0)}},{key:"has",value:function(e){return this._controllerMap.has(e)}},{key:"set",value:function(e,t){this._controllerMap.set(e,t)}},{key:"get",value:function(e){return this._controllerMap.get(e)}},{key:"delete",value:function(e){return this._controllerMap.delete(e)}}]),e}(),V=M,P=new L({baseURL:r["a"].baseURL,withCredentials:!0});P.use(A),P.use(_);t["b"]=P},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return E}));n("99af"),n("b0c0"),n("c96a"),n("96cf");var r=n("1da1"),a=n("a026"),o=n("8c4f"),i=n("f121"),u=n("ba41"),c=n("4360"),s=(n("d3b7"),n("a623"),n("4160"),n("13d5"),n("b64b"),n("159b"),n("ddb0"),n("5530")),l=n("fd4e"),f=function(){return!0},d=function(e){return!e.matched.every((function(e){return e.meta.notAuth}))},p=function(e){var t;return!(null===(t=e.meta)||void 0===t?void 0:t.hideInMenu)},v=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return Array.isArray(t)?t.reduce((function(t,r){var a=p(r)&&n(r);if(!a)return t;var o=!!r.children,i=e(r.children,n),u=Object(s["a"])(Object(s["a"])({},r.meta||{}),{},{key:r.name}),c=i.length;return!c&&o||(1===c&&(u=Object(s["a"])(Object(s["a"])({},i[0]),{},{originalKey:u.key,title:u.title})),c>1&&(u.children=i),t.push(u)),t}),[]):[]},h=function(e){return e.keys().reduce((function(t,n){return Object(l["n"])(e(n).default)?t.concat(e(n).default):t}),[]).sort((function(e,t){return(e.sort||0)-(t.sort||0)}))},m=function(e){var t=e.matched.length;if(!(t<=1))for(var n=function(t){var n,r=[e.matched[t],e.matched[t-1]],a=r[0],o=r[1];(null===(n=a.meta)||void 0===n?void 0:n.notCache)||Object.keys(a.components).forEach((function(e){c["a"].commit("app/addAlive",{page:o.components.default.name,type:e,alive:a.components[e].name})}))},r=t-1;r>0;r--)n(r)},b=function(e){return Promise.resolve(e).then(m)},g=[{path:"/",name:i["a"].mainName,redirect:{name:"Test11"},meta:{title:"首页"},component:function(){return n.e("BasicLayout").then(n.bind(null,"3e59"))},children:h(n("8562"))},{path:"/user",name:"User",redirect:{name:i["a"].loginName},meta:{notAuth:!0,notCache:!0},component:function(){return n.e("UserLayout").then(n.bind(null,"11f8"))},children:h(n("d268"))}],y=n("323e"),O=n.n(y);O.a.configure({showSpinner:!1,easing:"ease-in-out"});var j=function(e,t,n){O.a.start(),n()},w=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["h"])(100);case 2:O.a.done();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a["a"].use(o["a"]);var k=new o["a"]({routes:g}),T=(t["a"]=k,function(e){return v(g,e)}),E=function(e){c["a"].commit("user/setToken");var t=i["a"].loginName;k.currentRoute.name!==t&&(e?e({name:t}):k.push({name:t}).catch((function(){})))};u["b"].watch(u["a"].TOKEN,(function(e){e||E()}));var L=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c["a"].commit("user/setToken",{token:t,remember:n}),c["a"].commit("user/setUserInfo",u["b"].get(u["a"].USER_INFO));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!d(t)){e.next=11;break}if(a=c["a"].state.user.token,a){e.next=11;break}if(o=u["b"].get(u["a"].TOKEN),o){e.next=6;break}return e.abrupt("return",E(r));case 6:if(i=u["b"].get(u["a"].LOGIN_REMEMBER),i){e.next=9;break}return e.abrupt("return",E(r));case 9:return e.next=11,L(o,i);case 11:r();case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),D=function(e){var t,n=i["a"].title.small,r=null===(t=e.meta)||void 0===t?void 0:t.title;window.document.title=r?"".concat(r," - ").concat(n):n,window.scrollTo(0,0)};k.beforeEach(j),k.beforeEach(x),k.afterEach(b),k.afterEach(D),k.afterEach(w)},ad2f:function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("f121");t["default"]=[{path:"/login",name:r["a"].loginName,meta:{title:"用户登录",notAuth:!0,notCache:!0},component:function(){return n.e("Login").then(n.bind(null,"0866"))}}]},ba41:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("caad"),n("07ac"),n("2532");var r=n("06ce"),a=n("f121"),o=(n("dca8"),Object.freeze),i=o({TOKEN:"token",USER_INFO:"user-info",LOGIN_REMEMBER:"login-remember",BASIC_LAYOUT:"basic-layout"}),u=function(e){var t=Object.values(i),n={apply:function(e,n,r){var a=r[0];return t.includes(a)||console.error("unsafe storage key: ".concat(a,", and key must be in the StorageKeys")),e.apply(n,r)}};return e.set=new Proxy(e.set,n),e.get=new Proxy(e.get,n),e},c=!0,s=new r["a"](a["a"].dbPrefix),l=c?s:u(s);t["b"]=l},c24f:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));n("d3b7");var r=n("a14c"),a={info:{id:1,username:"admin",password:"admin-template",nickname:"管理员",avatar:"admin",email:""},access_token:"TOKEN"};function o(e){return e.username&&e.password?Promise.resolve(a):Promise.reject("missing parameter")}function i(){return Promise.resolve({msg:"已退出"})}function u(e){return e.userId?r["b"].get("getPermissions",{params:e}):Promise.reject("missing parameter")}},d268:function(e,t,n){var r={"./others.js":"ad2f"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="d268"},d307:function(e,t,n){var r={"./app.js":"d9cd","./user.js":"0f9a"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="d307"},d9cd:function(e,t,n){"use strict";n.r(t);n("4160"),n("caad"),n("c975"),n("a434"),n("b0c0"),n("4fad"),n("2532"),n("159b");var r=n("ade3"),a=n("5530"),o=n("3835");t["default"]={namespaced:!0,state:{layout:{menuTheme:"dark",isVertical:!0,isFixedHeader:!0,isFixedSider:!0,isMenuRight:!1,theme:"daybreak-blue"},screenType:{type:"xl",level:6},constrainedBox:{mainOffsetLeft:0},aliveList:{},errorList:[]},getters:{getAlive:function(e){var t=e.aliveList;return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",r=t[e];if(r){var a=r[n];if(Array.isArray(a))return a}return[]}},isMobileDevice:function(e){var t=e.screenType;return t.level<3.8}},mutations:{setLayout:function(e){var t=e.layout,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.entries(n).forEach((function(e){var n=Object(o["a"])(e,2),r=n[0],a=n[1];void 0!==a&&(t[r]=a)}))},setConstrainedBox:function(e){var t=e.constrainedBox,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.entries(n).forEach((function(e){var n=Object(o["a"])(e,2),r=n[0],a=n[1];null!=a&&(t[r]=a)}))},setScreenType:function(e,t){var n=t.type,r=t.level,a=[n,r];e.screenType.type=a[0],e.screenType.level=a[1]},addAlive:function(e,t){var n=t.page,o=t.name,i=void 0===o?"default":o,u=t.alive;e.aliveList[n]?Array.isArray(e.aliveList[n][i])?e.aliveList[n][i].includes(u)||e.aliveList[n][i].push(u):e.aliveList[n]=Object(a["a"])(Object(a["a"])({},e.aliveList[n]),{},Object(r["a"])({},i,[u])):e.aliveList=Object(a["a"])(Object(a["a"])({},e.aliveList),{},Object(r["a"])({},n,Object(r["a"])({},i,[u])))},clearAlive:function(e,t){var n=t.page,r=t.name,a=void 0===r?"default":r,o=t.alive;if(e.aliveList[n]&&Array.isArray(e.aliveList[n][a])){var i=e.aliveList[n][a].indexOf(o);i>-1&&e.aliveList[n][a].splice(i,1)}},addError:function(e,t){e.errorList.push(t),e.errorList.length>500&&e.errorList.shift()}},actions:{addErrorLog:function(e,t){var n=e.commit,r=e.rootState,o=r.user.userId;n("addError",Object(a["a"])(Object(a["a"])({},t),{},{time:Date.now(),userId:o}))}}}},dd97:function(e,t,n){"use strict";n.r(t);n("d3b7");t["default"]=[{path:"test33",name:"Test33",meta:{title:"测试33",icon:"setting"},component:function(){return n.e("Test").then(n.bind(null,"4b71"))}}]},f121:function(e,t,n){"use strict";var r=n("fd4e"),a=Object(r["f"])({title:{small:"Admin Template",main:"Admin Template"},logoPath:"icons/fire.svg",baseURL:"",assetsURL:"",auth:{key:"Authorization",template:"Bearer TOKEN",expires:604800},loginName:"Login",mainName:"Main",dbPrefix:"admin-template",org:"xunmi"});t["a"]=a},fd4e:function(e,t,n){"use strict";n.d(t,"n",(function(){return i})),n.d(t,"m",(function(){return u})),n.d(t,"k",(function(){return c})),n.d(t,"o",(function(){return s})),n.d(t,"l",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return y})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"b",(function(){return E})),n.d(t,"p",(function(){return L})),n.d(t,"q",(function(){return x})),n.d(t,"a",(function(){return D})),n.d(t,"i",(function(){return F})),n.d(t,"r",(function(){return _})),n.d(t,"e",(function(){return I}));n("fb6a"),n("45fc"),n("b64b"),n("d3b7"),n("25f0");var r=n("53ca"),a=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},o=function(e,t){var n=a(e);return t?s(t)?n===t.toLowerCase():c(t)&&t.length?t.some((function(e){return n===e.toLowerCase()})):void 0:n},i=function(e){return null!==e&&"object"===Object(r["a"])(e)},u=function(e){return"function"===typeof e},c=Array.isArray,s=function(e){return"string"===typeof e},l=function(e){return e!==e},f=function(e){return i(e)&&!Object.keys(e).length};n("ac1f"),n("5319"),n("99af"),n("6c57"),n("4ec9"),n("3ca3"),n("ddb0"),n("4160"),n("d81d"),n("13d5"),n("4fad"),n("dca8"),n("e21d"),n("159b"),n("ade3"),n("5530"),n("3835");function d(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!1,get:n})}function p(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}var v=Object.prototype.hasOwnProperty,h=function(e,t){return v.call(e,t)};function m(e){return i(e)&&!Object.isFrozen(e)&&(Object.freeze(e),Object.keys(e).forEach((function(t){return m(e[t])}))),e}var b=function e(t,n){var r,a,o=null!==(r=null!==globalThis&&void 0!==globalThis?globalThis:self)&&void 0!==r?r:window,i=null==n&&u(o.requestAnimationFrame),c=function(){return a=i?o.requestAnimationFrame(t):o.setTimeout(t,null!==n&&void 0!==n?n:0),a};return e.abort=function(){if(null!=a){var e=i?o.cancelAnimationFrame:o.clearTimeout;e(a)}},c()};function g(e,t){var n,r,a,o,i,u=function(){b.abort(),n=r=i=o=void 0},c=function(){var e=Date.now()-i;return void 0===i||e>=(null!==t&&void 0!==t?t:0)||e<0},s=function(){if(null!=t){var e=Date.now()-i;return t-e}},l=function t(){var i=c();if(i)return o=void 0,n&&(a=e.apply(r,n)),void(n=r=void 0);o=b(t,s())};function f(){for(var e=arguments.length,u=new Array(e),c=0;c<e;c++)u[c]=arguments[c];return n=u,r=this,i=Date.now(),void 0===o&&(o=b(l,t)),a}return f.abort=u,d(f,"pending",(function(){return null!=o})),f}function y(e,t){var n=Object.create(null),r=function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var i=t?t.apply(this,a):String(a),u=n[i];return null!==u&&void 0!==u?u:n[i]=e.apply(this,a)};return r.clear=function(){return n=Object.create(null)},d(r,"size",(function(){return Object.keys(n).length})),r}function O(e){return new Promise((function(t){return setTimeout(t,e)}))}var j=/[\s_-]+([^\s_-])/g,w=(y((function(e){return e.replace(j,(function(e,t){var n;return null!==(n=null===t||void 0===t?void 0:t.toUpperCase())&&void 0!==n?n:""}))})),function(e){var t,n=window.document.createElement("div");n.innerHTML=e;var r=null!==(t=n.innerText)&&void 0!==t?t:n.textContent;return n=null,r}),k=/<.+?>/g,T=(y((function(e){return s(e)?w(e.replace(k,"")):""})),n("a9e3"),n("c35a"),n("0481"),n("a630"),n("c975"),n("a434"),n("4069"),n("6062"),n("2909"));function E(e,t){e.appendChild(t)}function L(e){var t;null===(t=e.parentNode)||void 0===t||t.removeChild(e)}function x(e,t,n,r){e.style.setProperty(t,String(n),r)}function D(e,t,n,r){var a=function a(o){n(o),e.removeEventListener(t,a,r)};e.addEventListener(t,a,r)}var A=n("15fd");var C=function e(t,n,r){return c(r)&&r.some((function(a){if(n(a,r))return!0;t.push(a);var o=e(t,n,a.children);return o||t.pop(),o}))},F=function(e,t){var n=[];return C(n,e,t),n},_=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.map((function(r){var a=r.children,o=Object(A["a"])(r,["children"]),i=t(o,n);return c(a)&&(i.children=e(t,a)),i}))},M=(n("a623"),function(e){return e instanceof Date}),V=function(e){return o(e,["Set","Map"])},P=function(e){return s(e)?e.length:V(e)?e.size:Object.keys(e).length},R=function(e){return M(e)?e.getTime():V(e)?Object(T["a"])(e):e},N=function(e,t){return t.map((function(t){return e(t)})).every((function(e,t,n){return!t||n[t-1]===n[t]}))},S=function(e,t){if(e===t||l(e)&&l(t))return!0};function U(e,t,n){var r=R(t),a=R(n),u=e(r,a);return!!u||!!(void 0===u&&i(r)&&i(a)&&N(o,[r,a])&&N(P,[r,a]))&&Object.keys(r).every((function(t){return U(e,r[t],a[t])}))}function I(e,t){return U(S,e,t)}}});