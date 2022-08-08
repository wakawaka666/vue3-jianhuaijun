<template>
  <div class="banner">
    <img src="@assets/img/ylms_banner.png" alt="" />
  </div>
  <div class="ppjj">
    <img class="title-img" src="@assets/img/xsfs_title.png" alt="" />
    <div class="xsfs-wrap">
      <div class="xsfs-item">
        <img src="@assets/img/yl_icon01.png" alt="" />
        <p>堂食</p>
        <span>覆盖90%以上的不同年龄段客户群体</span>
      </div>
      <div class="xsfs-item">
        <img src="@assets/img/yl_icon02.png" alt="" />
        <p>外带</p>
        <span>覆盖不同年龄段客户群体</span>
      </div>
      <div class="xsfs-item">
        <img src="@assets/img/yl_icon03.png" alt="" />
        <p>外卖</p>
        <span>专业外卖营销团队运营操盘<br />门店外卖排名位列前茅</span>
      </div>
    </div>
    <img class="title-img" src="@assets/img/tz_title.png" alt="" />
  </div>
  <div class="tz-wrap ppjj">
    <table>
      <thead>
        <tr>
          <td>一次性投入<p>（预估）</p></td>
          <td>A类店<p>（特通门店）</p></td>
          <td>B类店<p>（商场店）</p></td>
          <td>C类店<p>（街边店）</p></td>
          <td>D类店<p>（美广店）</p></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>品牌使用费</td>
          <td>3.98万</td>
          <td>3.98万</td>
          <td>3.98万</td>
          <td>3.98万</td>
        </tr>
        <tr>
          <td>保证金</td>
          <td>1万</td>
          <td>1万</td>
          <td>1万</td>
          <td>1万</td>
        </tr>
        <tr>
          <td>初期物料</td>
          <td>2万</td>
          <td>2万</td>
          <td>2万</td>
          <td>2万</td>
        </tr>
        <tr>
          <td>装修与集成</td>
          <td>10.5万</td>
          <td>9.5万</td>
          <td>8.5万</td>
          <td>3万</td>
        </tr>
        <tr>
          <td>自购物料</td>
          <td>1万</td>
          <td>1万</td>
          <td>0.8万</td>
          <td>0.6万</td>
        </tr>
        <tr>
          <td>合计</td>
          <td>21.98万</td>
          <td>20.98万</td>
          <td>19.78万</td>
          <td>14.08万</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <td colspan="5">
            *门店装修实际费用以工程报价为准
          </td>
        </tr>
      </thead>
    </table>
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
  </div>
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
.title-img {
  height: 36px;
  padding: 50px 0 40px 0;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    height: 37px;
  }
}
.title-img:nth-child(1){
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin-left: calc(50% - 250px);
  }
}
.title-img:nth-child(3){
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin-left: calc(50% - 192px);
  }
}
.xsfs-wrap {
  display: flex;
  justify-content: space-around;
}
.xsfs-item {
  width: 28%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #000000;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    border: unset;
  }
}
.xsfs-item img {
  height: 112px;
  padding-top: 40px;
}
.xsfs-item p {
  font-size: 26px;
  font-weight: 400;
  margin: 55px 0 25px 0;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin: 28px 0 25px 0;
  }
}
.xsfs-item span {
  font-size: 18px;
  color: #565656;
  text-align: center;
  padding-bottom: 91px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    padding-bottom: 55px;
  }
}
.tz-wrap {
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    display: unset;
  }
}
table {
  width: 70%;
  border-spacing: 2px;
  border-color: grey;
  border-radius: 10px;
  border: 6px solid #b41719;
   @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 713px;
    margin: 0 auto;
  }
}
th,td {
  border: 1px solid #fff;
}
thead:first-child tr td {
  text-align: center;
  padding: 30px 0;
  background-color: #fff;
  color: #b41719;
  font-size: 26px;
  font-weight: bold;
  border-bottom: 2px solid #fff;
}
thead:first-child tr td p{
  font-size: 22px;
  margin-top: 6px;
}
tbody tr td {
  // width: 24%;
  text-align: center;
  font-size: 22px;
  padding: 26px 0;
  background-color: #b41719;
  color: #fff;
}
thead:last-child tr td {
  color: #fff;
  background-color: #b41719;
  font-size: 22px;
  padding: 26px 30px;
  line-height: 28px;
  text-align: left;
  font-weight: bold;
  border-top: 2px solid #fff;
}
.ppjj_right {
  float: right;
  width: 334px;
  border: 2px solid #000;
  border-radius: 7px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 713px;
    margin: 0 auto;
    float: unset;
    margin-top: 26px;
  }
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
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    margin-bottom: 28px;
  }
}
.touzi ul li label {
  width: 65px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    font-size: 24px;
  }
}
.touzi ul li input[type="text"] {
  border: none;
  border-bottom: 1px solid #d2d2d2;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 500px;
  }
}
.touzi input.telep[type="text"] {
  width: 275px;
  height: 40px;
  border: 1px solid #d2d2d2;
  border-radius: 3px;
   @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 400px;
  }
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
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    width: 318px;
    height: 57px;
    margin-left: calc(50% - 159px);
    font-size: 30px;
  }
}
.touzi p {
  padding: 27px;
  color: #636060;
  font-size: 14px;
  line-height: 26px;
  @media screen and (min-width: 300px) and (max-width: 1333px) {
    line-height: 35px;
    font-size: 20px;
  }
}
.touzi p span {
  color: #000;
}
</style>
