<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Creatar3d from 'Creatar3d'
import Map3d from '../components/map3d/Map-3d.vue'

const map3d = ref<typeof Map3d>()
onMounted(() => {})

function mapEmit(map: Creatar3d.Viewer) {
  console.log(map)
  map.addLayer(new Creatar3d.ImageLayer({ type: Creatar3d.ImageryType.TDT, style: 'vec_w' } as any))
}
</script>

<template>
  <Map3d ref="map3d" @map-emit="mapEmit">
    <TimeLine />
  </Map3d>
</template>
