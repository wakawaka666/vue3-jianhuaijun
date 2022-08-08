<template>
  <div class="banner"><img src="@assets/img/sszx_banner.png" /></div>
  <div class="ppjj content-wrap">
    <div class="content-left">
      <el-carousel :interval="5000" arrow="never" indicator-position="none">
        <el-carousel-item
          v-for="item in swiperList"
          :key="item"
          style="border-radius: 20px; over-flow: hidden"
        >
          <h3 class="swiper-title">{{ item.title }}</h3>
          <img class="swiper-img" :src="item.bg" alt="" />
        </el-carousel-item>
      </el-carousel>
      <div class="category-wrap">
        <ul class="category-header">
          <li
            v-for="(item, index) in categoryInfo"
            :key="item"
            @click="categoryActive(index)"
            :class="{ 'category-active': catogoryIndex == index }"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="category-list">
          <li
            v-for="item in newsLeftList"
            :key="item"
            @click="enterDetail(item)"
          >
            <span>{{ item.title }}</span>
            <span>{{ item.addDate }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-right">
      <img src="@assets/img/sszx_title.png" alt="" />
      <ul class="news-list">
        <li v-for="item in newsRightList" :key="item" @click="enterDetail(item)">
          <img :src="`http://139.196.192.147:99${item.imageUrl}`" alt="" />
          <div>
            <p>{{ item.title }}</p>
            <span>{{ item.addDate }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import { GetNewsList } from "@api/api.js";
import { useRouter } from "vue-router";
export default {
  setup() {
    const swiperList = reactive([
      {
        bg: require("@assets/img/swiper.png"),
        title: "见淮君牛肉粉丝汤为什么可以",
      },
      {
        bg: require("@assets/img/swiper.png"),
        title: "见淮君牛肉粉丝汤为什么可以",
      },
      {
        bg: require("@assets/img/swiper.png"),
        title: "见淮君牛肉粉丝汤为什么可以",
      },
    ]);
    const newsLeftList = reactive([]);
    const newsRightList = reactive([]);
    const catogoryIndex = ref(0);
    const categoryInfo = reactive(["公司新闻", "开店答疑", "加盟必读"]);
    const categoryActive = (index) => {
      catogoryIndex.value = index;
      let requestData = {
        siteId: 1,
        channelId: index + 2,
      };
      GetNewsList(requestData).then((response) => {
        let data = response.contents;
        newsLeftList.length = 0;
        index == 3 ? newsRightList.push(...data) : newsLeftList.push(...data);
      });
    };
    const router = useRouter();
    const enterDetail = (item) => {
      let items = JSON.stringify(item);
      router.push({
        name: "NewsDetail",
        params: {
          item: items,
        },
      });
    };
    onMounted(async () => {
      await categoryActive(3);
      await categoryActive(0);
    });
    return {
      swiperList,
      catogoryIndex,
      categoryActive,
      enterDetail,
      categoryInfo,
      newsLeftList,
      newsRightList,
      router
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
  @media screen and (min-width: 300px) and (max-width: 1333px){
    width: 715px;
    margin: 0 auto;
  }
}
.content-right {
  width: 26%;
  @media screen and (min-width: 300px) and (max-width: 1333px){
    display: none;
  }
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
  @media screen and (min-width: 300px) and (max-width: 1333px){
    font-size: 24px;
  }
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
  @media screen and (min-width: 300px) and (max-width: 1333px){
    font-size: 22px;
  }
}
.category-list li span:last-child {
  color: #919593;
  font-size: 16px;
  @media screen and (min-width: 300px) and (max-width: 1333px){
    font-size: 22px;
  }
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
  @media screen and (min-width: 300px) and (max-width: 1333px){
    font-size: 26px;
  }
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
</style>
