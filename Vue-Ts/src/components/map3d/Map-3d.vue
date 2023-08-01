<script setup lang="ts">
import Creatar3d from 'Creatar3d'
import { onMounted } from 'vue'
onMounted(() => {
  new Creatar3d.Viewer(`globe-container`, {})
})
</script>

<template>
  <div class="map" id="globe-container"></div>
</template>

<style scoped>
.map {
  max-height: 100vh;
}
</style>
