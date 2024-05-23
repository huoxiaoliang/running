<script setup lang="ts">
import { onMounted, ref } from 'vue'

const timeline = ref<HTMLElement>()

/**  每十个格子就写一次刻度数字*/
const divider = 10

/**  隔十个像素就画一个刻度线*/
const itemWidth = 10

/**  画刻度线的起始y坐标*/
const startY = 0

/**  尺子的最小值*/
const min = 0

/** 尺子的最大值*/
const max = 220
let leftMin
let leftMax
let canvasWidth = 0
let canvasHeight = 0
let numberOffset = 0
/**
 * 尺子最核心的值，单位为像素，这个值记录了当前手指总共滑动了多少像素距离和方向
 * 如果把尺子最低刻度理解为1厘米的话，那么这个就是1毫米。
 */
let currentCanvasLocation = 10
let canvas: HTMLCanvasElement | null = null,
  ctx: CanvasRenderingContext2D
/* 初始化 Canvas */
const initCanvas = () => {
  canvas = timeline.value!.querySelector('canvas')
  // 这里不要用css设置canvas的宽高，不然会出现绘制模糊的情况
  if (canvas !== null) {
    canvas.width = timeline.value!.clientWidth
    canvas.height = timeline.value!.clientHeight
    ctx = canvas.getContext('2d', { alpha: false }) as CanvasRenderingContext2D

    // 计算屏幕能放下的尺子格数
    const screenCount = parseInt((canvas.clientWidth / itemWidth).toFixed(0))
    // 计算尺子读数需要的偏移刻度数
    numberOffset = parseInt((screenCount / 2).toFixed(0))
    leftMin = min - numberOffset
    leftMax = max - numberOffset

    // 保存一下宽高
    canvasWidth = canvas.clientWidth
    canvasHeight = canvas.clientHeight

    // 设置字体
    ctx.font = '14px Arial'

    // 初始化完成后渲染一下
    // 这个方法是将canavs的绘制时机交给系统来控制
    // 也可以换成使用 setInterval 实现，要达到一秒60帧的流畅体验，绘制间隔设置成16ms就可以了
    window.requestAnimationFrame(draw)
  }
}

const draw = () => {
  // 每次绘制之前先要清空画布
  // 设置笔触颜色为白色，每次绘制之前，先把画布用白色清空
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.fillRect(0, 0, canvasWidth, canvasHeight)
  ctx.closePath()
  // 清空完画布，再把笔触设置成黑色
  ctx.fillStyle = '#000000'

  // 这里把 currentCanvasLocation 末尾的像素值取出，设置一个滑动时的偏差
  let offset: number

  // 取当前的位移量的最后一位
  const str = currentCanvasLocation.toString()
  const lastNumber = Number(str.charAt(str.length - 1))

  // currentCanvasLocation 大于和小于0时有不同的取值方式
  if (currentCanvasLocation > 0) {
    offset = itemWidth - lastNumber
  } else if (currentCanvasLocation < 0) {
    offset = lastNumber
    // 因为这里是直接将lastNumber赋值给offset，而不是10-lastNumber，所以为出现没有0 的情况，会出现 9 之后直接到1，然后闪一下的情况
    // 所以需要手动判断为0时设置为10
    if (offset === 0) {
      offset = itemWidth
    }
  } else {
    offset = 0
  }

  // for循环绘制尺子刻度
  // 从滑动偏差开始，每次增加 itemWidth 个刻度
  /**
   * 基于 currentCanvasLocation 绘制，
   * currentCanvasLocation 就是当前canvas的起始像素值，
   * 可以自定义几个像素值为一个基本刻度，这里我设置成了10，
   * 一般也都是10
   *
   */
  // i+=itemWidth 每隔 itemWidth 个像素划一个刻度
  for (let i = offset; i < canvasWidth; i += itemWidth) {
    ctx.moveTo(i, startY)
    // 开头偏移的像素
    const scaleNumber = i + currentCanvasLocation
    // 只绘制在尺子数值范围内的
    if (canDraw(scaleNumber) === 0) {
      if (scaleNumber % (divider * itemWidth) === 0) {
        // 每个分割线的时候写一个刻度值
        const metrics = ctx.measureText(i.toString())
        const textX = (i - metrics.width / 2).toFixed(2)
        ctx.fillText((scaleNumber / itemWidth).toString(), Number(textX), 45)
        ctx.lineTo(i, 30)
      } else {
        ctx.lineTo(i, 10)
      }
    }
  }
  ctx.stroke()
}

/**
 * 判断是否可以绘制
 * 根据当前的x值来判断，
 * 小于最小值或大于最大值都不绘制
 **/
const canDraw = (x: number): number => {
  const currentNumber = Math.floor(x / itemWidth)
  if (currentNumber >= min && currentNumber <= max) {
    return 0
  }
  return -1
}

onMounted(() => {
  initCanvas()
})
</script>

<template>
  <div ref="timeline" class="timeline">
    <canvas></canvas>
  </div>
</template>

<style scoped lang="scss">
.timeline {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 500px;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
