(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post"],{"3a4f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,o,i,s,r){try{var c=t[s](r),a=c.value}catch(u){return void n(u)}c.done?e(a):Promise.resolve(a).then(o,i)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var r=t.apply(e,n);function c(t){s(r,o,i,c,a,"next",t)}function a(t){s(r,o,i,c,a,"throw",t)}c(void 0)})}}var c={data:function(){return{cid:null,thumb:"",postData:[{created:0}],canIUse:wx.canIUse("button.open-type.getUserInfo"),isLogin:!1,isLoading:!0,isLike:!1,likeUsers:[],commentText:null,commentList:[]}},methods:{formatTime:function(t){return this.$moment.unix(t).format("YYYY年MM月DD日")},comment:function(){var e=r(o.default.mark(function e(){var n;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isLogin){e.next=3;break}return t.showToast({icon:"none",title:"发表评论需要先授权登录"}),e.abrupt("return");case 3:if(null!=this.commentText){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,this.$api.addComment({cid:this.cid,text:this.commentText});case 7:n=e.sent,console.log("发表评论",n),this.commentText=null,t.showToast({icon:"none",title:"评论成功,等待审核"});case 11:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),loadUserInfo:function(e){var n=this;console.log("授权登录",e.detail.errMsg),"getUserInfo:fail auth deny"!=e.detail.errMsg&&(this.isLogin=!0),wx.login({success:function(){var e=r(o.default.mark(function e(i){return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log("尝试登录",i),i.code?wx.getSetting({success:function(){var e=r(o.default.mark(function e(s){var c;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!s.authSetting["scope.userInfo"]){e.next=5;break}console.log("用户已授权",s),wx.getUserInfo({success:function(){var e=r(o.default.mark(function e(s){var r,c;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("尝试获取用户信息",s),r={code:i.code},Object.assign(r,s.userInfo),e.next=5,n.$api.login(r);case 5:c=e.sent,t.setStorageSync("openid",c);case 7:case"end":return e.stop()}},e,this)}));function s(t){return e.apply(this,arguments)}return s}()}),e.next=9;break;case 5:return e.next=7,n.$api.login({code:i.code});case 7:c=e.sent,t.setStorageSync("openid",c);case 9:case"end":return e.stop()}},e,this)}));function s(t){return e.apply(this,arguments)}return s}()}):console.log("登录失败！"+i.errMsg);case 2:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}()})},like:function(){this.isLogin?(this.$api.likePost({cid:this.cid}),this.isLike=!0):t.showToast({icon:"none",title:"点赞需要先授权登录"})},reward:function(){var t=qq.createRewardedVideoAd({adUnitId:"2623e52894edca46483527a4e2355e2e"});t.onError(function(t){console.log("videoAd onError",t)}),t.onLoad(function(t){console.log("videoAd onLoad",t)}),t.onClose(function(t){console.log("videoAd onClose",t)}),t.load().then(function(){console.log("激励视频加载成功"),t.show().then(function(){console.log("激励视频 广告显示成功")}).catch(function(t){console.log("激励视频 广告显示失败")})}).catch(function(t){console.log("激励视频加载失败")})}},onLoad:function(){var t=r(o.default.mark(function t(e){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.cid=e.cid,this.thumb=e.thumb,t.next=4,this.$api.getPostBycid({cid:e.cid});case 4:this.postData=t.sent,this.isLoading=!1;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var t=r(o.default.mark(function t(){var e,n=this;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&(n.isLogin=!0)}}),t.next=3,this.$api.getPostLikeStatus({cid:this.cid});case 3:return e=t.sent,console.log("获取点赞状态",e),this.isLike=JSON.parse(e),t.next=8,this.$api.getLikeUsers({cid:this.cid});case 8:return e=t.sent,console.log("文章点赞用户列表",e),this.likeUsers=e,t.next=13,this.$api.getComment({cid:this.cid});case 13:e=t.sent,this.commentList=e;case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShareAppMessage:function(){return{title:this.postData[0].title,path:this.$mp.page.route+"?"+this.$qs.stringify(this.$mp.query,{encode:!1}),imageUrl:this.thumb}}};e.default=c}).call(this,n("a821")["default"])},5694:function(t,e,n){"use strict";var o=n("c959"),i=n.n(o);i.a},"59fa":function(t,e,n){"use strict";n.r(e);var o=n("c223"),i=n("7072");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("5694");var r,c=n("f0c5"),a=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=a.exports},7072:function(t,e,n){"use strict";n.r(e);var o=n("3a4f"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},c223:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.formatTime(t.postData[0].created));t.$mp.data=Object.assign({},{$root:{m0:n}})},s=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return o})},c959:function(t,e,n){},ce4c:function(t,e,n){"use strict";(function(t){n("520f");o(n("66fd"));var e=o(n("59fa"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])}},[["ce4c","common/runtime","common/vendor"]]]);