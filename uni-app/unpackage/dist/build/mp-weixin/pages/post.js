(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post"],{"18e2":function(t,e,n){"use strict";(function(t){n("b5a0"),n("921b");i(n("66fd"));var e=i(n("f304"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4c4d":function(t,e,n){"use strict";n.r(e);var i=n("5d5a"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"5d5a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,r,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(i,r)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var o=t.apply(e,n);function a(t){s(o,i,r,a,c,"next",t)}function c(t){s(o,i,r,a,c,"throw",t)}a(void 0)})}}var a={data:function(){return{cid:null,postData:[{created:0}],canIUse:wx.canIUse("button.open-type.getUserInfo"),isLogin:!1,isLoading:!0,isLike:!1,likeUsers:[],commentText:null,commentList:[]}},methods:{formatTime:function(t){return this.$moment.unix(t).format("YYYY年MM月DD日")},comment:function(){var e=o(i.default.mark(function e(){var n;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLogin){e.next=3;break}return t.showToast({icon:"none",title:"发表评论需要先授权登录"}),e.abrupt("return");case 3:if(null!=this.commentText){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,this.$api.addComment({cid:this.cid,text:this.commentText});case 7:n=e.sent,console.log("发表评论",n),this.commentText=null,t.showToast({icon:"none",title:"评论成功,等待审核"});case 11:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),loadUserInfo:function(e){var n=this;console.log("授权登录",e.detail.errMsg),"getUserInfo:fail auth deny"!=e.detail.errMsg&&(this.isLogin=!0),wx.login({success:function(){var e=o(i.default.mark(function e(r){return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log("尝试登录",r),r.code?wx.getSetting({success:function(){var e=o(i.default.mark(function e(s){var a;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!s.authSetting["scope.userInfo"]){e.next=5;break}console.log("用户已授权",s),wx.getUserInfo({success:function(){var e=o(i.default.mark(function e(s){var o,a;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("尝试获取用户信息",s),o={code:r.code},Object.assign(o,s.userInfo),e.next=5,n.$api.login(o);case 5:a=e.sent,t.setStorageSync("openid",a);case 7:case"end":return e.stop()}},e,this)}));function s(t){return e.apply(this,arguments)}return s}()}),e.next=9;break;case 5:return e.next=7,n.$api.login({code:r.code});case 7:a=e.sent,t.setStorageSync("openid",a);case 9:case"end":return e.stop()}},e,this)}));function s(t){return e.apply(this,arguments)}return s}()}):console.log("登录失败！"+r.errMsg);case 2:case"end":return e.stop()}},e,this)}));function r(t){return e.apply(this,arguments)}return r}()})},like:function(){this.isLogin?(this.$api.likePost({cid:this.cid}),this.isLike=!0):t.showToast({icon:"none",title:"点赞需要先授权登录"})},reward:function(){wx.previewImage({current:"https://www.thinkmoon.cn/usr/themes/armx/img/weixinpay.jpg",urls:["https://www.thinkmoon.cn/usr/themes/armx/img/weixinpay.jpg"]})}},onLoad:function(){var t=o(i.default.mark(function t(e){return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.cid=e.cid,t.next=3,this.$api.getPostBycid({cid:e.cid});case 3:this.postData=t.sent,console.log("请求成功"),this.isLoading=!1;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var t=o(i.default.mark(function t(){var e,n=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&(n.isLogin=!0)}}),t.next=3,this.$api.getPostLikeStatus({cid:this.cid});case 3:return e=t.sent,console.log("获取点赞状态",e),this.isLike=JSON.parse(e),t.next=8,this.$api.getLikeUsers({cid:this.cid});case 8:return e=t.sent,console.log("文章点赞用户列表",e),this.likeUsers=e,t.next=13,this.$api.getComment({cid:this.cid});case 13:e=t.sent,this.commentList=e;case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShareAppMessage:function(){return{title:this.postData[0].title,path:this.$mp.page.route+"?"+this.$qs.stringify(this.$mp.query,{encode:!1})}}};e.default=a}).call(this,n("543d")["default"])},"5fbe":function(t,e,n){},"63cc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.formatTime(t.postData[0].created)),i=t.__map(t.commentList,function(e,n){var i=t.formatTime(e.created);return{$orig:t.__get_orig(e),m1:i}});t.$mp.data=Object.assign({},{$root:{m0:n,l0:i}})},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},e4b5:function(t,e,n){"use strict";var i=n("5fbe"),r=n.n(i);r.a},f304:function(t,e,n){"use strict";n.r(e);var i=n("63cc"),r=n("4c4d");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);n("e4b5");var o=n("2877"),a=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports}},[["18e2","common/runtime","common/vendor"]]]);