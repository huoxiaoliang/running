<script setup lang="ts">
import Creatar3d from 'Creatar3d'
import { onMounted } from 'vue'
onMounted(() => {
  const map = new Creatar3d.Viewer(`globe-container`, {})
  map.setOptions({
    widgetController: {
      enableImagerySwitcher: true
    } as Creatar3d.WidgetOption.Options
  })
})
</script>

<template>
  <div class="map" id="globe-container"></div>
</template>

<style scoped>
.map {
  height: 100vh;
}
</style>
