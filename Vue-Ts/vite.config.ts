import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import Components from 'unplugin-vue-components/vite'

import path from 'path'
const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteExternalsPlugin({
      Creatar3d: 'Creatar3d',
      Cesium: 'Cesium'
    }),
    // 自动导入组件类型声明文件位置，默认根目录; false 关闭自动生成
    Components({
      dts: path.resolve(pathSrc, 'typings', 'components.d.ts')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
