<template>
  <div>
    <!--公共顶部-->
    <div class="topbg">
      <div class="top">
        <!--欢迎语-->
        <div class="topl">
          <router-link to="/"><img src="@assets/img/logo.png" /></router-link>
        </div>
        <!--顶部导航-->
        <div class="topr">热线电话: 400-6635-277</div>

        <div class="topbtn" @click="showMenu = true"></div>
      </div>
    </div>
    <!-- 导航 -->
    <div class="navbg" v-show="showMenu" @click="switchMenu">
      <div class="nav">
        <ul>
          <template
            v-for="(item, index) in routers.options.routes[0].children"
            :key="item"
          >
            <li
              v-if="!item.hidden"
              @click="enterPage(index)"
              :class="{ sele: activeClass == index }"
            >
              <a target="_blank">{{ item.meta.name }}</a>
              <img src="@assets/img/arr_rig.png" alt="" />
            </li>
          </template>
        </ul>
      </div>
    </div>
    <!-- /导航 -->
  </div>
</template>

<script>
import { ref, watch, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const routers = useRouter();
    const activeClass = ref(0);
    const showMenu = ref(false);
    const { proxy } = getCurrentInstance();
    const isMobile = () => {
      let flag = proxy.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    };
    isMobile() ? showMenu.value = false : showMenu.value = true
    const enterPage = (index) => {
      activeClass.value = index;
      routers.push(routers.options.routes[0].children[index].path);
    };
    const switchMenu = () => {
      isMobile() ? showMenu.value = false : showMenu.value = true
    };
    watch(
      () => route.fullPath,
      (n) => {
        routers.options.routes[0].children.forEach((item, index) => {
          item.path == n ? (activeClass.value = index) : false;
        });
      }
    );
    return { routers, activeClass, showMenu, enterPage, isMobile, switchMenu };
  },
};
</script>

<style lang="scss" scoped>
.topbg {
  background: #b41719;
  height: 104px;
  line-height: 104px;
  width: 100%;
  padding-top: 16px;
  overflow: hidden;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    height: 106px;
    padding-top: 0;
    .top {
      width: 100%;
      .topl a img {
        width: 283px;
        height: 59px;
        margin: 21px 0 0 18px;
      }
    }
    .topr {
      display: none;
    }
  }
}
.topbtn {
  width: 54px;
  height: 54px;
  background-image: url("~@assets/img/menu_btn.png");
  background-size: 100% 100%;
  float: right;
  margin: 26px 22px 0 0;
  display: none;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: block;
  }
}
.top,
.head,
.nav,
.viewport,
.ppjj {
  width: 1207px;
  margin: 0px auto;
}
.topl {
  float: left;
}
.topl a {
  display: inline-block;
}
.topr {
  color: #fff;
  font-size: 26px;
  float: right;
}
.navbg {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e4e4e4;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.8);
    .nav ul {
      background: #fff;
      width: 375px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 95px;
      z-index: 9999999;
      li {
        width: 200px;
        height: 100px;
        padding: 0 50px;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        img {
          display: block;
        }
      }
      .sele img {
        display: none;
      }
    }
  }
}
.nav {
  font-size: 18px;
  color: #292929;
}
.nav ul {
  overflow: hidden;
}
.nav ul li {
  width: 140px;
  height: 50px;
  text-align: center;
  float: left;
  margin-left: 16px;
  margin-right: 16px;
  line-height: 50px;
  cursor: pointer;
}
.nav ul li img {
  width: 9px;
  height: 15px;
  display: none;
}
.nav ul li a {
  color: #292929;
}
.nav ul li.sele {
  background: #b41719;
}
.nav ul li.sele a {
  color: #fff;
}
</style>
