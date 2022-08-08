<template>
  <!-- banner -->
  <div class="banner"><img src="@assets/img/hzgy_banner.jpg" /></div>
  <!--合作共赢-->
  <div class="hzgy">
    <!--见淮君优势-->
    <h1><img src="@assets/img/yous_tit.png" /></h1>
    <div class="yous">
      <div class="yous_sam">
        <img src="@assets/img/ys_pic01.jpg" />
        <p>中央工厂制作</p>
      </div>
      <div class="yous_sam">
        <img src="@assets/img/ys_pic02.jpg" />
        <p>合作优质供应商</p>
      </div>
      <div class="yous_sam">
        <img src="@assets/img/ys_pic03.jpg" />
        <p>高效冷链物流</p>
      </div>
    </div>
    <!--为什么选择见淮君-->
    <div class="why">
      <h2 class="mgt80"><img src="@assets/img/why.png" /></h2>
      <ul>
        <li>
          <p>专注淮南牛肉粉丝汤<br />启航餐饮创富蓝海</p>
          <img src="@assets/img/why_01.jpg" />
        </li>
        <li>
          <p>结合门店消费大数据和市场<br />新型品类，不断研发产品</p>
          <img src="@assets/img/why_02.jpg" />
        </li>
        <li>
          <p>无界餐饮模式-堂食+外卖+<br />外带三种营销方式</p>
          <img src="@assets/img/why_03.jpg" />
        </li>
        <li>
          <p>轻松当老板，我们将<br />为您的加入提供帮助</p>
          <img src="@assets/img/why_04.jpg" />
        </li>
      </ul>
    </div>
    <!--13支持服务-->
    <div class="zcfw">
      <h2 class="mgt80"><img src="@assets/img/zcfw.png" /></h2>
      <ul>
        <li>01 资讯服务</li>
        <img src="@assets/img/arrow_right.png" class="arrow-icon" />
        <li>02 品牌支持</li>
        <img src="@assets/img/arrow_right.png" class="arrow-icon" />

        <li>03 活动宣传</li>
        <img src="@assets/img/arrow_right.png" class="arrow-icon" />

        <li>04 产品服务</li>
        <div style="width: 100%">
          <img src="@assets/img/arrow_down.png" class="arrow-icon-right" />
        </div>

        <li>08 技术支持</li>
        <img src="@assets/img/arr_left.png" class="arrow-icon" />

        <li>07 原料支持</li>
        <img src="@assets/img/arr_left.png" class="arrow-icon" />

        <li>06 核算指导</li>
        <img src="@assets/img/arr_left.png" class="arrow-icon" />

        <li>05 运营指导</li>
        <div style="width: 100%">
          <img src="@assets/img/arrow_down.png" class="arrow-icon-left" />
        </div>

        <li>09 设备支持</li>
        <img src="@assets/img/arrow_right.png" class="arrow-icon" />

        <li>10 选址支持</li>
        <img src="@assets/img/arrow_right.png" class="arrow-icon" />

        <li>11 装修设计</li>
        <img src="@assets/img/arrow_right.png" class="arrow-icon" />

        <li>12 人员招募</li>
        <div style="width: 100%">
          <img src="@assets/img/arrow_down.png" class="arrow-icon-right" />
        </div>

        <li class="last-arrow">13 开业支持</li>
      </ul>
    </div>
  </div>
  <!--/合作共赢-->
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
/*合作共赢*/
.banner {
  width: 1209px;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 715px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
.hzgy {
  width: 1207px;
  margin: 0px auto;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 715px;
    margin: 0 auto;
  }
}
.yous {
  width: 100%;
  overflow: hidden;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 715px;
    display: flex;
    justify-content: space-between;
  }
}
.hzgy h1 {
  margin-top: 80px;
  margin-bottom: 38px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin: 30px 0 36px 0;
    height: 36px;
    display: flex;
    justify-content: center;
    img {
      height: 36px;
    }
  }
}
.yous_sam {
  width: 385px;
  float: left;
  margin-left: 26px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 226px;
    float: unset;
    margin-left: unset;
    display: flex;
    flex-direction: column;
  }
}
.yous_sam:first-child {
  margin-left: 0px;
}
.yous_sam img {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 226px;
    height: 150px;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
  }
}
.yous_sam p {
  color: #1f1f1f;
  font-size: 18px;
  height: 59px;
  line-height: 59px;
  text-align: center;
  background: #f2f2f2;
}
.mgt80 {
  margin-top: 80px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    img {
      height: 36px;
    }
  }
}
.why {
  overflow: hidden;
}
.why ul {
  margin-top: 125px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;
  }
}
.why p {
  width: 282px;
  height: 130px;
  padding-top: 62px;
  line-height: 32px;
  background: #b41719;
  // border: 2px solid #000;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    
    width: 346px;
  }
}
.why ul li {
  position: relative;
  width: 290px;
  float: left;
  margin-left: 15px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin-left: unset;
    margin-top: 125px;
    margin-left: unset;
    width: 346px;
    float: unset;
  }
}
.why ul li:first-child {
  margin-left: 0px;
}
.why li img {
  position: absolute;
  width: 125px;
  height: 125px;
  border-radius: 65px;
  border: 2px solid #000;
  z-index: 999;
  top: -80px;
  left: 80px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    left: 50%;
    transform: translateX(-50%);
  }
}
.zcfw .mgt80 {
  margin: 110px 0 85px 0;
}
.zcfw ul {
  overflow: hidden;
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
}
.zcfw ul li {
  float: left;
  text-align: center;
  line-height: 104px;
  color: #fff;
  width: 214px;
  height: 104px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 136px;
    height: 61px;
    line-height: 61px;
    font-size: 18px;
  }
}
.arrow-icon {
  width: 33px;
  height: 34px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 20px;
    height: 20px;
  }
}
.arrow-icon-right {
  width: 33px;
  height: 34px;
  float: right;
  margin: 20px 90px 20px 0;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 20px;
    height: 20px;
    margin: 20px 50px 20px 0;
  }
}
.arrow-icon-left {
  width: 20px;
  height: 20px;
  float: left;
  margin: 20px 0 20px 90px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 20px;
    height: 20px;
    margin: 20px 0 20px 50px;
  }
}
.last-arrow {
  margin-left: calc(100% - 214px);
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin-left: 580px;
  }
}
.zcfw ul li:nth-of-type(odd) {
  background-image: url("~@assets/img/zcfw_bg_red.png");
  background-size: 100% 100%;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    background: unset;
    background-image: url("~@assets/img/zcfw_bg_red.png");
    background-size: 100% 100%;
  }
}
.zcfw ul li:nth-of-type(even) {
  background-image: url("~@assets/img/zcfw_bg_gray.png");
  background-size: 100% 100%;
  color: black;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    background: unset;
    background-image: url("~@assets/img/zcfw_bg_gray.png");
    background-size: 100% 100%;
  }
}
</style>
