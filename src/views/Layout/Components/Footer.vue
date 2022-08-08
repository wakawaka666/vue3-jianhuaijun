<template>
  <!-- 公共底部 -->
  <div class="footbg">
    <div class="foot">
      <div class="foot_left">
        <router-link to="/profit">加盟见淮君</router-link>
        <router-link to="/food">产品类目</router-link>
        <router-link to="/cooperation">物业招商合作</router-link>
        <router-link to="/contact">联系我们</router-link>
      </div>
      <div class="foot_mid">
        数据来源:
        截止2022年7月1日，成本或利润等数据不代表实质性承诺等，投资因物业条件、选址、市场环境、城市发展情况等不同而产生差异！
        <p>投资有风险，选择需谨慎！</p>
      </div>
      <div class="foot_right">
        <img class="ewm" src="@assets/img/bom_ewm.png" />
        <div class="lxdh">
          <img src="@assets/img/bom_icon01.png" />
          全国统一加盟热线
          <p>400-6635-277</p>
        </div>
      </div>
    </div>
  </div>
  <div class="bott">
    上海梅拉餐饮管理有限公司:上海市宝山区高逸路112-118号2、3、4、5、6、7幢
  </div>
  <!-- /公共底部 -->
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.footbg{
	width: 100%;
	height: 280px;
	background: #282828;
	margin-top: 26px;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		width: 100%;
		height: 360px;
		position: relative;
	}
}
.foot{
	width: 1207px;
	margin:0px auto;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		width: 100%;
	}
}
.foot_left{
	width: 465px;
	padding-top: 40px;
	float: left;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		width: 325px;
		padding-left: 20px;
	}
}
.foot_left a{
	display: block;
	float: left;
	margin-right: 52px;
	width: 150px;
	color: #fffefe;
	font-size: 16px;
	margin-top: 30px;
	line-height: 48px;
	border-bottom: 1px solid #626262;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		margin-right: 20px;
		width: 140px;
	}
}
.foot_mid{
	width: 365px;
	float: left;
	font-size: 12px;
	color: #898989;
	line-height: 24px;
	padding-top: 70px;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		float: unset;
		position: absolute;
		left: 18px;
		bottom: 10px;
		width: 100%;
		line-height: 1.5;
		width: 713px;
		
	}
}
.foot_mid p{
	margin-top: 30px;
}
.foot_right{
	float: right;
	width: 340px;
	padding-top: 70px;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		width: 340px;
		padding-right: 20px;
		padding-top: 45px;
	}
}
.ewm{
	float: left;
	width: 139px;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		float: right;
		padding-top: 15px;
	}
}
.lxdh{
	color:#fff;
	font-size: 16px;
	float: left;
	margin-left: 26px;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		margin-left: unset;
	}
}
.lxdh img{
	margin-top: 30px;
	display: block;
	margin-bottom: 8px;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		margin-top: unset;
		margin-bottom: 20px;
	}
}
.lxdh p{
	font-size: 26px;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		margin-top: 10px;
	}
}
.bott{
	background: #000000;
	height:87px;
	line-height: 87px;
	color: #898989;
	font-size: 14px;
	text-align: center;
	@media screen and (min-width: 300px) and (max-width: 1333px){
		font-size: 10px;
	}
}	
</style>
