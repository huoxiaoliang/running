<script setup lang="ts">
import { onMounted } from 'vue'
import Creatar3d from 'Creatar3d'
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
