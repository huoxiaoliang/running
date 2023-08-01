import { ref, watchEffect } from 'vue'
// 获取主题变量
let appearance = ref(localStorage.getItem('appearance') || 'auto')
// 查询当前系统主题颜色
const match = window.matchMedia('(prefers-color-scheme: dark)')
// 监听系统主题变化
match.addEventListener('change', followSystem)

function followSystem() {
  const theme = match.matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
}

watchEffect(() => {
  // 如果主题变量为 auto, 则跟随系统主题
  if (appearance.value === 'auto') {
    followSystem()
  } else {
    document.documentElement.setAttribute('data-theme', appearance.value)
  }
})

export default function useThemeColor() {
  return {
    appearance
  }
}
