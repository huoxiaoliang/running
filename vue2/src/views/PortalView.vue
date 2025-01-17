<template>
  <div id="micro-app" class="micro-app" />
</template>

<script>
import startQiankun from "@/micro";

export default {
  name: "PortalView",
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      // const request = (url) => {
      //   return fetch(url, {
      //     headers: { "X-Web-Base": "platform-webbase-web" },
      //   });
      // };
      startQiankun({
        prefetch: "all",
        sandbox: {
          // strictStyleIsolation: true,
          // experimentalStyleIsolation: true,
        },
      }); // { fetch: request }
    }
  },
};
</script>

<style scoped>
.micro-app {
  position: relative;
  height: 500px;
}
</style>
