(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,n=1;n<s.length;n++){var o=s[n];0!==a[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},n={app:0},a={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"36a8c9f6"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s={about:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=new Promise((function(e,s){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"2592aa73"}[t]+".css",a=c.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===a))return e()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){l=h[o],u=l.getAttribute("data-href");if(u===i||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[t],d.parentNode.removeChild(d),s(r)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,s){i=a[t]=[e,s]}));e.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=a[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",h.name="ChunkLoadError",h.type=i,h.request=n,s[1](h)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"16a2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"song",class:{active:t.isActive},on:{click:function(e){t.setCurrentSongId(t.songItem.id),t.setCurrentArray(t.index)}}},[t.songItem.ar?s("div",{staticClass:"left"},[t.isWatch?s("div",{staticClass:"kkkk"},[t._v(t._s(t.thunder()))]):s("div",[t._v(t._s(t.index+1))])]):t._e(),s("dl",{staticClass:"center"},[s("dt",[t._v(t._s(t.songItem.name))]),t.songItem.song?s("dd",[s("i",{staticClass:"sq"}),t._v(" "+t._s(t.songItem.song.artists[0].name)+"-"+t._s(t.songItem.song.album.name)+" ")]):t.songItem.h?s("dd",[t.songItem.h&&t.isWatch?s("i",{staticClass:"sq"}):t._e(),t._v(" "+t._s(t.songItem.ar[0].name)+"-"+t._s(t.songItem.al.name)+" ")]):t._e(),t.songItem.artists?s("dd",[s("i",{staticClass:"sq"}),t._v(" "+t._s(t.songItem.artists[0].name)+"-"+t._s(t.songItem.album.name)+" ")]):t._e()]),t._m(0)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[s("i",{staticClass:"play"})])}],a=(s("ac1f"),s("466d"),{data:function(){return{isActive:!0}},props:["song-item","index","isWatch","newsong","tracks","topList","searchSongs","songs"],methods:{setCurrentSongId:function(t){this.$emit("translate-currentid",{songId:t,showFullscreen:!!window.location.hash.match("search")})},setCurrentArray:function(t){this.$store.commit("submitcurrentIndex",t),this.$store.commit("submitNewsongs",this.newsong),this.$store.commit("submitHotlist",this.topList),this.$store.commit("submitSearchsongs",this.searchSongs),this.$store.commit("submitTracks",this.tracks),this.$store.commit("submitSongs",this.songs)},thunder:function(){return this.index<9?"0"+(this.index+1):this.index+1}}}),r=a,o=(s("a462"),s("2877")),c=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=c.exports},2395:function(t,e,s){},"3a17":function(t,e,s){},"4c44":function(t,e,s){"use strict";var i=s("3a17"),n=s.n(i);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=(s("d3b7"),s("bc3a")),a=s.n(n),r={},o=a.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},i["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("keep-alive",[s("router-view",{on:{"translate-currentid":function(e){t.currentSongId=e.songId,t.showFullscreen=e.showFullscreen}}})],1),t.currentSongId?s("Player",{attrs:{currentSongId:t.currentSongId,"show-fullscreen":t.showFullscreen}}):t._e()],1)},l=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.currentSongDetail?i("div",{staticClass:"player",class:{paused:t.isPaused}},[i("audio",{ref:"audio",attrs:{src:t.currentSongUrl,autoplay:""}}),i("div",{staticClass:"player-bar",on:{click:function(e){e.stopPropagation(),t.isShowFullScreen=!0}}},[i("img",{attrs:{src:t.currentSongDetail.songs[0].al.picUrl,alt:""}}),i("div",{staticClass:"singer"},[i("h4",[t._v(t._s(t.currentSongDetail.songs[0].name))]),i("p",[t._v(t._s(t.currentSongDetail.songs[0].ar[0].name))])]),t.isP?[i("span",{staticClass:"fa fa-play-circle progress",on:{click:function(e){return e.stopPropagation(),t.pausedAudio(e)}}})]:[i("span",{staticClass:"fa fa-pause-circle progress",on:{click:function(e){return e.stopPropagation(),t.pausedAudio(e)}}})],i("span",{staticClass:"fa fa-list-ul list",on:{click:function(e){return e.stopPropagation(),t.songsList(e)}}})],2),t.isShowFullScreen&&t.currentSongDetail?[i("div",{staticClass:"fullscreen"},[i("div",{staticClass:"fullscreen-bg",style:{"background-image":"url("+t.currentSongDetail.songs[0].al.picUrl+")"}}),i("div",{staticClass:"shade"}),i("div",{staticClass:"element"},[i("span",{staticClass:"fa fa-long-arrow-left go-back",on:{click:function(e){t.isShowFullScreen=!1}}}),t.isNone?[i("ul",{staticClass:"lyric",on:{click:function(e){t.isNone=!1}}},t._l(t.songsLyric,(function(e,s){return i("li",{key:s},[t._v(t._s(e.text))])})),0)]:t._e(),i("div",{staticClass:"top",class:{none:t.isNone,none2:!t.isNone},on:{click:function(e){t.isNone=!t.isNone}}},[i("div",{staticClass:"needle"},[i("img",{class:{active:!t.isP,going:t.isP},attrs:{src:s("ce19"),alt:""}})]),i("div",{staticClass:"plate"},[i("div",{staticClass:"box"},[i("img",{class:{active:t.isAc},attrs:{src:t.currentSongDetail.songs[0].al.picUrl,alt:""}})])]),i("div",{staticClass:"songmessage"},[i("h4",[t._v(t._s(t.currentSongDetail.songs[0].name))]),i("p",[t._v(t._s(t.currentSongDetail.songs[0].ar[0].name))])])]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"progressbar"},[i("div",{staticClass:"slide"},[i("van-slider",{staticClass:"progress",attrs:{"button-size":"10px"},on:{change:t.onChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),i("div",{staticClass:"playtime"},[i("span",[t._v(t._s(t.startTime))]),i("span",[t._v(t._s(t.DealTime(t.currentSongDetail.songs[0].dt/1e3)))])])]),i("div",{staticClass:"type"},[i("span",{on:{click:t.playPatternClick}},[t.circulationPlay?[i("i",{staticClass:"fa fa-share"})]:t._e(),t.singlePlay?[i("i",{staticClass:"fa fa-refresh"})]:t._e(),t.randomPlay?[i("i",{staticClass:"fa fa-random"})]:t._e()],2),i("span",[i("i",{staticClass:"fa fa-step-backward",on:{click:function(e){return t.previous()}}})]),i("span",{on:{click:t.pausedAudio}},[t.isP?[i("i",{staticClass:"fa fa-play-circle"})]:[i("i",{staticClass:"fa fa-pause-circle"})]],2),i("span",[i("i",{staticClass:"fa fa-step-forward",on:{click:function(e){return t.next()}}})]),i("span",{on:{click:t.kong}},[i("i",{staticClass:"fa fa-list-ul"})])])])],2)])]:t._e(),i("div",{staticClass:"sliding"},[t.songslistBg?i("div",{staticClass:"songslist-bg",on:{click:function(e){t.isSongs=!1,t.songslistBg=!1}}}):t._e(),i("ul",{staticClass:"songslist",class:{active:t.isSongs}},t._l(t.musicList,(function(e,s){return i("li",{key:s,class:{every:t.isevery},on:{click:function(s){return t.tracking(e.id)}}},[i("p",{staticClass:"plis"},[t._v(" "+t._s(e.name)+" "),e.song?[i("span",[t._v(t._s(e.song.artists[0].name))])]:t._e(),e.ar?[i("span",[t._v(t._s(e.ar[0].name))])]:t._e(),e.artists?[i("span",[t._v(t._s(e.artists[0].name))])]:t._e()],2)])})),0)])],2):t._e()},h=[],d=(s("fb6a"),s("a9e3"),s("e25e"),s("ac1f"),s("466d"),s("1276"),s("498a"),s("159b"),{data:function(){return{currentSongDetail:null,isPaused:!1,isShowFullScreen:this.showFullscreen||!1,currentTime:0,isP:!1,value:0,startTime:"00:00",endtime:"00:00",circulationPlay:!0,singlePlay:!1,randomPlay:!1,PlayPatternCurrent:0,isAc:!1,musicIndex:null,musicList:[],musicId:null,songs:!1,isSongs:!1,songslistBg:!1,isevery:!0,isNone:!1,songsLyric:Object}},props:["currentSongId","showFullscreen"],computed:{currentSongUrl:{get:function(){return"https://music.163.com/song/media/outer/url?id="+this.musicId+".mp3"},set:function(t){return this.musicId=t}}},methods:{kong:function(){window.console.log("xxxxxxxxxxxxxxxxxxxxx"),this.songs=!0,this.isSongs=!0,this.songslistBg=!0},songsList:function(){this.songs=!0,this.isSongs=!0,this.songslistBg=!0},previous:function(){this.isP=!1,2==this.PlayPatternCurrent?this.random():this.musicIndex?(this.againGetSongDetail(this.musicList[--this.musicIndex].id),this.currentSongUrl=this.musicList[this.musicIndex].id):0==this.musicIndex&&(this.musicIndex=this.musicList.length-1,this.currentSongUrl=this.musicList[this.musicIndex].id,this.againGetSongDetail(this.musicList[this.musicIndex].id))},next:function(){this.isP=!1,2==this.PlayPatternCurrent?this.random():(this.musicIndex>=0&&this.musicIndex<this.musicList.length&&(this.musicIndex++,this.againGetSongDetail(this.musicList[this.musicIndex].id),this.currentSongUrl=this.musicList[this.musicIndex].id),this.musicIndex>this.musicList.length-1&&(this.musicIndex=0,this.againGetSongDetail(this.musicList[this.musicIndex].id),this.currentSongUrl=this.musicList[this.musicIndex].id))},random:function(){var t=Math.floor(Math.random()*this.musicList.length-1);this.musicIndex=t,this.againGetSongDetail(this.musicList[this.musicIndex].id),this.currentSongUrl=this.musicList[this.musicIndex].id,window.console.log(t)},single:function(){window.console.log(this.musicId)},onChange:function(t){var e=this.$refs.audio;e.currentTime=t/100*e.duration,this.$el.querySelector(".van-slider__bar").style.width=t+"%"},adc:function(){var t=this,e=this.$refs.audio;e.onerror=function(){window.console.log("yyyyyyyyyyyyyyyyyy"),this.next()};var s=setInterval((function(){t.startTime=t.DealTime(e.currentTime),0==t.PlayPatternCurrent&&e.currentTime==e.duration&&t.next(),1==t.PlayPatternCurrent&&e.currentTime==e.duration&&window.console.log(t.musicIndex),2==t.PlayPatternCurrent&&e.currentTime==e.duration&&t.random(),t.isP&&window.clearInterval(s)}),800);e.ontimeupdate=function(){t.$el.querySelector(".van-slider__bar")&&(t.$el.querySelector(".van-slider__bar").style.width=e.currentTime/e.duration*100+"%")}},playPatternClick:function(){this.PlayPatternCurrent++,this.PlayPatternCurrent>=3&&(this.PlayPatternCurrent=0),this.PlayPatternCurrent<=3&&(0==this.PlayPatternCurrent?(this.circulationPlay=!0,this.singlePlay=!1,this.randomPlay=!1):1==this.PlayPatternCurrent?(this.circulationPlay=!1,this.singlePlay=!0,this.randomPlay=!1):(this.circulationPlay=!1,this.singlePlay=!1,this.randomPlay=!0)),window.console.log("xxx")},DealTime:function(t){t=Math.floor(t);var e=parseInt(t/60),s=t%60;e<10&&(e="0"+e),s<10&&(s="0"+s);var i=e+":"+s;return i},getSongDetail:function(){var t=this;this.axios.get("https://music.kele8.cn/song/detail",{params:{ids:this.currentSongId}}).then((function(e){t.currentSongDetail=e.data,t.musicId=t.currentSongId,t.getLyric(),t.musicIndex=t.$store.state.currentIndex,window.location.hash.match("recommend")?t.musicList=t.$store.state.newsongList:window.location.hash.match("hot")?t.musicList=t.$store.state.hotList:window.location.hash.match("search")?t.musicList=t.$store.state.searchSongs:window.location.hash.match("playlist")?t.musicList=t.$store.state.tracks:window.location.hash.match("artist")&&(t.musicList=t.$store.state.songs)}))},againGetSongDetail:function(t){var e=this;this.axios.get("https://music.kele8.cn/song/detail?ids="+t).then((function(t){e.currentSongDetail=t.data}))},getLyric:function(){var t=this;this.axios.get("https://music.kele8.cn/lyric?id="+this.musicId).then((function(e){t.lyric=e.data.lrc.lyric.split("\n"),window.console.log(t.lyric),t.songsLyric=t.jiexi(t.lyric),window.console.log(t.songsLyric)}))},jiexi:function(t){var e=[];return t.forEach((function(t,s){var i=t.slice(1,9);e[s]={time:60*Number(i.slice(0,2))+Number(i.slice(3)),text:t.slice(11).trim()}})),e},pausedAudio:function(){var t=this.$el.querySelector("audio");this.isPaused?(this.isP=!1,t.play(),this.adc()):(this.isP=!0,t.pause()),this.isPaused=t.paused,this.isAc=!this.isAc},tracking:function(t){window.console.log(t),this.againGetSongDetail(t),this.currentSongUrl=t,this.isP=!1}},created:function(){this.getSongDetail()},watch:{currentSongId:function(){this.getSongDetail(),this.isShowFullScreen=this.showFullscreen,this.isP=!1},currentSongDetail:function(){var t=this;this.$nextTick((function(){t.adc()}))}}}),m=d,g=(s("4c44"),s("2877")),f=Object(g["a"])(m,u,h,!1,null,null,null),p=f.exports,v={components:{Player:p},data:function(){return{currentSongId:null,showFullscreen:!1}}},y=v,S=(s("7c55"),Object(g["a"])(y,c,l,!1,null,null,null)),w=S.exports,k=s("8c4f"),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t._m(0),s("ul",{staticClass:"nav"},[s("li",[s("router-link",{attrs:{to:"/recommend"}},[t._v("推荐音乐")])],1),s("li",[s("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),s("li",[s("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)]),s("keep-alive",[s("router-view",{on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})],1)],1)},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("i",{staticClass:"fa fa-music"}),s("h1",[t._v("口袋音乐")])])}],C={name:"home",components:{}},_=C,P=(s("de16"),Object(g["a"])(_,x,b,!1,null,null,null)),I=P.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[s("HomeTitle",[t._v("推荐歌单")]),s("ul",{staticClass:"list"},t._l(t.personalized,(function(t,e){return s("SongListCard",{key:e,attrs:{item:t}})})),1),s("HomeTitle",[t._v("最新音乐")]),t._l(t.newsong,(function(e,i){return s("SongListItem",{key:i,attrs:{"song-item":e,isWatch:!1,newsong:t.newsong,index:i},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})}))],2)},A=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"title"},[t._t("default")],2)},M=[],j={},N=j,T=(s("9143"),Object(g["a"])(N,D,M,!1,null,null,null)),O=T.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"card",on:{click:function(e){return t.CardClick(t.item.id)}}},[s("div",{staticClass:"thumb"},[s("img",{attrs:{src:t.item.picUrl,alt:""}}),s("span",[s("i",{staticClass:"fa fa-headphones"}),t._v(" "+t._s(t.translatePlayCount(t.item.playCount))+" ")])]),s("div",{staticClass:"name"},[t._v(t._s(t.item.name))])])},E=[],F=(s("b680"),{props:{item:Object},methods:{translatePlayCount:function(t){return t>99999999?(t/1e8).toFixed(2)+"亿":t>9999?(t/1e4).toFixed(1)+"万":void 0},CardClick:function(t){this.$router.push({path:"playlist",query:{id:t}})}}}),z=F,V=(s("ac5a"),Object(g["a"])(z,U,E,!1,null,null,null)),B=V.exports,G=s("16a2"),Q={components:{HomeTitle:O,SongListCard:B,SongListItem:G["a"]},data:function(){return{personalized:[],newsong:[]}},methods:{getPersonalized:function(){var t=this,e=JSON.parse(window.localStorage.getItem("personalized"));e&&Date.now()<e.time?this.personalized=e.data:this.axios.get(" https://music.kele8.cn/personalized?limit=6").then((function(e){t.personalized=e.data.result,window.localStorage.setItem("personalized",JSON.stringify({time:Date.now()+72e5,data:t.personalized}))}))},getNewsong:function(){var t=this,e=JSON.parse(window.localStorage.getItem("newsong"));e&&Date.now()<e.time?this.newsong=e.data:this.axios.get("https://music.kele8.cn/personalized/newsong").then((function(e){t.newsong=e.data.result,window.localStorage.setItem("newsong",JSON.stringify({time:Date.now()+72e5,data:t.newsong}))}))}},created:function(){this.getPersonalized(),this.getNewsong()}},q=Q,J=(s("cfa8"),Object(g["a"])(q,L,A,!1,null,null,null)),W=J.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot"},[t._m(0),t._l(t.topList,(function(e,i){return s("SongListItem",{key:i,attrs:{"song-item":e,index:i,isWatch:!0,topList:t.topList},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})}))],2)},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot-music"},[s("div",{staticClass:"hot-music-top"})])}],R={data:function(){return{topList:[]}},components:{SongListItem:G["a"]},methods:{getTopList:function(){var t=this;this.axios.get("https://music.kele8.cn/top/list?idx=1").then((function(e){t.topList=e.data.playlist.tracks.slice(0,100)}))}},created:function(){this.getTopList()}},Z=R,Y=(s("af91"),Object(g["a"])(Z,H,K,!1,null,null,null)),X=Y.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"input"},[s("label",{attrs:{for:""}},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.inputValue},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getSearchMultimatch(t.inputValue),t.getSearchSongs(t.inputValue)},input:[function(e){e.target.composing||(t.inputValue=e.target.value.trim())},t.vary],blur:function(e){return t.$forceUpdate()}}}),t.inputValue?s("span",{staticClass:"close",on:{click:t.del}}):t._e()])]),t.hotExit?[s("div",{staticClass:"hot"},[s("h4",[t._v("热门搜索")]),s("ul",{staticClass:"keywords"},t._l(t.hotSearchKeyWords,(function(e,i){return s("li",{key:i,on:{click:function(s){return t.hotSearch(e.first)}}},[t._v(t._s(e.first))])})),0),s("div",{staticClass:"history"})])]:t._e(),t.inputValue&&!t.searchMultimatch&&t.ffff?[s("div",{staticClass:"recom"},[s("h3",[t._v('搜索"'+t._s(t.inputValue)+'"')]),s("ul",{staticClass:"lis"},t._l(t.searchSuggests,(function(e,i){return s("li",{key:i,on:{click:function(s){return t.searching(e.keyword)}}},[t._v(t._s(e.keyword))])})),0)])]:t._e(),t.searchMultimatch?s("div",{staticClass:"multimatch"},[s("h4",[t._v("最佳匹配")]),t.searchMultimatch.artist?t._l(t.searchMultimatch.artist,(function(e){return s("div",{key:e.id,staticClass:"artist",on:{click:t.jumpArtist}},[s("img",{attrs:{src:e.picUrl,alt:""}}),s("h5",[t._v("歌手: "+t._s(e.name))]),s("span",[t._v(">")])])})):t._e(),t.searchMultimatch.mv?t._l(t.searchMultimatch.mv,(function(e){return s("div",{key:e.id,staticClass:"mv",on:{click:t.jumpArtistMv}},[s("img",{attrs:{src:e.cover,alt:""}}),s("h5",[s("p",[t._v(" MV: "),s("span",[t._v(t._s(e.name))])]),s("p",[t._v(t._s(e.artistName))])]),s("span",[t._v(">")])])})):t._e()],2):t._e(),t.searchSongs?s("ul",{staticClass:"searchSong"},t._l(t.searchSongs,(function(e,i){return s("SongListItem",{key:e.id,attrs:{"song-item":e,index:i,"search-songs":t.searchSongs},on:{"translate-currentid":function(e){return t.$emit("translate-currentid",e)}}})})),1):t._e(),t.loading?s("div",[s("svg",{staticStyle:{margin:"auto",background:"#fff",display:"block"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"50px",height:"50px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[s("g",{attrs:{transform:"rotate(180 50 50)"}},[s("rect",{attrs:{x:"15",y:"15",width:"10",height:"40.2755",fill:"#d0006e"}},[s("animate",{attrs:{attributeName:"height",values:"50;70;30;50",keyTimes:"0;0.33;0.66;1",dur:"1s",repeatCount:"indefinite",calcMode:"spline",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1",begin:"-0.4s"}})]),s("rect",{attrs:{x:"35",y:"15",width:"10",height:"30.4046",fill:"#d0006e"}},[s("animate",{attrs:{attributeName:"height",values:"50;70;30;50",keyTimes:"0;0.33;0.66;1",dur:"1s",repeatCount:"indefinite",calcMode:"spline",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1",begin:"-0.2s"}})]),s("rect",{attrs:{x:"55",y:"15",width:"10",height:"50.2804",fill:"#d0006e"}},[s("animate",{attrs:{attributeName:"height",values:"50;70;30;50",keyTimes:"0;0.33;0.66;1",dur:"1s",repeatCount:"indefinite",calcMode:"spline",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1",begin:"-0.6s"}})]),s("rect",{attrs:{x:"75",y:"15",width:"10",height:"63.0947",fill:"#d0006e"}},[s("animate",{attrs:{attributeName:"height",values:"50;70;30;50",keyTimes:"0;0.33;0.66;1",dur:"1s",repeatCount:"indefinite",calcMode:"spline",keySplines:"0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1",begin:"-1s"}})])])])]):t._e()],2)},tt=[],et=(s("b0c0"),{data:function(){return{inputValue:null,hotExit:!0,hotSearchKeyWords:[],searchSuggests:[],loading:!1,searchMultimatch:null,searchSongs:[],ffff:!1}},components:{SongListItem:G["a"]},methods:{vary:function(){this.searchMultimatch=null,this.ffff=!0,this.searchSongs=!0},del:function(){this.inputValue="",this.searchSongs=!1},hotSearch:function(t){var e=t;this.getSearchMultimatch(e),this.getSearchSongs(e),this.inputValue=e,this.hotExit=!1},searching:function(t){var e=t;this.getSearchMultimatch(e),this.getSearchSongs(e)},getHotSearch:function(){var t=this;this.axios.get("https://music.kele8.cn/search/hot").then((function(e){t.hotSearchKeyWords=e.data.result.hots}))},getSearchSuggest:function(){var t=this;this.loading=!0,this.axios.get("https://music.kele8.cn/search/suggest",{params:{keywords:this.inputValue,type:"mobile"}}).then((function(e){t.searchSuggests=e.data.result.allMatch})).finally((function(){t.loading=!1}))},getSearchMultimatch:function(t){var e=this;this.loading=!0,this.axios.get("https://music.kele8.cn/search/multimatch",{params:{keywords:t}}).then((function(t){e.searchMultimatch=t.data.result})).finally((function(){e.loading=!1}))},getSearchSongs:function(t){var e=this;this.loading=!0,this.axios.get("https://music.kele8.cn/search",{params:{keywords:t,limit:8,offset:0}}).then((function(t){e.searchSongs=t.data.result.songs})).finally((function(){e.loading=!1}))},jumpArtist:function(){this.$router.push({path:"/artist",query:{id:this.searchMultimatch.artist[0].id,name:this.searchMultimatch.artist[0].name,img:this.searchMultimatch.artist[0].picUrl}})},jumpArtistMv:function(){this.$router.push({path:"/artistMv",query:{id:this.searchMultimatch.artist[0].id}})}},watch:{inputValue:function(){this.inputValue?(this.getSearchSuggest(this.inputValue),this.hotExit=!1):(this.hotExit=!0,this.searchMultimatch=!1)}},created:function(){this.getHotSearch()}}),st=et,it=(s("8172"),Object(g["a"])(st,$,tt,!1,null,null,null)),nt=it.exports;i["a"].use(k["a"]);var at=[{path:"/",component:I,redirect:"/recommend",children:[{path:"recommend",component:W},{path:"hot",component:X},{path:"search",component:nt}]},{path:"/playlist",name:"playlist",component:function(){return s.e("about").then(s.bind(null,"fddd"))}},{path:"/artist",name:"artist",component:function(){return s.e("about").then(s.bind(null,"6b01"))}},{path:"/artistMv",name:"artistMv",component:function(){return s.e("about").then(s.bind(null,"51ab"))}}],rt=new k["a"]({routes:at}),ot=rt,ct=s("2f62");i["a"].use(ct["a"]);var lt=new ct["a"].Store({state:{currentIndex:null,newsongList:[],hotList:[],searchSongs:[],tracks:[],songs:[]},mutations:{submitcurrentIndex:function(t,e){t.currentIndex=e},submitNewsongs:function(t,e){t.newsongList=e},submitHotlist:function(t,e){t.hotList=e},submitSearchsongs:function(t,e){t.searchSongs=e},submitTracks:function(t,e){t.tracks=e},submitSongs:function(t,e){t.songs=e}},actions:{},modules:{}}),ut=s("b970");s("157a");i["a"].use(ut["a"]),i["a"].config.productionTip=!1,new i["a"]({router:ot,store:lt,render:function(t){return t(w)}}).$mount("#app")},"7c55":function(t,e,s){"use strict";var i=s("2395"),n=s.n(i);n.a},8172:function(t,e,s){"use strict";var i=s("8a64"),n=s.n(i);n.a},8580:function(t,e,s){},"8a64":function(t,e,s){},"8d91":function(t,e,s){},9143:function(t,e,s){"use strict";var i=s("ea77"),n=s.n(i);n.a},"977f":function(t,e,s){},a462:function(t,e,s){"use strict";var i=s("8580"),n=s.n(i);n.a},ac5a:function(t,e,s){"use strict";var i=s("e271"),n=s.n(i);n.a},af91:function(t,e,s){"use strict";var i=s("dfe9"),n=s.n(i);n.a},ce19:function(t,e){t.exports="data:image/png;base64,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"},cfa8:function(t,e,s){"use strict";var i=s("977f"),n=s.n(i);n.a},de16:function(t,e,s){"use strict";var i=s("8d91"),n=s.n(i);n.a},dfe9:function(t,e,s){},e271:function(t,e,s){},ea77:function(t,e,s){}});
//# sourceMappingURL=app.efa25177.js.map