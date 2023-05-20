<template>
  <div class="about">
    <div class="container">
      <div v-size-ob="sizeChange" class="chart" ref="chartRef"></div>
    </div>
  </div>
</template>

<script setup>
// 导入echarts
import * as echarts from 'echarts'
import 'echarts/theme/macarons.js'
import { ref, onMounted } from 'vue'

const chartRef = ref(null)
const width = ref(500)
//  定义dom变量用于获取dom节点

// 定义变量用于接收初始化echarts实例
let myChart = '' // 绘制图表
onMounted(() => {
  //基于准备好的dom，初始化echarts实例
  myChart = echarts.init(chartRef.value, 'macarons')
  optionsHandler()
})
//专门用于做配置项的方法
const optionsHandler = () => {
  //开始配置
  myChart.setOption({
    //标题
    title: { text: 'ECharts 入门示例' },
    //提示
    tooltip: {},
    //图例
    legend: { data: ['销量'] },
    //X轴
    xAxis: { data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] },
    //Y轴
    yAxis: {},
    //数据
    series: [{ name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20] }]
  })
}

function sizeChange(param) {
  console.log('param :>> ', param)
  myChart && myChart.resize()
}
</script>

<style scoped lang="scss">
.data {
  height: 520px;
  width: 1200px;
  margin: 0;
}
</style>
<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .chart {
    width: 50%;
    height: 500px;
    resize: both;
    overflow: scroll;
    border: 1px solid black;

    cursor: ew-resize;
  }
  .chart::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }
}
</style>
