<template>
  <div class="banner">
    <img src="@assets/img/mstj_banner.png" alt="" />
  </div>
  <div class="ppjj mscp-wrap">
    <div class="mscp-left">
      <img src="@assets/img/mscp_title.png" alt="" />
      <ul>
        <li
          v-for="(item, index) in mscpList"
          :key="item"
          @click="activeClass = index"
        >
          <span :class="{ 'active-class': (activeClass == index) }">{{ item.title }}</span>
          <img
            v-if="(activeClass == index)"
            src="@assets/img/red_arr.png"
            alt=""
          />
          <img v-else src="@assets/img/gray_arr.png" alt="" />
        </li>
      </ul>
    </div>
    <div class="mscp-right">
      <div
        class="mscp-item"
        v-for="item in mscpList[activeClass].list"
        :key="item"
      >
        <img :src="item.img" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const activeClass = ref(0);
    const mscpList = reactive([
      {
        title: "淮南牛肉汤",
        list: [
          {
            img: require("@assets/img/nrfst.png"),
            title: "见淮君淮南牛肉粉丝汤",
          },
          {
            img: require("@assets/img/nzfst.png"),
            title: "见淮君淮南牛杂粉丝汤",
          },
          {
            img: require("@assets/img/hnnrm.png"),
            title: "见淮君淮南牛肉面",
          },
          {
            img: require("@assets/img/hnnzm.png"),
            title: "见淮君淮南牛杂面",
          },
          {
            img: require("@assets/img/fqnrm.png"),
            title: "见淮君番茄牛肉面",
          },
        ],
      },
      {
        title: "米饭套餐",
        list: [
          {
            img: require("@assets/img/nrfst.png"),
            title: "见淮君淮南牛肉粉丝汤",
          },
          {
            img: require("@assets/img/nzfst.png"),
            title: "见淮君淮南牛杂粉丝汤",
          },
          {
            img: require("@assets/img/hnnrm.png"),
            title: "见淮君淮南牛肉面",
          }
        ],
      },
      {
        title: "小食",
        list: [
          {
            img: require("@assets/img/nrfst.png"),
            title: "见淮君淮南牛肉粉丝汤",
          },
          {
            img: require("@assets/img/nzfst.png"),
            title: "见淮君淮南牛杂粉丝汤",
          }
        ],
      }
    ]);
    return { mscpList, activeClass };
  },
};
</script>

<style lang="scss" scoped>
.mscp-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
}
.mscp-left {
  width: 26%;
}
.mscp-left > img {
  width: 147px;
  margin-bottom: 66px;
}
.mscp-left ul {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.mscp-left li {
  width: 100%;
  height: 38px;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #dcdcdc;
  margin-bottom: 23px;
  color: #050505;
  cursor: pointer;
}
.mscp-right {
  width: 65%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.mscp-item {
  width: 30%;
  margin: 0 3% 38px 0;
}
.mscp-item img {
  height: 159px;
}
.mscp-item p {
  text-align: center;
  height: 48px;
  line-height: 48px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #1f1f1f;
}
.active-class {
  color: #b41719;
}
</style>
