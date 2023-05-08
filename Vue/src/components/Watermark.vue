<template>
  <div class="watermark-container" ref="parentRef">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, watchEffect, onMounted, onUnmounted } from 'vue'
import useWatermarkBg from '../../hooks/useWatermarkBg'
const props = defineProps({
  text: {
    type: String,
    default: '防篡改'
  },
  fontSize: {
    type: Number,
    default: 14
  },
  gap: {
    type: Number,
    default: 5
  }
})
const bg = useWatermarkBg(props)
const parentRef = ref(null)
let div
let flag = ref(0)
watchEffect(() => {
  flag.value
  if (!parentRef.value) return
  if (div) div.remove()
  const { base64, styleSize } = bg.value
  div = document.createElement('div')
  div.style.background = `url(${base64})`
  div.style.backgroundSize = `${styleSize}px ${styleSize}px`
  div.style.backgroundRepeat = 'repeat'
  div.style.position = 'absolute'
  div.style.inset = '0' //设置四个方向的值
  div.style.zIndex = '-1'
  parentRef.value.appendChild(div)
})
let ob
onMounted(() => {
  // 放篡改
  ob = new MutationObserver((records) => {
    for (const record of records) {
      //删除水印
      for (const dom of record.removedNodes) {
        if (dom === div) {
          flag.value++
          return
        }
      }
      //修改
      if (record.target === div) {
        flag.value++
        return
      }
    }
  })
  ob.observe(parentRef.value, {
    childList: true,
    attributes: true,
    subtree: true
  })
})

onUnmounted(() => {
  ob && ob.disconnect()
  div = null
})
</script>

<style scoped>
.watermark-container {
  position: relative;
}
</style>
