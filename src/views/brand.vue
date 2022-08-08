<template>
  <div class="banner">
    <img src="@assets/img/ppjs_banner.png" alt="" />
  </div>
  <div class="jhjbjw-wrap ppjj">
    <div class="jhjbjw-left">
      <img src="@assets/img/jhjbj_title.png" alt="" />
      <p>
        见淮君始创于2018年，立足于淮南牛肉汤+小吃的产品与体验升级，坚持原味正宗，为喜好“这一口牛肉汤”的人带来记忆中的味道。
      </p>
      <p>
        见淮君淮南牛肉汤建立“线上电商新零售+外卖O2O+线下连锁体验店”三位一体的新餐饮数字化模型，全渠道、全场景，沉浸式消费体验。见淮君牛肉汤坚持打造产品理念“好粉”“好饭”“好串”，短时间内在苏州开设10余家线下直营店，建立起“淮南牛肉汤=见淮君”的品牌心智，逐步成为业界国内专家品牌，好评如潮。
      </p>
    </div>
    <div class="jhjbjw-right">
      <img src="@assets/img/hfhfhc.png" alt="" />
    </div>
    <div class="jhjbjw-right-mobile">
      <img src="@assets/img/hfhfhc_mobile.png" alt="" />
    </div>
  </div>
  <div class="jhjry-bg">
    <div class="ppjj">
      <img src="@assets/img/jhjry_title.png" alt="" />
      <div class="jhjry-wrap">
        <div class="jhjry-item">
          <img src="@assets/img/jhjry01.png" alt="" />
          <div>年度热门餐厅</div>
        </div>
        <div class="jhjry-item">
          <img src="@assets/img/jhjry02.png" alt="" />
          <div>人气美食频道推荐</div>
        </div>
        <div class="jhjry-item">
          <img src="@assets/img/jhjry03.png" alt="" />
          <div>2000年古法传承延续</div>
        </div>
        <div class="jhjry-item">
          <img src="@assets/img/jhjry04.png" alt="" />
          <div>地道淮南味，飘香两千年</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.jhjbjw-wrap {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: unset;
  }
}
.jhjbjw-left {
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 713px;
    margin: 0 auto;
    margin-top: 30px;
  }
}
.jhjbjw-left img {
  width: 186px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 216px;
    margin-bottom: 36px;
  }
}
.jhjbjw-left p {
  font-size: 18px;
  line-height: 40px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    font-size: 20px;
  }
}
.jhjbjw-right {
  width: 27%;
  height: 336px;
  background-color: #b41719;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: none;
  }
}
.jhjbjw-right-mobile {
  display: none;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: block;
    width: 713px;
    height: 142px;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 25px;
    background: #b41719;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 600px;
    }
  }
}
.jhjry-bg {
  width: 100%;
  // background: #b41719;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    // background: rgb(202,209,225);
  }
}
.jhjry-wrap {
  margin-top: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin-top: 30px;
  }
}
.jhjry-item {
  width: 45%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 345px;
    height: unset;
    flex-direction: column;
  }
}
.jhjry-item img {
  width: 33%;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: unset;
    height: 190px;
  }
}
.jhjry-item div {
  width: 68%;
  height: 37px;
  background: #ab1f24;
  color: #fff;
  margin-top: 3%;
  line-height: 37px;
  text-indent: 30px;
  transform: translateX(-10px);
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 345px;
    font-size: 22px;
    margin-top: unset;
    transform: unset;
    text-indent: unset;
    text-align: center;
    padding: 15px 0;
  }
}
.ppjj > img {
  padding-top: 50px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    padding-top: 27px;
    width: 217px;
  }
}
</style>
