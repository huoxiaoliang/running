const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {},
      fallback: {
        //其他的如果不启用可以用 keyname :false，例如：crypto:false,
        http: require.resolve("stream-http"),
        url: require.resolve("url/"),
        zlib: require.resolve("browserify-zlib"),
        https: require.resolve("https-browserify"),
      },
    },
    module: {
      //解决Critical dependency: require function is used in a way in which dependencies cannot be statically extracted的问题
      unknownContextCritical: false,
      //解决the request of a dependency is an expression
      exprContextCritical: false,
    },
    plugins: [new NodePolyfillPlugin()],
  },
  chainWebpack: (config) => {
    config.plugin("copy").use(CopyWebpackPlugin, [
      {
        patterns: [
          {
            from: path.join("./node_modules", "creatar3d-alpha/dist/cesium"),
            to: "sdk/cesium",
          },
        ],
      },
    ]);
  },
  // 配置转发代理
  devServer: {
    proxy: {
      "/app-grid": {
        target: "http://localhost:5001",
        // pathRewrite: {
        //   "^/app-grid": "",
        // },
      },
      "/grid_grpc": {
        target: "http://192.168.1.158:8299",
        ws: false,
        pathRewrite: {
          "^/grid_grpc": "",
        },
      },
    },
  },
});
