<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  new window.Creatar3d.Viewer(`globe-container`, {})
})
</script>

<template>
  <div id="globe-container"></div>
</template>
