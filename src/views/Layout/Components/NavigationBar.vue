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
      </div>
    </div>
    <!-- 导航 -->
    <div class="navbg">
      <div class="nav">
        <ul>
          <template v-for="(item, index) in routers.options.routes[0].children"
            :key="item">
          <li
            v-if="!item.hidden"
            @click="enterPage(index)"
            :class="{ sele: activeClass == index }"
          >
            <a target="_blank">{{ item.meta.name }}</a>
          </li>
          </template>
        </ul>
      </div>
    </div>
    <!-- /导航 -->
  </div>
</template>

<script>
import { ref,watch } from "vue";
import { useRouter,useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const routers = useRouter();
    const activeClass = ref(0);
    const enterPage = (index) => {
      activeClass.value = index;
      routers.push(routers.options.routes[0].children[index].path);
    };
     watch(
      () => route.fullPath,
      (n) => {
        routers.options.routes[0].children.forEach((item,index) => {
          item.path == n ? activeClass.value = index : false
        })
      }
    );
    return { routers, activeClass, enterPage };
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
