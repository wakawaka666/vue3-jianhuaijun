<template>
    <!-- banner -->
<div class="banner"><img src="@assets/img/hzgy_banner.jpg"></div>
<!--合作共赢-->
<div class="hzgy">
    <!--见淮君优势-->
    <h1><img src="@assets/img/yous_tit.png"></h1>
    <div class="yous">
        <div class="yous_sam"><img src="@assets/img/ys_pic01.jpg"><p>中央工厂制作</p></div>
        <div class="yous_sam"><img src="@assets/img/ys_pic02.jpg"><p>合作优质供应商</p></div>
        <div class="yous_sam"><img src="@assets/img/ys_pic03.jpg"><p>高效冷链物流</p></div>
    </div>
    <!--为什么选择见淮君-->
    <div class="why">
        <h2 class="mgt80"><img src="@assets/img/why.png"></h2>
        <ul>
            <li><p>专注淮南牛肉粉丝汤<br>启航餐饮创富蓝海</p><img src="@assets/img/why_01.jpg"></li>
            <li><p>结合门店消费大数据和市场<br>新型品类，不断研发产品</p><img src="@assets/img/why_02.jpg"></li>
            <li><p>无界餐饮模式-堂食+外卖+<br>外带三种营销方式</p><img src="@assets/img/why_03.jpg"></li>
            <li><p>轻松当老板，我们将<br>为您的加入提供帮助</p><img src="@assets/img/why_04.jpg"></li>
        </ul>
    </div>
    <!--13支持服务-->
    <div class="zcfw">
        <h2 class="mgt80"><img src="@assets/img/zcfw.png"></h2>
        <ul>
            <li>01 资讯服务</li>
            <img src="@assets/img/arrow_right.png" style="width:33px;height:34px;">
            <li>02 品牌支持</li>
            <img src="@assets/img/arrow_right.png" style="width:33px;height:34px;">

            <li>03 活动宣传</li>
            <img src="@assets/img/arrow_right.png" style="width:33px;height:34px;">

            <li>04 产品服务</li>
            <div style="width:100%;">
                <img src="@assets/img/arrow_down.png" style="width:33px;height:34px;float:right;margin:20px 90px 20px 0">
            </div>
            

            <li>09 设备支持</li>
            <img src="@assets/img/arr_left.png" style="width:33px;height:34px;">

            <li>08 技术支持</li>
            <img src="@assets/img/arr_left.png" style="width:33px;height:34px;">

            <li>07 原料支持</li>
            <img src="@assets/img/arr_left.png" style="width:33px;height:34px;">

            <li>06 核算指导</li>
             <div style="width:100%;">
                <img src="@assets/img/arrow_down.png" style="width:33px;height:34px;float:left;margin:20px 0 20px 90px">
            </div>

            <li>05 运营指导</li>
            <img src="@assets/img/arrow_right.png" style="width:33px;height:34px;">

            <li>10 选址支持</li>
            <img src="@assets/img/arrow_right.png" style="width:33px;height:34px;">

            <li>11 装修设计</li>
            <img src="@assets/img/arrow_right.png" style="width:33px;height:34px;">

            <li>12 人员招募</li>
            <div style="width:100%;">
                <img src="@assets/img/arrow_down.png" style="width:33px;height:34px;float:right;margin:20px 90px 20px 0">
            </div>

            <li style="margin-left: calc(100% - 214px);">13 开业支持</li>
        </ul>
    </div>
</div>
<!--/合作共赢-->
</template>

<script>

export default({
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
/*合作共赢*/
.banner {
    width: 1209px;
    margin: 0px auto;
    margin-top: 20px;
    text-align: center;
}
.hzgy{
	width: 1207px;
	margin: 0px auto;
}
.yous{
	width: 100%;
	overflow: hidden;
}
.hzgy h1{
	margin-top: 80px;
	margin-bottom: 38px;}
.yous_sam{
	width: 385px;
	float: left;
	margin-left: 26px;
}
.yous_sam:first-child{
	margin-left: 0px;
}
.yous_sam img{	
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}
.yous_sam p{
	color: #1f1f1f;
	font-size: 18px;
	height: 59px;
	line-height: 59px;
	text-align: center;
	background: #f2f2f2;
}
.hzgy .mgt80{
	margin-top: 80px;
}
.why{
    overflow: hidden;
}
.why ul{
	margin-top: 125px;
}
.why p{
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
}
.why ul li{
	position: relative;
	width: 290px;
	float: left;
	margin-left: 15px;
}
.why ul li:first-child{
	margin-left: 0px;
}
.why li img{
	position: absolute;
	width: 125px;
	height: 125px;
	border-radius: 65px;
	border: 2px solid #000;
	z-index: 999;
	top:-80px;
	left:80px;
}
.zcfw .mgt80{
    margin: 110px 0 85px 0 ;
}
.zcfw ul{
    overflow: hidden;
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    overflow: auto;
}
.zcfw ul li{
    float: left;
    text-align: center;
    line-height: 104px;
    color: #fff;
    width: 214px;
    height: 104px;
}
.zcfw ul li:nth-of-type(odd){
    background: url('~@assets/img/zcfw_bg_red.png') no-repeat;
}
.zcfw ul li:nth-of-type(even){
    background: url('~@assets/img/zcfw_bg_gray.png') no-repeat;
    color: black;
}
</style>
