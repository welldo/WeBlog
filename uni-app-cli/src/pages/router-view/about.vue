<template name="about">
  <view>
    <cu-custom bgColor="bg-gradual" title="关于"></cu-custom>
    <view class="overView flex justify-between flex-direction weather rain">
      <view class="flex justify-center align-center flex-direction margin-top-lg">
        <image class="icon shadow" src="https://www.thinkmoon.cn/usr/uploads/2018/12/55979974.jpg"></image>
        <view class="text-bold text-shadow text-lg">指尖魔法屋</view>
      </view>
      <view class="flex align-end padding-xs justify-around text-white text-shadow text-bold solid-top">
        <view class="margin-xs flex align-center flex-direction">
          <view>文章</view>
          <view>{{ Overview.posts[0].Num }}</view>
        </view>
        <view class="margin-xs flex align-center flex-direction">
          <view>留言</view>
          <view>{{ Overview.comments[0].Num }}</view>
        </view>
        <view class="margin-xs flex align-center flex-direction">
          <view>分类</view>
          <view>{{ Overview.categorys[0].Num }}</view>
        </view>
        <view class="margin-xs flex align-center flex-direction">
          <view>标签</view>
          <view>{{ Overview.tags[0].Num }}</view>
        </view>
      </view>
    </view>
    <!-- <image
      src="https://tva3.sinaimg.cn/large/8d406c5egy1gamn31scsdg20f002skhn.gif"
      mode="scaleToFill"
      class="gif-wave"
    ></image> -->
    <parse :content="postData[0].text" v-if="postData[0].text"></parse>
    <view class="modal bg-white" v-if="isLoading">
      <view class="spinner bg-base"></view>
    </view>
    <!-- #ifdef MP-QQ -->
    <ad unit-id="01a084f529176b8df06deaa2274f6721" type="card"></ad>
    <!-- #endif -->
    <tm-footer></tm-footer>
  </view>
</template>

<script lang="ts">
import Vue from "vue";

import parse from "@/componets/tm-parse.vue";

export default Vue.extend({
  components: {
    parse,
  },
  data() {
    return {
      cid: null,
      isLoading: true,
      Overview: {},
      postData: {},
    };
  },
  mounted() {
    this.$Api
      .getAboutCid()
      .then((res: Response) => {
        return res;
      })
      .then((data: any) => {
        this.$Api
          .getPostBycid({
            cid: data,
          })
          .then((res: any) => {
            this.postData = res;
            this.isLoading = false;
          });
      });

    this.$Api.getOverview().then((res: any) => {
      this.Overview = res;
    });
  },
  onShow() {},
});
</script>

<style>
@import "@/../assets/css/weather.css";
/*引入天气的css*/

/* // 头像 */
.icon {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
  margin: auto;
  border: 5rpx #eee solid;
}

.overView {
  background-image: url("https://www.thinkmoon.cn/usr/themes/armx/img/about_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.gif-wave {
  margin: 0;
  mix-blend-mode: screen;
  height: 100upx;
  position: absolute;
  top: 555upx;
  z-index: 99;
  width: 100%;
}
</style>
