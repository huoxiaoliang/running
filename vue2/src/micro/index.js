import {
  registerMicroApps,
  start,
  // addGlobalUncaughtErrorHandler,
} from "qiankun";
// import { getMicroappConfig } from '@/api/permission'

/**
 * 子应用获取菜单列表
 * @param {*} appKey
 * @returns
 */

let microApps = [
  {
    name: "app-grid",
    entry: "/app-grid",
    container: "#micro-app",
    activeRule: "/app/grid",
  },
];
// microApps.map((item) => {
//   item.props = { getRoutes }
// })

// await getMicroappConfig().then((res) => {
//   microApps = res.data
//   microApps.map((item) => {
//     item.props = { getRoutes }
//   })

// })

registerMicroApps(
  microApps
  // {
  // beforeLoad: () => {
  //   return Promise.resolve()
  // },
  // afterMount: () => {
  //   return Promise.resolve()
  // }
  // }
);

// addGlobalUncaughtErrorHandler((event) => {
//   const { message: msg } = event
//   if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
//     Message.error('请检查应用是否正常运行')
//   }
// })

export default start;
