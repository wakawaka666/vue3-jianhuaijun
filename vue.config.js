const path = require('path');
// 是否为生产环境
const isProduction = process.env.NODE_ENV === 'production';
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 代码压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


// externals
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  'element-plus': 'ElementPlus',
  axios: 'axios',
  '@vuemap/vue-amap': 'VueAMap',
  'wow': 'WOW'
}
// CDN 外链，会插入到 index.html 中
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: [
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/element-plus/index.css',
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/vue-amap/style.css'
    ],
    js: [
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/vue.global.min.js',
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/vue-router.global.min.js',
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/vuex.global.min.js',
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/element-plus/index.full.min.js',
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/axios.min.js',
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/vue-amap/index.min.js',
      'https://static-1252564066.cos.ap-nanjing.myqcloud.com/lib/wow.min.js'
    ]
    // css: [
    //   'https://cdn.jsdelivr.net/npm/element-plus@2.2.0/dist/index.css',
    //   'https://cdn.jsdelivr.net/npm/@vuemap/vue-amap@1.1.6/dist/style.css'
    // ],
    // js: [
    //   'https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.min.js',
    //   'https://cdn.jsdelivr.net/npm/vue-router@4.1.1/dist/vue-router.global.min.js',
    //   'https://cdn.jsdelivr.net/npm/vuex@4.0.0/dist/vuex.global.min.js',
    //   'https://cdn.jsdelivr.net/npm/element-plus@2.2.0/dist/index.full.min.js',
    //   'https://cdn.jsdelivr.net/npm/axios@0.27.2/dist/axios.min.js',
    //   'https://cdn.jsdelivr.net/npm/@vuemap/vue-amap@1.1.6/dist/index.min.js',
    //   'https://cdn.jsdelivr.net/npm/wow.js@1.2.2/dist/wow.min.js'
    // ]
  }
}
module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  //不需要生产环境的 source map加速生产环境构建，大大减小打包后的体积
  productionSourceMap: false,
  //解决 Invalid Host header问题（服务器域名访问出现的问题），
  //即 nginx代理但无法访问，跳过vue的host检查
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/devApi": {
        target: "http://139.196.192.147:99/api",
        changeOrigin: true,
        pathRewrite: {
          "^/devApi": ""
        }
      }
    },
  },
  //将 build 后的文件输出到 dist 目录
  outputDir: 'dist',
  lintOnSave: false,
  configureWebpack: config => {
    // 开发生产共同配置别名
    Object.assign(config.resolve, {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views'),
        '@layout': path.resolve(__dirname, './src/views/Layout'),
        '@api': path.resolve(__dirname, './src/api'),
      }
    })
    // 为生产环境修改配置...
    if (isProduction) {
      //gzip压缩
      const productionGzipExtensions = ['html', 'js', 'css']
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10k
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )
      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            //生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      // externals
      config.externals = externals
      // 公共代码抽离
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'all',
              test: /node_modules/,
              name: 'vendor',
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 100
            },
            common: {
              chunks: 'all',
              test: /[\\/]src[\\/]js[\\/]/,
              name: 'common',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 60
            },
            styles: {
              name: 'styles',
              test: /\.(sa|sc|c)ss$/,
              chunks: 'all',
              enforce: true
            },
            runtimeChunk: {
              name: 'manifest'
            }
          }
        }
      }
    }
  },
  chainWebpack: config => {
    /**
     * 添加 CDN 参数到 htmlWebpackPlugin 配置中
     */
    config.plugin('html').tap(args => {
      if (isProduction) {
        // CDN加载模块包
        args[0].cdn = cdn.build
      } else {
        args[0].cdn = cdn.dev
      }
      return args
    })
  }
}