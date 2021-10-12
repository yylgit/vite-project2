import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
  /**
   * // 这里双协议的时候有bug  改成 ://  前面加了 /://
   * 
   * 本地启动的时候统一加了相对路径 /sff/123/
   * 
   * 图片自动加了base路径 和hash值
   */
  // base: "https://static.58.com/sff/123/",  对标publicPath
  /**
   * 设置mode test后  vite 和vite build  的import.meta.env.DEV都是true import.meta.env.PROD都是false
   * 设置 mode production后  vite  的 import.meta.env.PROD也是true  所以 真的就是和mode相关和怎么启动无关
   * 
   * 所以mode应该不会内置什么不同的打包 只是单纯的环境变量
   */
  mode: 'production', // serve 时默认 'development'，build 时默认 'production'  可以自行指定加载其他 环境变量
  build: {
    manifest: false,
    minify: false
  },
  
  define: {
    VITE_DEFINE: JSON.stringify('mydefine')
  },
  plugins: [
    vue(), 
    legacy({
      targets:  [
        "> 1%",
        "last 2 versions",
        "not ie <= 8"
      ],
      polyfills: true
    })
  ]
})
