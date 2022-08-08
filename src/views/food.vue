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
          @click="select(index)"
          ref="allLi"
        >
          <div class="top-li">
            <span :class="{ 'active-class': activeClass == index }">{{
              item.title
            }}</span>
            <img
              v-if="activeClass == index"
              src="@assets/img/red_arr.png"
              alt=""
              class="img-pc"
            />
            <img v-else src="@assets/img/gray_arr.png" alt="" class="img-pc" />

            <img
              v-if="activeClass == index"
              src="@assets/img/top_arr.png"
              alt=""
              class="img-mobile"
            />
            <img
              v-else
              src="@assets/img/bottom_arr.png"
              alt=""
              class="img-mobile"
            />
          </div>
          <div class="bottom-li" v-if="index == activeClass">
            <div
              class="bottom-li-item"
              v-for="item in mscpList[activeClass].list"
              :key="item"
            >
              <img :src="item.img" alt="" />
              <p>{{ item.title }}</p>
            </div>
          </div>
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
    const allLi = ref("allLi");
    const select = (index) => {
      activeClass.value = index;

      // allLi.value[index].children[0].style.background = 'green'
    };
    const mscpList = reactive([
      {
        title: "粉丝和面",
        list: [
          {
            img: require("@assets/img/hnnrfst.png"),
            title: "见淮君淮南牛肉粉丝汤",
          },
          {
            img: require("@assets/img/hnnzfst.png"),
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
        ],
      },
      {
        title: "米饭",
        list: [
          {
            img: require("@assets/img/tdsnr.png"),
            title: "土豆烧牛肉",
          },
          {
            img: require("@assets/img/jtscy.png"),
            title: "金汤酸菜鱼",
          },
          {
            img: require("@assets/img/mckr.png"),
            title: "梅菜扣肉",
          },
          {
            img: require("@assets/img/hnxlj.png"),
            title: "淮南香辣鸡",
          },
          {
            img: require("@assets/img/cxmxw.png"),
            title: "川香毛血旺",
          },
          {
            img: require("@assets/img/fqy.png"),
            title: "番茄鱼",
          },
          {
            img: require("@assets/img/rmqz.png"),
            title: "肉末茄子",
          },
        ],
      },
      {
        title: "小食",
        list: [
          {
            img: require("@assets/img/mzljt.png"),
            title: "秘制卤鸡腿",
          },
          {
            img: require("@assets/img/mzljz.png"),
            title: "秘制卤鸡爪",
          },
          {
            img: require("@assets/img/szt.png"),
            title: "狮子头",
          },
          {
            img: require("@assets/img/jhjcyb.png"),
            title: "见淮君葱油饼",
          },
          {
            img: require("@assets/img/ldg.png"),
            title: "卤豆干",
          },
          {
            img: require("@assets/img/mzlnjr.png"),
            title: "秘制牛脊肉",
          },
          {
            img: require("@assets/img/mzxlnr.png"),
            title: "见淮君秘制香辣牛肉",
          },
          {
            img: require("@assets/img/jhjnrb.png"),
            title: "见淮君牛肉饼",
          },
          {
            img: require("@assets/img/xc.png"),
            title: "香肠",
          },
          {
            img: require("@assets/img/ld.png"),
            title: "卤蛋",
          },
        ],
      },
    ]);
    return { allLi, mscpList, activeClass, select };
  },
};
</script>

<style lang="scss" scoped>
.mscp-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: unset;
  }
}
.mscp-left {
  width: 26%;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 713px;
    margin: 0 auto;
    margin-top: 34px;
  }
}
.mscp-left > img {
  width: 147px;
  margin-bottom: 66px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin-bottom: 30px;
  }
}
.mscp-left ul {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.mscp-left li:nth-child(1) .top-li {
  background: unset;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    background: #b41719;
  }
}
.mscp-left li:nth-child(2) .top-li {
  background: unset;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    background: #f3a50e;
  }
}
.mscp-left li:nth-child(3) .top-li {
  background: unset;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    background: #279bf3;
  }
}
.top-li {
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
  position: relative;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    border-bottom: unset;
    text-indent: 20px;
    padding: 36px 0;
    color: #fff;
    font-size: 28px;
    ::before {
      content: "";
      width: 8px;
      height: 28px;
      background: #fff;
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.bottom-li {
  width: 713px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0 auto;
  display: none;
  justify-content: space-between;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: flex;
  }
}
.bottom-li-item {
  width: 346px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
.bottom-li-item img {
  height: 232px;
}
.bottom-li-item p {
  text-align: center;
  height: 70px;
  line-height: 70px;
  background-color: #f2f2f2;
  font-size: 24px;
  color: #1f1f1f;
}
.mscp-right {
  width: 65%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: none;
  }
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
.active-class ~ img {
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    transform: rotate(360deg);
    margin-right: 20px;
  }
}
.active-class {
  color: #b41719;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    color: #fff;
  }
}
.img-pc {
  display: block;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: none;
  }
}
.img-mobile {
  display: none;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: block;
    width: 26px;
    height: 22px;
    margin-right: 20px;
  }
}
</style>
