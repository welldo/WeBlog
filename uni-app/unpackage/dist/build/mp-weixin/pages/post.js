(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post"],{"23a5":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},d86a:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,r,a,u,o){try{var i=t[u](o),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var o=t.apply(n,e);function i(t){u(o,r,a,i,c,"next",t)}function c(t){u(o,r,a,i,c,"throw",t)}i(void 0)})}}var i={data:function(){return{postData:{}}},onLoad:function(){var t=o(r.default.mark(function t(n){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.getPostBycid({cid:n.cid});case 2:this.postData=t.sent,console.log("请求成功");case 4:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}()};n.default=i},deb9:function(t,n,e){"use strict";e.r(n);var r=e("23a5"),a=e("fa55");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);var o=e("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=i.exports},fa55:function(t,n,e){"use strict";e.r(n);var r=e("d86a"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=a.a}},[["40d4","common/runtime","common/vendor"]]]);