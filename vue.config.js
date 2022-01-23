const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  // 设置打包路径
  outputDir: './build',
  // .配置别名
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/component'
  //     }
  //   }
  // }
  // 2.配置别名
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  },
  // 配置element-plus
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  // 由于浏览器有跨域限制,这里cli 工具提供了 启动本地代理服务器 请求
  devServer: {
    open: false, // 是否打开浏览器;
    hotOnly: true, // 是否热更新;
    // 配置代理（多个dialing）
    proxy: {
      '/api': {
        // 路径中有 /api 的请求都会走这个代理 , 可以自己定义一个,下面移除即可
        target: 'http://123.207.32.32:8000', // 目标代理接口地址,实际跨域要访问的接口,这个地址会替换掉 axios.defaults.baseURL
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        ws: true, // 是否启用  websockets;
        pathRewrite: {
          // 去掉 路径中的  /api  的这一截
          '^/api': ''
        }
      },
      '/test': {
        target: '测试地址', // 目标代理接口地址,实际跨域要访问的接口,这个地址会替换掉 axios.defaults.baseURL
        secure: false,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/test': ''
        }
      }
    }
  }
}
