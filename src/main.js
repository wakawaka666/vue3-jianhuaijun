import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import VueAMap, {initAMapApiLoader} from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'
initAMapApiLoader({
  key: 'dcec57ebf3d206704d2a091875c7c548'
})
import 'animate.css';
import 'animate.css/animate.compat.css'

const app = createApp(App)
// 挂载navigator至原型
app.config.globalProperties.navigator = navigator
app.use(store)
    .use(router)
    .use(lazyPlugin, {
        loading: require('@/assets/img/loading.png'), // 图片加载时默认图片
        error: require('@/assets/img/loadingerr.png')// 图片加载失败时默认图片
      })   //图片懒加载
    .use(ElementPlus, {
        locale  //element-plus 使用中文，将自动设置 Day.js 的国际化设置为 'zh-cn'
    })
    .use(VueAMap)
    .mount('#app')


