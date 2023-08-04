<script setup lang="ts">
import Creatar3d from 'Creatar3d'
import { onMounted, ref } from 'vue'
const emit = defineEmits<{
  mapEmit: [map: Creatar3d.Viewer]
}>()

const viewerRef = ref<HTMLElement>()
let map: Creatar3d.Viewer | null = null
onMounted(() => {
  map = new Creatar3d.Viewer('globe-container', {})
  map.setOptions({
    widgetController: {
      enableImagerySwitcher: true
    } as Creatar3d.WidgetOption.Options
  })
  emit('mapEmit', map)
})
</script>

<template>
  <div class="map" id="globe-container" ref="viewerRef"></div>
  <slot></slot>
</template>

<style scoped>
.map {
  height: 100vh;
  width: 100vw;
}
</style>
