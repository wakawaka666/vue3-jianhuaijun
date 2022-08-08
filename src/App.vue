<template>
  <router-view></router-view>
</template>

<script>
import { onBeforeMount } from "vue";
export default {
  name: "App",
  setup() {
    onBeforeMount(() => {});
  },
};
</script>


<style>
/* 网站css样式重置 */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  /*font-family: "Source Han Sans CN","Source Han Serif SC","Times New Roman";*/
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
textarea {
  /*font-family: "Source Han Sans CN","Source Han Serif SC","Times New Roman";*/
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.clearfix {
  margin: 0px;
  padding: 0px;
  border: 0px;
  clear: both;
}
.top,
.head,
.nav,
.viewport,
.ppjj {
  width: 1207px;
  margin: 0px auto;
}


.banner {
  width: 1209px;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;

}
@media screen and (min-width: 300px) and (max-width: 1333px) {
  .ppjj {
    width: 715px;
  }
  .banner{
    width: 713px;
    height: 272px;
  }
  .banner img{
    width: 713px;
    height: 272px;
  }
}
/*侧边栏滚动条样式*/
/*滚动条样式*/
*::-webkit-scrollbar {
  width: 8px;
  height: 9px;
}
*::-webkit-scrollbar-thumb {
  /*滚动条小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
*::-webkit-scrollbar-track {
  /*滚动条轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
