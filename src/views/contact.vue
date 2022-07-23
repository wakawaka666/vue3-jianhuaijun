<template>
  <div class="banner"><img src="@assets/img/lxwm_banner.png" /></div>
  <div class="ppjj">
    <img class="title-img" src="@assets/img/xsfs_title.png" alt="" />
    <div class="jhjys-wrap">
      <div class="jhjys-item">
        <div class="jhjys-title">加盟合作</div>
        <div class="content-padding">
          <label style="width: 25%">我想了解：</label>
          <br />
          <ul>
            <li
              v-for="(item, index) in checkboxList"
              :key="item"
              :class="formList1.liaoJieType.includes(checkboxList[index]) ? 'active-checkbox' : ''"
              @click="check(index)"
            >
              {{ item }}
            </li>
          </ul>
          <label style="vertical-align: top">其他：</label
          ><input
            type="text-area"
            v-model="formList1.content"
            placeholder="在这里输入您想知道的问题，我们会尽快与您取得联系"
          />
          <br />
          <label>* 姓名：</label><input type="text" v-model="formList1.name" placeholder="请输入姓名" />
          <br />
          <label>* 手机：</label><input type="text" v-model="formList1.mobile" placeholder="请输入手机" />
          <input type="button" value="提 交" @click="submit1" />
        </div>
      </div>
      <div class="jhjys-item" style="border: 2x solid #000000">
        <div class="jhjys-title" style="border-bottom: 1px solid #000000">
          意见反馈
        </div>
        <div class="content-padding">
          <label style="vertical-align: top">* 留言内容：</label
          ><input
            type="text-area"
            v-model="formList2.content"
            placeholder="在这里输入您想知道的问题，我们会尽快与您取得联系"
          />
          <br />
          <label>* 姓名：</label
          ><input
            type="text"
            v-model="formList2.name"
            placeholder="请输入姓名"
          />
          <br />
          <label>* 手机：</label
          ><input
            type="text"
            v-model="formList2.mobile"
            placeholder="请输入手机"
          />
          <label>* 邮箱：</label
          ><input
            type="text"
            v-model="formList2.email"
            placeholder="请输入邮箱"
          />
          <input type="button" value="提 交" @click="submit2" />
        </div>
      </div>
    </div>
    <img class="title-img" src="@assets/img/gswz_title.png" alt="" />
    <div class="amap-content">
      <el-amap :center="amapConfig.center" :zoom="amapConfig.zoom">
        <el-amap-marker
          :position="amapConfig.center"
          :label="amapConfig.label"
        ></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { Feedback,Cooperation } from "@api/api.js";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const checkboxList = reactive([
      "投资金额",
      "回收周期",
      "加盟费",
      "加盟支持",
      "选址评估",
      "证照办理",
    ]);
    
    const check = (i) => {
      var idx = formList1.liaoJieType.indexOf(checkboxList[i]);
      //如果已经选中了，那就取消选中，如果没有，则选中
      if (idx > -1) {
        formList1.liaoJieType.splice(idx, 1);
      } else {
        formList1.liaoJieType.push(checkboxList[i]);
      }
    };
    const formList1 = reactive({
      formId: 3,
      liaoJieType: []
    })
    const submit1 = () => {
      Cooperation(formList1).then(response => {
        console.log(response);
        ElMessage.success("提交成功");
      })
    }
    const formList2 = reactive({
      formId: 2,
    });
    const submit2 = () => {
      Feedback(formList2).then((response) => {
        console.log(response);
        ElMessage.success("提交成功");
      });
    };

    const amapConfig = reactive({
      zoom: 16,
      radius: 100,
      center: [121.48804,31.324363],
      label: {
        content: "上海梅拉餐饮有限公司",
        offset: [10, 12],
      },
    });
    return { checkboxList, amapConfig,formList1, formList2,submit1, submit2, check };
  },
};
</script>

<style lang="scss" scoped>
.title-img {
  height: 36px;
  padding: 50px 0 40px 0;
}
.jhjys-wrap {
  display: flex;
  justify-content: space-between;
}
.jhjys-item {
  width: 48%;
  border-radius: 10px;
  overflow: hidden;
}
.jhjys-title {
  font-size: 28px;
  font-weight: bold;
  padding: 22px 0 22px 50px;
  border-bottom: 1px solid #ffffff;
  background-color: #b41719;
  color: #fff;
}
.content-padding {
  padding: 42px 60px;
  background-color: #b41719;
}
.content-padding label {
  color: #fff;
  font-size: 18px;
  width: 15%;
  display: inline-block;
  text-align: right;
}
.jhjys-item:last-child {
  border: 2px solid #000000;
}
.jhjys-item:last-child .content-padding {
  background: #fff;
}
.jhjys-item:last-child .content-padding label {
  width: 24%;
  color: #000;
}
.jhjys-item:last-child .content-padding input {
  width: 72%;
  color: #000;
}
.jhjys-item:last-child .content-padding input::-webkit-input-placeholder{
  color: #968C8C;
}
.content-padding ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
    overflow: auto;
    justify-content: unset !important;
    margin-top: 20px;
}
.content-padding ul li{
  width: 66px;
  background: #B41719;
  color: #fff;
  padding: 14px 21px;
  cursor: pointer;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 12px;
  margin-right: 4px;
}
.active-checkbox{
  color: #b41719 !important;
  background: #fff !important;
}
.content-padding input {
  width: 82%;
  margin-bottom: 30px;
}
.content-padding input::-webkit-input-placeholder{
  color: #EFEFEF;
}
.content-padding input[type="text"] {
  border: none;
  border-bottom: 1px solid #d2d2d2;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #b9b7b7;
  background: transparent;
  color: #fff;
}
.content-padding input[type="text-area"] {
  border: none;
  border-bottom: 1px solid #d2d2d2;
  height: 108px;
  border-radius: 4px;
  border: 1px solid #b9b7b7;
  background: transparent;
  color: #fff;
}
.jhjys-item:last-child .content-padding input[type="button"] {
  background: #b41719;
  color: #fff;
}
.content-padding input[type="button"] {
  background: #fff;
  color: #b41719;
  font-size: 20px;
  cursor: pointer;
  border: none;
  width: 276px;
  height: 50px;
  border-radius: 25px;
  margin-top: 15px;
  margin-left: calc(50% - 138px);
}
.content-padding ul {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
// .content-padding ul li{
//     font-size: ;
// }
.amap-content {
  width: 1204px;
  height: 506px;
  border-radius: 8px;
}

</style>
