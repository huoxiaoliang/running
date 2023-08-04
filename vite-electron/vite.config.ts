import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import { viteExternalsPlugin } from "vite-plugin-externals";
import Components from "unplugin-vue-components/vite";

import path from "path";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts",
      },
      {
        entry: "electron/preload.ts",
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload();
        },
      },
    ]),
    renderer(),
    viteExternalsPlugin({
      Creatar3d: "Creatar3d",
      Cesium: "Cesium",
    }),
    // 自动导入组件类型声明文件位置，默认根目录; false 关闭自动生成
    Components({
      dts: path.resolve(pathSrc, "typings", "components.d.ts"),
    }),
  ],
});
