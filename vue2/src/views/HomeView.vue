<template>
  <div class="home">
    <div id="globe-container" class="globe-container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as Creatar3d from "creatar3d-alpha";
import "creatar3d-alpha/dist/Creatar3d.css";

export default {
  name: "HomeView",

  mounted() {
    Creatar3d.ready().then(() => {
      new Creatar3d.Viewer(`globe-container`);
    });
  },
};
</script>
<style>
.globe-container {
  height: 100%;
  overflow: hidden;
}
</style>
