<template>
  <div class="banner"><img src="@assets/img/sszx_banner.png" /></div>
  <div class="ppjj content-wrap">
    <div class="content-left">
      <div class="detail-title">{{ detailInfo.title }}
        <br>
        <span>来源：{{detailInfo.lastEditAdminName}}</span>
      </div>
      <div class="content-wrap" v-html="detailInfo.body"></div>
    </div>
    <div class="content-right">
      <img src="@assets/img/sszx_title.png" alt="" />
      <ul class="news-list">
        <li v-for="item in newsRightList" :key="item">
          <img :src="`http://139.196.192.147:99${item.imageUrl}`" alt="" />
          <div>
            <p>{{item.title}}</p>
            <span>{{item.addDate}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive, ref,onBeforeMount } from "vue";
import { GetNewsList } from "@api/api.js";
export default {
  setup() {
    const detailInfo = ref("");
    const newsRightList = reactive([]);
    const categoryActive = (index) => {
      let requestData = {
        siteId: 1,
        channelId: index + 2,
      };
      GetNewsList(requestData).then((response) => {
        let data = response.contents;
         newsRightList.push(...data) 
      });
    };
    onBeforeMount(() => {
      categoryActive(3);
      detailInfo.value = JSON.parse(useRoute().params.item);
    });
    return {
      categoryActive,
      newsRightList,
      detailInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.content-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.content-left {
  width: 70%;
}
.content-right {
  width: 26%;
}
.category-wrap {
  border: 2px solid #000000;
  border-radius: 10px;
  background-color: #efead7;
  padding: 30px 60px 30px 30px;
}
.category-header {
  width: 100%;
  border-bottom: 2px solid #7e7e7e;
  font-size: 20px;
  display: flex;
}
.category-header li {
  padding-bottom: 14px;
  margin-right: 60px;
  cursor: pointer;
}
.category-list li {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d8d8d8;
  padding: 26px 0;
  cursor: pointer;
}
.category-list li span:first-child {
  color: #050706;
  font-size: 18px;
}
.category-list li span:last-child {
  color: #919593;
  font-size: 16px;
}
.content-right > img {
  height: 36px;
  margin-bottom: 40px;
}
.news-list li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  cursor: pointer;
}
.news-list li img {
  width: 40%;
}
.news-list li div {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news-list li div p {
  color: #050706;
}
.news-list li div span {
  color: #919593;
}
.swiper-title {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  line-height: 40px;
  color: #fff;
  text-indent: 20px;
}
.swiper-img {
  width: 100%;
  height: 100%;
}
.el-carousel--horizontal {
  border-radius: 20px;
  margin-bottom: 20px;
}
.category-active {
  color: #b41719;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  transition: 0.7s;
}
.category-active::before {
  position: absolute;
  content: "";
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 5px;
  background: #b41719;
  z-index: 1;
}
.detail-title{
    color: #050706;
    font-size: 22px;
    border-bottom: 1px solid #E4E4E4;
}
.detail-title span{
    color: #9A9999;
    font-size: 16px;
    margin: 15px 0;
    display: block;
}
</style>
