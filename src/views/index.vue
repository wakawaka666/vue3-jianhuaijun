<template>
  <!-- banner -->
  <div class="banner"><img src="@assets/img/banner.png" /></div>
  <!-- 品牌简介一栏 -->
  <div class="ppjj">
    <!-- 左侧品牌简介 -->
    <div class="ppjj_left">
      <div class="jianjie">
        <h1><img src="@assets/img/pinpjianj.png" /></h1>
        <p>
          见淮君淮南牛肉汤，采用淮南传统制作工艺，选取江淮一带黄牛为原料，以牛骨熬汤，辅以传统工艺炮制的几十种滋补药材和卤料，汤汁鲜香醇厚，具有养生保健之功效。店内红油均以自制牛油与炸好的淮椒配制而成，最大程度还原正宗淮南牛肉汤之原汁原味，给食客身在店中，心至淮南之感。
        </p>
        <router-link to="/brand">了解详情</router-link>
      </div>
      <img
        class="ppjj_img"
        src="@assets/img/pic_01.png"
        width="375px"
        height="375px"
      />
      <div class="clearfix"></div>
      <div class="goodpp">
        <h2>
          <img src="@assets/img/pinp_icon01.png" /><span>好品牌</span
          >大众点评粉丝类连锁大品牌
        </h2>
        <h2>
          <img src="@assets/img/pinp_icon02.png" /><span>高销量</span
          >实体以及外卖平台销量名列前茅
        </h2>
        <h2>
          <img src="@assets/img/pinp_icon03.png" /><span>复购率</span
          >吃了之后，还想吃排名靠前
        </h2>
      </div>
    </div>
    <!-- 右侧投资计算器 -->
    <div class="ppjj_right">
      <h1>见淮君开店投资计算器</h1>
      <div class="touzi">
        <ul>
          <li>
            <label>房租:</label
            ><input type="text" v-model="formList.fangZu" />万元/年
          </li>
          <li>
            <label>面积:</label
            ><input type="text" v-model="formList.mianJi" />平米
          </li>
          <li>
            <label>人流量</label
            ><input type="text" v-model="formList.renLiuLiang" />人次/天
          </li>
          <li>
            <label>客单价</label
            ><input type="text" v-model="formList.keDanJia" />元/人
          </li>
          <li style="height: auto">
            <label>请输入您的电话号码:</label
            ><input type="text" class="telep" v-model="formList.mobile" />
          </li>
          <li><input type="button" value="发 送" @click="submit" /></li>
        </ul>
        <p>
          <span>说明:</span> 以上数据来自案列大数据预估，不代表
          实质性判断或承诺，投资因物业条件、选址、
          市场环境、城市发展情况等不同而存在差异， 以上数据仅供参考。
        </p>
      </div>
    </div>
    <div class="clearfix"></div>
    <!-- 一站式开店服务 -->
    <div class="yzskd">
      <h1><img src="@assets/img/wenzi.png" /></h1>
      <div class="yzskd_left">
        <h2><img src="@assets/img/yzsfw.png" /></h2>
        <div class="yzs">
          <p class="bb1px br1px">
            <img src="@assets/img/yzs_icon01.png" />多类型供您选择
          </p>
          <p class="bb1px">
            <img src="@assets/img/yzs_icon02.png" />见淮君怎么赚钱的
          </p>
          <p class="br1px">
            <img src="@assets/img/yzs_icon03.png" />披露经营误区
          </p>
          <p><img src="@assets/img/yzs_icon04.png" />有效的营销方法</p>
        </div>
      </div>
      <div class="yzskd_right"><img src="@assets/img/pic_02.png" /></div>
    </div>
    <!-- /一站式开店服务 -->
  </div>
  <!-- /品牌简介一栏 -->
  <div class="ad"><img src="@assets/img/ads_01.jpg" /></div>
  <!-- 创客招募 -->
  <div class="ckzm">
    <h1>
      <img src="@assets/img/ckzm_tit.png" /><router-link to="/cooperation"
        >了解详情</router-link
      >
    </h1>
    <div class="ckzm_img">
      <img src="@assets/img/ckzm_01.jpg" />
      <img src="@assets/img/ckzm_02.jpg" />
      <img src="@assets/img/ckzm_03.jpg" />
      <img src="@assets/img/ckzm_04.jpg" />
    </div>
  </div>
  <!-- /创客招募 -->
</template>

<script>
import { reactive } from "vue";
import { Calculator } from "@api/api.js";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const formList = reactive({
      formId: 4,
    });
    const submit = () => {
        Calculator(formList).then((response) => {
          console.log(response);
          ElMessage.success("提交成功");
        });
    };
    return { formList, submit };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 1209px;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
}
.ppjj {
  margin-top: 30px;
}
.ppjj_left {
  float: left;
  width: 843px;
  background: #b41719;
  padding: 40px 0px;
  border-radius: 8px;
}
.jianjie {
  width: 370px;
  margin-left: 44px;
  float: left;
}
.jianjie h1 {
  margin-bottom: 20px;
}
.jianjie p {
  font-size: 16px;
  color: #fff;
  line-height: 32px;
  margin-bottom: 30px;
  text-indent: 2em;
}
.ppjj_left a,
.ckzm h1 a {
  font-size: 18px;
  color: #fff;
  display: inline-block;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 25px;
  border: 2px solid #fff;
  margin-bottom: 50px;
}
.ppjj_img {
  float: right;
  margin-right: 30px;
  width: 375px;
  height: 375px;
  border-radius: 6px;
  margin-left: 24px;
}
.goodpp {
}
.goodpp h2 {
  float: left;
  margin-left: 28px;
  text-align: center;
  color: #fff;
  background: url("~@assets/img/haopp_bg.png") no-repeat top left;
  width: 202px;
  height: 111px;
  padding: 18px;
  font-size: 14px;
  font-weight: normal;
}
.goodpp h2 img {
  display: inline-block;
}
.goodpp h2 span {
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  font-size: 18px;
  font-weight: bold;
}
.ppjj_right {
  float: right;
  width: 334px;
  border: 2px solid #000;
  border-radius: 7px;
}
.ppjj_right h1 {
  height: 70px;
  line-height: 70px;
  background: #b41719;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  border-bottom: 2px solid #000;
  color: #fff;
}
.touzi {
  font-size: 18px;
}
.touzi ul {
  padding: 24px;
}
.touzi ul li {
  height: 50px;
  line-height: 50px;
}
.touzi ul li label {
  width: 65px;
}
.touzi ul li input[type="text"] {
  border: none;
  border-bottom: 1px solid #d2d2d2;
}
.touzi input.telep[type="text"] {
  width: 275px;
  height: 40px;
  border: 1px solid #d2d2d2;
  border-radius: 3px;
}
.touzi ul li input[type="button"] {
  background: #b41719;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border: none;
  width: 276px;
  height: 50px;
  border-radius: 25px;
  margin-top: 15px;
}
.touzi p {
  padding: 27px;
  color: #636060;
  font-size: 14px;
  line-height: 26px;
}
.touzi p span {
  color: #000;
}
.yzskd {
  margin-top: 30px;
  background: #efead7;
  padding: 40px 0px;
  border-radius: 8px;
  overflow: hidden;
}
.yzskd h1 {
  text-align: center;
  margin-bottom: 50px;
}
.yzskd_left {
  float: left;
  width: 495px;
}
.yzskd_left h2 {
  margin-top: 30px;
  text-align: center;
}
.yzs {
  background: #b41719;
  border-radius: 7px;
  width: 478px;
  height: 294px;
  margin-left: 60px;
  margin-top: 25px;
}
.yzs p {
  width: 238px;
  height: 146px;
  float: left;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.yzs p.bb1px {
  border-bottom: 2px solid #ebdcca;
}
.yzs p.br1px {
  border-right: 2px solid #ebdcca;
}
.yzs p img {
  display: block;
  margin: 20px auto;
}
.yzskd_right {
  margin-right: 50px;
  float: right;
  width: 560px;
  height: 415px;
  border-radius: 6px;
}
.ad {
  margin-top: 30px;
}
.ad img {
  width: 100%;
}
.ckzm {
  background: #b41719;
  width: 1207px;
  padding: 60px 0px;
  margin: 0px auto;
  border-radius: 8px;
  margin-top: 25px;
}
.ckzm h1 {
  margin: 0px 60px;
  overflow: hidden;
}
.ckzm h1 a {
  float: right;
}
.ckzm_img {
  overflow: hidden;
  padding-left: 18px;
}
.ckzm_img img {
  margin-left: 32px;
  width: 251px;
  border: 1px solid #050101;
  display: block;
  border-radius: 8px;
  height: 444px;
  float: left;
}
</style>
