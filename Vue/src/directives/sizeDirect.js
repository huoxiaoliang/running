const map = new WeakMap() // weakMap 不影响垃圾回收
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const handler = map.get(entry.target)
    const box = entry.borderBoxSize[0]
    if (handler)
      handler({
        width: box.inlineSize,
        height: box.blockSize
      })
  }
})
export default {
  mounted(el, binding) {
    //监视尺寸变化
    ob.observe(el)
    map.set(el, binding.value)
  },
  unmounted(el) {
    ob.unobserve(el)
  }
}
