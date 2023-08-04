declare module "Creatar3d" {
  /**
   * 可视域分析
   * @param options - 选项。
   * @param options.viewPosition - 观测点位置。
   * @param options.viewPositionEnd - 最远观测点位置（如果设置了观测距离，这个属性可以不设置）。
   * @param [options.viewDistance = 100] - 观测距离（单位`米`，默认值100）。
   * @param options.viewHeading - 航向角（单位`度`，默认值0）。
   * @param options.viewPitch - 俯仰角（单位`度`，默认值0）。
   * @param [options.horizontalViewAngle = 90] - 可视域水平夹角（单位`度`，默认值90）。
   * @param [options.verticalViewAngle = 60] - 可视域垂直夹角（单位`度`，默认值60）。
   * @param [options.visibleAreaColor = Cesium.Color.GREEN] - 可视区域颜色（默认值`绿色`）。
   * @param [options.invisibleAreaColor = Cesium.Color.RED] - 不可视区域颜色（默认值`红色`）。
   * @param [options.enabled = true] - 阴影贴图是否可用。
   * @param [options.softShadows = true] - 是否启用柔和阴影。
   * @param [options.size = 2048] - 每个阴影贴图的大小。
   */
  declare class ViewShedStage {
    constructor(options: {
      viewPosition: Cesium.Cartesian3;
      viewPositionEnd: Cesium.Cartesian3;
      viewDistance?: number;
      viewHeading: number;
      viewPitch: number;
      horizontalViewAngle?: number;
      verticalViewAngle?: number;
      visibleAreaColor?: Cesium.Color;
      invisibleAreaColor?: Cesium.Color;
      enabled?: boolean;
      softShadows?: boolean;
      size?: boolean;
    });
    /**
     * 创建相机
     */
    createLightCamera(): void;
    /**
     * 创建阴影贴图
     */
    createShadowMap(): void;
    /**
     * 创建PostStage
     */
    createPostStage(): void;
    /**
     * 创建视锥线（用于测试范围）
     */
    drawFrustumOutline(): void;
    /**
     * 创建视网
     */
    drawSketch(): void;
  }

  /**
   * 可视域分析
   * @param options - 选项。
   * @param options.startPosition - 观测点位置。
   * @param options.endPosition - 最远观测点位置。
   * @param [options.fovH = 90] - 可视域水平夹角（单位`度`，默认值90）。
   * @param [options.fovV = 60] - 可视域垂直夹角（单位`度`，默认值60）。
   * @param [options.visibleColor = Cesium.Color.GREEN] - 可视区域颜色（默认值`绿色`）。
   * @param [options.invisibleColor = Cesium.Color.RED] - 不可视区域颜色（默认值`红色`）。
   * @param [options.enabled = true] - 阴影贴图是否可用。
   * @param [options.showGridLine = true] - 是否显示网格线。
   */
  declare class ViewShedStage2 {
    constructor(options: {
      startPosition: Cesium.Cartesian3;
      endPosition: Cesium.Cartesian3;
      fovH?: number;
      fovV?: number;
      visibleColor?: Cesium.Color;
      invisibleColor?: Cesium.Color;
      enabled?: boolean;
      showGridLine?: boolean;
      offsetHeight?: number;
    });
    /**
     * 视角落点位置
     */
    endPosition: Cesium.Cartesian3;
    /**
     * 相机视椎
     */
    readonly frustum: Cesium.PerspectiveFrustum;
    /**
     * 可视域水平夹角
     */
    fovH: number;
    /**
     * 可视域垂直夹角
     */
    fovV: number;
    /**
     * 相机近平面的距离
     */
    near: number;
    /**
     * 相机远平面的距离
     */
    far: number;
    /**
     * 视角位置
     */
    position: Cesium.Cartesian3;
    /**
     * 偏移
     */
    offsetHeight: number;
    /**
     * 相机heading角
     */
    heading: number;
    /**
     * 相机pitch角
     */
    pitch: number;
    /**
     * 相机roll角
     */
    roll: number;
    /**
     * 阴影贴图
     */
    readonly shadowMap: Cesium.ShadowMap;
    /**
     * 相机
     */
    readonly lightCamera: Cesium.Camera;
    /**
     * 阴影是否可用
     */
    enabled: boolean;
    /**
     * 可见阴影颜色
     */
    visibleColor: boolean;
    /**
     * 不可见阴影颜色
     */
    invisibleColor: Cesium.Color;
    /**
     * 视椎线可用
     */
    showGridLine: boolean;
    /**
     * 视椎面颜色
     */
    faceColor: Cesium.Color;
    /**
     * 视椎线颜色
     */
    lineColor: Cesium.Color;
    /**
     * 设置相机位置
     */
    setView(options: any): void;
    /**
     * 创建相机视椎
     */
    createLightCamera(): void;
    /**
     * 创建阴影贴图
     */
    createShadowMap(): void;
    /**
     * 后处理
     */
    createPostStage(): void;
  }

  /**
   * 等高线，基于地球材质实现局部渲染，有修改源码
   * @param [options.positions] - 坐标位置数组
   * @param [options.contourShow = true] - 是否显示等高线
   * @param [options.showElseArea = true] - 是否显示区域外的地图
   * @param [options.width = 2] - 等高线 线宽（单位：像素）
   * @param [options.spacing = 30] - 等高线 间隔（单位：米）
   * @param [options.color = Cesium.Color.RED] - 等高线 颜色
   * @param [options.shadingType = 'none'] - 可选地表渲染效果，可选值: 无none, 高程 elevation, 坡度slope, 坡向aspect
   * @param [options.shadingAlpha = 0.6] - 地表渲染效果透明度
   * @param [options.minHeight = -414] - 地表渲染配色方案中的 最低海拔高
   * @param [options.maxHeight = 8777] - 地表渲染配色方案中的 最高海拔高度
   * @param [options.colorScheme] - 可选地表渲染配色方案,默认值为： { elevation: { step: [0.0, 0.045, 0.1, 0.15, 0.37, 0.54, 1.0], color: ['#000000', '#2747E0', '#D33B7D', '#D33038', '#FF9742', '#FF9742', '#ffd700'], }, slope: { step: [0.0, 0.29, 0.5, Math.sqrt(2) / 2, 0.87, 0.91, 1.0], color: ['#000000', '#2747E0', '#D33B7D', '#D33038', '#FF9742', '#FF9742', '#ffd700'], }, aspect: { step: [0.0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0], color: ['#000000', '#2747E0', '#D33B7D', '#D33038', '#FF9742', '#FF9742', '#ffd700'], }, }
   */
  declare class ContourLine {
    constructor(options: {
      positions?: Position[];
      contourShow?: boolean;
      showElseArea?: boolean;
      width?: number;
      spacing?: number;
      color?: Cesium.Color;
      shadingType?: string;
      shadingAlpha?: number;
      minHeight?: number;
      maxHeight?: number;
      colorScheme?: any;
    });
    /**
     * 设置等高线显隐
     */
    contourShow: boolean;
    /**
     * 设置等高线间距
     */
    spacing: number;
    /**
     * 设置等高线线宽
     */
    width: number;
    /**
     * 设置地表渲染效果
     */
    shadingType: number;
    /**
     * 设置地表渲染效果
     */
    showElseArea: number;
    /**
     * 清除开挖结果
     */
    clear(): void;
  }

  /**
   * 地形开挖，基于地球材质地形开挖，有修改源码
   * @param [options.unionClippingRegions = false] - 是否外切开挖
   */
  declare class TerrainClip {
    constructor(options: { unionClippingRegions?: boolean });
    /**
     * 是否外切开挖
     */
    unionClippingRegions: boolean;
    /**
     * 清除开挖结果
     */
    clear(): void;
  }

  /**
   * 地形开挖、淹没等分析 基础类
   * @param [options.unionClippingRegions = false] - 是否外切开挖
   */
  declare class TerrainEdit {
    constructor(options: { unionClippingRegions?: boolean });
    /**
     * 添加区域
     * @param positions - 坐标点集
     * @returns id
     */
    addArea(positions: Position[]): string;
    /**
     * 删除区域
     * @param id - id
     */
    removeArea(id: string): void;
    /**
     * 隐藏区域
     * @param id - id
     */
    hideArea(id: string): void;
    /**
     * 显示区域
     * @param id - id
     */
    showArea(id: string): void;
    /**
     * 清除开挖结果
     */
    clear(): void;
  }

  /**
   * 地形压平、地形抬升等分析 基础类
   */
  declare class TerrainEdit2 {
    constructor(options: any);
    /**
     * 添加区域
     * @param positions - 坐标点集
     * @returns id
     */
    addArea(positions: Position[]): string;
    /**
     * 删除区域
     * @param id - id
     */
    removeArea(id: string): void;
    /**
     * 隐藏区域
     * @param id - id
     */
    hideArea(id: string): void;
    /**
     * 显示区域
     * @param id - id
     */
    showArea(id: string): void;
    /**
     * 清除结果
     */
    clear(): void;
  }

  /**
   * 地形压平，有修改源码
   * @param [options.unionClippingRegions = false] - 是否外切开挖
   */
  declare class TerrainFlat {
    constructor(options: { unionClippingRegions?: boolean });
    /**
     * 清除开挖结果
     */
    clear(): void;
  }

  /**
   * 地形开挖，基于clippingPlanes接口，只支持单个开挖
   * @param options.positions - 开挖范围
   * @param [options.unionClippingRegions = false] - 是否外切开挖
   */
  declare class TerrainPlanClip {
    constructor(options: {
      positions: Position[] | any[][];
      unionClippingRegions?: boolean;
    });
    /**
     * 开挖区域的 坐标位置数组
     */
    positions: Position[];
    /**
     * 是否外切开挖
     */
    unionClippingRegions: boolean;
    /**
     * 计算世界坐标系下的裁剪面
     * @param positions - 裁剪范围坐标
     * @param unionClippingRegions - 是否外切裁剪
     * @returns 裁剪面集合
     */
    static getClippingPlanes(
      positions: Position[],
      unionClippingRegions: boolean
    ): Cesium.ClippingPlane[];
  }

  /**
   * 地形抬升，有修改源码
   * @param [options.showUp = true] - 是否显示抬升区，为false时效果类同 地形开挖 的效果
   * @param [options.upHeight] - 设置所有区域的抬升高度（单位：米）,目前不支持单个区域的高度自定义。
   */
  declare class TerrainUplift {
    constructor(options: { showUp?: boolean; upHeight?: number });
    /**
     * 是否显示抬升区，为false时效果类同 地形开挖 的效果
     */
    showUp: boolean;
    /**
     * 设置所有区域的抬升高度（单位：米）,目前不支持单个区域的高度自定义。
     */
    upHeight: boolean;
    /**
     * 清除开挖结果
     */
    clear(): void;
  }

  /**
   * 动画基类
   */
  declare class Animation {
    constructor(视图: Viewer);
    /**
     * 开始动画
     * @returns this
     */
    start(): Animation;
    /**
     * 停止动画
     */
    stop(): Animation;
  }

  declare namespace AroundPoint {
    /**
     * AroundPoint配置项
     * @property [duration] - 持续时间，单位 s
     * @property [callback] - 回调函数
     * @property position - 点位置
     * @property [pitch = 0] - 俯仰角
     * @property [range = 1000] - 到中心的距离（米）
     * @property [aroundAmount = 0.2] - 到每帧旋转角度
     */
    type options = {
      duration?: number;
      callback?: (...params: any[]) => any;
      position: Position;
      pitch?: number;
      range?: number;
      aroundAmount?: number;
    };
  }

  /**
   * 绕点旋转
   * @param viewer - 场景视图
   * @param options - 动画参数
   */
  declare class AroundPoint extends Animation {
    constructor(viewer: Viewer, options: AroundPoint.options);
    /**
     * 位置
     */
    position: number;
    /**
     * 到每帧旋转角度
     */
    aroundAmount: number;
  }

  declare namespace AroundView {
    /**
     * AroundView
     * @property [duration] - 持续时间，单位 s
     * @property [callback] - 回调函数
     * @property [pitch = camera.pitch] - 俯仰角
     * @property [roll = camera.roll] - 旋转角
     */
    type options = {
      duration?: number;
      callback?: (...params: any[]) => any;
      pitch?: number;
      roll?: number;
    };
  }

  /**
   * 绕地环绕
   * @param viewer - 场景视图
   * @param options - 动画参数
   */
  declare class AroundView extends Animation {
    constructor(viewer: Viewer, options: AroundView.options);
    /**
     * 每次旋转角度
     */
    aroundAmount: number;
  }

  declare namespace CircleScan {
    /**
     * CircleScan配置项
     * @property position - 点位置
     * @property [radius = 100] - 圆半径
     * @property [speed = 2] - 速度
     * @property [color = Cesium.Color.RED] - 颜色
     */
    type options = {
      position: Position;
      radius?: number;
      speed?: number;
      color?: Cesium.Color;
    };
  }

  /**
   * 圆环扫描
   * @param viewer - 场景视图
   * @param options - 动画参数
   */
  declare class CircleScan extends Animation {
    constructor(viewer: Viewer, options: CircleScan.options);
    /**
     * 开始
     * @returns this
     */
    start(): CircleScan;
    /**
     * 停止
     */
    stop(): CircleScan;
  }

  declare namespace Flying {
    /**
     * Flying
     * @property [positions = []] - 点位
     * @property [dwellTime = 1] - 停留时间，单位 s
     * @property [callback] - 到达每个位置后的回调函数
     * @property [loop = false] - 是否循环
     * @property [durations = [3]] - 飞行时长，支持多点统一设置或单独设置
     */
    type options = {
      positions?: Position[];
      dwellTime?: number;
      callback?: (...params: any[]) => any;
      loop?: boolean;
      durations?: Number[];
    };
  }

  /**
   * 多点巡航
   * @param viewer - 场景视图
   * @param options - 动画参数
   */
  declare class Flying extends Animation {
    constructor(viewer: Viewer, options: Flying.options);
    /**
     * 点位
     */
    positions: Position[];
    start(): Flying;
    pause(): Flying;
    restore(): Flying;
  }

  declare namespace GlobeRotate {
    /**
     * GlobeRotate配置项
     * @property [duration] - 持续时间，单位 s
     * @property [callback] - 回调函数
     * @property [speed = 12000] - 时钟速度
     * @property [name = '未命名'] - 名称
     */
    type options = {
      duration?: number;
      callback?: (...params: any[]) => any;
      speed?: number;
      name?: string;
    };
  }

  /**
   * 开场动画
   * @param viewer - 场景视图
   * @param options - 动画参数
   */
  declare class GlobeRotate extends Animation {
    constructor(viewer: Viewer, options: GlobeRotate.options);
  }

  /**
   * 圆环扫描
   * @param viewer - 场景视图
   * @param options - 动画参数
   */
  declare class RadarScan extends CircleScan {
    constructor(viewer: Viewer, options: CircleScan.options);
  }

  /**
   * 特效基类
   */
  declare class BaseEffect {
    constructor(options: any);
    /**
     * 设置对象的启用和禁用状态
     */
    enable: boolean;
    /**
     * 特效事件
     */
    readonly effectEvent: EffectEvent;
    /**
     * Subscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns this
     */
    on(
      type: EffectEventType,
      callback: (...params: any[]) => any,
      context: any
    ): BaseEffect;
    /**
     * Unsubscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns this
     */
    off(
      type: EffectEventType,
      callback: (...params: any[]) => any,
      context: any
    ): BaseEffect;
    /**
     * Trigger subscription event
     * @param type - 事件类型
     * @param params - 参数
     * @returns this
     */
    fire(type: EffectEventType, params: any): BaseEffect;
    /**
     * 添加到视图
     * @param viewer - 特效
     */
    addTo(viewer: Viewer): BaseEffect;
  }

  /**
   * 雾效果
   * @param options - 参数对象，包括以下：
   * @param [options.fogByDistance = { near: 10, nearValue: 0, far: 2000, farValue: 1.0 }] - fogByDistance
   * @param [options.color = new Cesium.Color(0, 0, 0, 1)] - 颜色
   */
  declare class FogEffect {
    constructor(options: { fogByDistance?: any; color?: Cesium.Color });
    /**
     * 类型
     */
    readonly type: any;
    fogByDistance: number;
    /**
     * 颜色
     */
    color: Cesium.Color;
  }

  /**
   * 点光源
   * @param options - 参数对象，包括以下：
   * @param options.position - 位置
   * @param [options.color = Cesium.Color.WHITE] - 颜色
   * @param [options.cutoffDistance = 50] - 扩散距离
   * @param [options.decay = 0.03] - 衰减因子
   * @param [options.lightIntensity = 3] - 强度
   */
  declare class PointLight {
    constructor(options: {
      position: Cesium.Cartesian3;
      color?: Cesium.Color;
      cutoffDistance?: number;
      decay?: number;
      lightIntensity?: number;
    });
    /**
     * 类型
     */
    readonly type: any;
    /**
     * 设置光源位置
     */
    position: Cesium.Cartesian3;
    /**
     * 设置衰减因子
     */
    decay: number;
    /**
     * 设置强度
     */
    lightIntensity: number;
    /**
     * 设置扩散距离
     */
    cutoffDistance: number;
    /**
     * 颜色
     */
    color: Cesium.Color;
  }

  /**
   * 下雨效果
   * @param options - 参数对象，包括以下：
   * @param [options.speed = 60] - 速度
   * @param [options.size = 0.3] - 大小
   * @param [options.angle = -0.6] - 角度
   */
  declare class RainEffect {
    constructor(options: { speed?: number; size?: number; angle?: number });
    /**
     * 类型
     */
    readonly type: any;
    /**
     * 速度
     */
    speed: number;
    /**
     * 大小
     */
    size: number;
    /**
     * 角度
     */
    angle: number;
  }

  /**
   * 积雪覆盖效果
   * @param options - 参数对象，包括以下：
   * @param [options.maxHeight = 8000] - 大于此高度后不显示
   * @param [options.alpha = 0.5] - 透明度
   */
  declare class SnowCoverEffect {
    constructor(options: { maxHeight?: number; alpha?: number });
    /**
     * 类型
     */
    readonly type: any;
    /**
     * 透明度
     */
    alpha: number;
  }

  /**
   * 下雪效果
   * @param options - 参数对象，包括以下：
   * @param [options.speed = 60] - 速度
   * @param [options.size = 0.02] - 大小
   */
  declare class SnowEffect {
    constructor(options: { speed?: number; size?: number });
    /**
     * 类型
     */
    readonly type: any;
    /**
     * 速度
     */
    speed: number;
    /**
     * 速度
     */
    size: number;
  }

  /**
   * Event 基类
   */
  declare class Event {
    constructor();
    /**
     * Subscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns remove callback function
     */
    on(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): Event.RemoveCallback;
    /**
     * Subscribe once event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     */
    once(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): void;
    /**
     * Unsubscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     */
    off(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): boolean;
    /**
     * Trigger subscription event
     * @param type - 事件类型
     * @param params - 参数
     */
    fire(type: EventType, params: any): void;
    /**
     * Returns events by type
     * @param type - 事件类型
     * @returns Event
     */
    getEvent(type: EventType): Cesium.Event;
  }

  /**
   * 基础事件操作类型
   */
  declare const enum BaseEventType {
    /**
     * 添加
     */
    ADD = "add",
    /**
     * 移除
     */
    REMOVE = "remove",
  }

  /**
   * 鼠标事件操作类型
   */
  declare const enum MouseEventType {
    /**
     * 左键单击
     */
    CLICK = "Cesium.ScreenSpaceEventType.LEFT_CLICK",
    /**
     * 右键单击
     */
    RIGHT_CLICK = "Cesium.ScreenSpaceEventType.RIGHT_CLICK",
    /**
     * 左键双击
     */
    DB_CLICK = "Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK",
    /**
     * 鼠标移动
     */
    MOUSE_MOVE = "Cesium.ScreenSpaceEventType.MOUSE_MOVE",
    /**
     * 滚轮滚动
     */
    WHEEL = "Cesium.ScreenSpaceEventType.WHEEL",
    /**
     * 左键按下
     */
    LEFT_DOWN = "Cesium.ScreenSpaceEventType.LEFT_DOWN",
    /**
     * 左键抬起
     */
    LEFT_UP = "Cesium.ScreenSpaceEventType.LEFT_UP",
    /**
     * 鼠标移出
     */
    MOUSE_OVER = "mouseover",
    /**
     * 鼠标移入
     */
    MOUSE_OUT = "mouseout",
  }

  /**
   * 视图事件操作类型
   */
  declare const enum ViewerEventType {
    /**
     * 添加图层
     */
    ADD_LAYER = "addLayer",
    /**
     * 移除图层
     */
    REMOVE_LAYER = "removeLayer",
    /**
     * 添加特效
     */
    ADD_EFFECT = "addEffect",
    /**
     * 移除特效
     */
    REMOVE_EFFECT = "removeEffect",
    /**
     * 左键单击
     */
    CLICK = "Cesium.ScreenSpaceEventType.LEFT_CLICK",
    /**
     * 右键单击
     */
    RIGHT_CLICK = "Cesium.ScreenSpaceEventType.RIGHT_CLICK",
    /**
     * 左键双击
     */
    DB_CLICK = "Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK",
    /**
     * 鼠标移动
     */
    MOUSE_MOVE = "Cesium.ScreenSpaceEventType.MOUSE_MOVE",
    /**
     * 滚轮滚动
     */
    WHEEL = "Cesium.ScreenSpaceEventType.WHEEL",
    /**
     * 左键按下
     */
    LEFT_DOWN = "Cesium.ScreenSpaceEventType.LEFT_DOWN",
    /**
     * 左键抬起
     */
    LEFT_UP = "Cesium.ScreenSpaceEventType.LEFT_UP",
  }

  /**
   * 场景相机事件操作类型
   */
  declare const enum SceneEventType {
    /**
     * 相机移动结束
     */
    CAMERA_MOVE_END = "cameraMoveEnd",
    /**
     * 相机改变
     */
    CAMERA_CHANGED = "cameraChanged",
    /**
     * 场景更新之前
     */
    PRE_UPDATE = "preUpdate",
    /**
     * 场景更新后
     */
    POST_UPDATE = "postUpdate",
    /**
     * 渲染更新后
     */
    PRE_RENDER = "preRender",
    /**
     * 渲染更新后
     */
    POST_RENDER = "postRender",
    /**
     * 变形完成
     */
    MORPH_COMPLETE = "morphComplete",
    /**
     * 时钟变化
     */
    CLOCK_TICK = "clockTick",
  }

  /**
   * 覆盖物事件操作类型
   */
  declare const enum GraphicEventType {
    /**
     * 左键单击
     */
    CLICK = "Cesium.ScreenSpaceEventType.LEFT_CLICK",
    /**
     * 右键单击
     */
    RIGHT_CLICK = "Cesium.ScreenSpaceEventType.RIGHT_CLICK",
    /**
     * 左键双击
     */
    DB_CLICK = "Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK",
    /**
     * 鼠标移动
     */
    MOUSE_MOVE = "Cesium.ScreenSpaceEventType.MOUSE_MOVE",
    /**
     * 滚轮滚动
     */
    WHEEL = "Cesium.ScreenSpaceEventType.WHEEL",
    /**
     * 鼠标移入
     */
    MOUSE_OVER = "mouseover",
    /**
     * 鼠标移出
     */
    MOUSE_OUT = "mouseout",
    /**
     * 位置修改后
     */
    POSITION_UPDATE = "positionUpdate",
  }

  /**
   * 图层组事件操作类型
   */
  declare const enum LayerGroupEventType {}

  /**
   * 图层事件操作类型
   */
  declare const enum LayerEventType {
    /**
     * 左键单击
     */
    CLICK = "Cesium.ScreenSpaceEventType.LEFT_CLICK",
    /**
     * 添加要素
     */
    ADD_GRAPHIC = "addGraphic",
    /**
     * 移除要素
     */
    REMOVE_GRAPHIC = "removeGraphic",
  }

  /**
   * 漫游事件操作类型
   */
  declare const enum RoamingEventType {
    /**
     * 场景更新后
     */
    POST_UPDATE = "postUpdate",
    /**
     * 变化后
     */
    CHANGE = "change",
    /**
     * 完成节点后
     */
    OVERPOINT = "overPoint",
    /**
     * 开始事件
     */
    START = "start",
    /**
     * 结束事件
     */
    END = "end",
  }

  /**
   * 特效事件操作类型
   */
  declare const enum EffectEventType {}

  /**
   * 分析事件操作类型
   */
  declare const enum ThingEventType {}

  /**
   * 标绘事件操作类型
   */
  declare const enum PlotEventType {
    /**
     * 标绘开始
     */
    DRAW_START = "drawStart",
    /**
     * 标绘结束
     */
    DRAW_STOP = "drawStop",
    /**
     * 标绘取消
     */
    DRAW_CANCEL = "drawCancel",
    /**
     * 编辑开始
     */
    EDIT_START = "editStart",
    /**
     * 编辑结束
     */
    EDIT_STOP = "editEnd",
    /**
     * 编辑取消
     */
    EDIT_CANCEL = "editCancel",
    /**
     * 右键删除
     */
    RIGHT_REMOVE = "rightRemove",
    /**
     * 绘制过程中增加了点 标绘事件
     */
    Add_ANCHOR = "addAnchor",
    /**
     * 绘制过程中删除了最后一个点 标绘事件
     */
    REMOVE_ANCHOR = "removeAnchor",
    /**
     * 编辑删除更新点 标绘事件
     */
    EDIT_UPDATE_ANCHOR = "editUpdateAnchor",
    /**
     * 绘制移动中 标绘事件
     */
    DRAW_MOVEING = "drawMoveing",
  }

  /**
   * 特效事件
   */
  declare class EffectEvent extends Event {
    constructor();
  }

  /**
   * 覆盖物事件
   */
  declare class GraphicEvent extends Event {
    constructor();
  }

  /**
   * 图层事件
   */
  declare class LayerEvent extends Event {
    constructor();
  }

  /**
   * 图层组事件
   */
  declare class LayerGroupEvent extends Event {
    constructor();
  }

  /**
   * 鼠标事件
   */
  declare class MouseEvent extends Event {
    /**
     * 移除鼠标所有默认事件
     */
    removeEvent(): void;
    /**
     * 初始化鼠标所有默认事件
     */
    initEvent(): void;
    /**
     * Subscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns remove callback function
     */
    on(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): Event.RemoveCallback;
    /**
     * Subscribe once event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     */
    once(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): void;
    /**
     * Unsubscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     */
    off(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): boolean;
    /**
     * Trigger subscription event
     * @param type - 事件类型
     * @param params - 参数
     */
    fire(type: EventType, params: any): void;
    /**
     * Returns events by type
     * @param type - 事件类型
     * @returns Event
     */
    getEvent(type: EventType): Cesium.Event;
  }

  /**
   * 标绘事件
   */
  declare class PlotEvent extends Event {
    constructor();
  }

  /**
   * 漫游事件
   */
  declare class RoamingEvent extends Event {
    constructor();
  }

  /**
   * 场景事件
   * @param viewer - 视图
   */
  declare class SceneEvent extends Event {
    constructor(viewer: Viewer);
    /**
     * Subscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns remove callback function
     */
    on(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): Event.RemoveCallback;
    /**
     * Unsubscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     */
    off(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): boolean;
  }

  /**
   * 特效事件
   */
  declare class ThingEvent extends Event {
    constructor();
  }

  /**
   * 视图事件
   */
  declare class ViewerEvent extends Event {
    constructor();
  }

  /**
   * 大数据合并渲染Primitive对象基类
   */
  declare class BaseCombine extends BasePrimitive {
    constructor();
    /**
     * 数据集合数组，同类的构造参数
     */
    instances: any[];
    /**
     * 根据 pickId 获取对应绑定的数据据对象
     * @param pickedId - 单个对象的pickid
     */
    getPickedObject(pickedId: string): void;
    /**
     * 更新颜色
     * @param color - 颜色
     * @param index - 更新的instances对象index值，为空时更新所有对象
     */
    setColorStyle(color: Cesium.Color, index: number | undefined): void;
  }

  /**
   * 大数据面集合 (合并渲染) Primitive图元 矢量对象
   * @param options - 参数
   * @param options.instances - 面信息 数组，单个对象包括：
   * @param options.instances.positions - 坐标位置
   * @param [options.instances.style] - 样式信息
   * @param [options.instances.attr] - 可选矢量数据的 属性信息，可以任意附加属性
   * @param [options.style] - 样式,参考Cesium.PolygonGeometry，支持color
   * @param [options.appearance = new Cesium.PerInstanceColorAppearance()] - 外观
   * @param [options.attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
   * @param [options.depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
   * @param [options.vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
   * @param [options.interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
   * @param [options.compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
   * @param [options.releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
   * @param [options.allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
   * @param [options.cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
   * @param [options.asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
   */
  declare class PolygonCombine extends BaseCombine {
    constructor(options: {
      instances: {
        positions: Position[];
        style?: Cesium.PolygonGeometry.options;
        attr?: any;
      }[];
      style?: Cesium.PolygonGeometry.options;
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    });
  }

  /**
   * 大数据线集合 (合并渲染) Primitive图元 矢量对象
   * @param options - 参数
   * @param options.instances - 线信息 数组，单个对象包括：
   * @param options.instances.positions - 坐标位置
   * @param [options.instances.style] - 样式信息
   * @param [options.instances.attr] - 可选矢量数据的 属性信息，可以任意附加属性
   * @param [options.style] - 样式,参考Cesium.PolylineGeometry，支持color
   * @param [options.appearance = new Cesium.PerInstanceColorAppearance()] - 外观
   * @param [options.attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
   * @param [options.depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
   * @param [options.vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
   * @param [options.interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
   * @param [options.compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
   * @param [options.releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
   * @param [options.allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
   * @param [options.cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
   * @param [options.asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
   */
  declare class PolylineCombine extends BaseCombine {
    constructor(options: {
      instances: {
        positions: Position[];
        style?: Cesium.PolylineGeometry;
        attr?: any;
      }[];
      style?: Cesium.PolylineGeometry.options;
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    });
  }

  /**
   * 相机视椎线
   */
  declare class DebugCameraPrimitive extends BasePointPrimitive {
    constructor(options: any);
    /**
     * 视椎面颜色
     */
    faceColor: Cesium.Color;
    /**
     * 视椎线颜色
     */
    lineColor: Cesium.Color;
    /**
     * 4x4变换矩阵
     */
    modelMatrix: Cesium.Matrix4;
    /**
     * 位置
     */
    position: string | any[] | Position;
  }

  /**
 * @example
 * primitives.add(new Cesium.PositionEditor({
  model : primitive,  // primitive to debug
  length : 300.0,
  width : 20.0
}));
 * @param [options] - Object with the following properties:
 * @param options.viewer - viewer
 * @param options.model - model
 * @param [options.length = 300.0] - The length of the axes in pixels.
 * @param [options.width = 20] - The width of the axes in pixels.
 * @param [options.show = true] - Determines if this primitive will be shown.
 * @param [options.id] - A user-Cesium.defined object to return when the instance is picked with {@link Scene#pick}
 * @param [options.type] - type 0:TRANSLATE  1:ROTATE 2:SCALE 3:UNIFORM_SCALE
 * @param [options.xColor = Cesium.Color.RED] - Cesium.Color for axis x
 * @param [options.yColor = Cesium.Color.GREEN] - Cesium.Color for axis y
 * @param [options.zColor = Cesium.Color.BLUE] - Cesium.Color for axis z
 * @param [options.highlightColor = Cesium.Color.YELLOW] - Cesium.Color for axis highlight
 * @param [options.applyTransform = true] - model is  applyTransform
 * @param [options.onDragEnd] - end event
 */
  declare class PositionEditor {
    constructor(options?: {
      viewer: Cesium.Viewer;
      model: Model | Tileset | ModelPrimitive;
      length?: number;
      width?: number;
      show?: boolean;
      id?: any;
      type?: number;
      xColor?: Cesium.Color;
      yColor?: Cesium.Color;
      zColor?: Cesium.Color;
      highlightColor?: Cesium.Color;
      applyTransform?: boolean;
      onDragEnd?: (...params: any[]) => any;
    });
    /**
     * The length of the axes in meters.
     */
    length: number;
    /**
     * The width of the axes in pixels.
     */
    width: number;
    /**
     * Determines if this primitive will be shown.
     */
    show: boolean;
    /**
     * User-Cesium.defined value returned when the primitive is picked.
     */
    id: any;
    /**
     * Returns true if this object was destroyed; otherwise, false.
    <p>
    If this object was destroyed, it should not be used; calling any function other than
    <code>isDestroyed</code> will result in a {@link DeveloperError} exception.
    </p>
     * @returns <code>true</code> if this object was destroyed; otherwise, <code>false</code>.
     */
    isDestroyed(): boolean;
    /**
     * Destroys the WebGL resources held by this object.  Destroying an object allows for deterministic
    release of WebGL resources, instead of relying on the garbage collector to destroy this object.
    <p>
    Once an object is destroyed, it should not be used; calling any function other than
    <code>isDestroyed</code> will result in a {@link DeveloperError} exception.  Therefore,
    assign the return value (<code>undefined</code>) to the object as done in the example.
    </p>
     * @example
     * p = p && p.destroy();
     */
    destroy(): void;
  }

  /**
   * 4x4变换矩阵
   */
  declare var modelMatrix: Cesium.Matrix4;

  /**
   * 计算zoy面和zoy面单位扇形位置
   */
  declare function computeUnitPosition(primitive: any): any;

  /**
   * 计算四个扇面的位置
   */
  declare function computeSectorPositions(unitPosition: any): any[];

  /**
   * 创建扇面顶点
   */
  declare function createSectorVertexArray(context: any, positions: any): any;

  /**
   * 创建扇面边线顶点
   */
  declare function createSectorLineVertexArray(
    context: any,
    positions: any
  ): any;

  /**
   * 创建扇面圆顶面连接线顶点
   */
  declare function createSectorSegmentLineVertexArray(
    context: any,
    positions: any
  ): any;

  /**
   * 创建圆顶面顶点
   */
  declare function createDomeVertexArray(context: any): void;

  /**
   * 创建圆顶面连线顶点
   */
  declare function createDomeLineVertexArray(context: any): void;

  /**
   * 创建扫描面顶点
   */
  declare function createScanPlaneVertexArray(
    context: any,
    positions: any
  ): any;

  declare namespace Tetrahedron {
    /**
     * 四面体样式配置项
     * @property [width = 20] - 顶部正方形长宽，单位：米
     * @property [height = 30] - 倒立的三角椎体部分高度，单位：米
     * @property [moveHeight = 50] - 动画时，上下移动的单程总高度，单位：米
     * @property [rotationAngle = 3] - 动画时，每帧旋转的角度值，单位：度
     * @property [moveDuration = 2] - 动画时，上下移动的单程总时长，单位：秒
     * @property [animation = true] - 是否动画
     * @property [color = new Cesium.Color(0.8, 0.8, 0.0, 0.8)] - 颜色
     */
    type StyleOptions = {
      width?: number;
      height?: number;
      moveHeight?: number;
      rotationAngle?: number;
      moveDuration?: number;
      animation?: boolean;
      color?: Cesium.Color;
    };
  }

  /**
   * 四面体
   * @param options.style - 样式信息
   */
  declare class Tetrahedron extends BasePointPrimitive {
    constructor(options: { style: Tetrahedron.StyleOptions });
    /**
     * 开启动画
     */
    startAnimate(): void;
    /**
     * 关闭动画
     */
    closeAnimate(): void;
    /**
     * 4x4变换矩阵
     */
    readonly modelMatrix: Cesium.Matrix4;
  }

  declare namespace BasePoint {
    /**
     * 点状Entity矢量数据 基类
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string | Cesium.PositionProperty;
      style: Cesium.PointGraphics.ConstructorOptions;
    };
  }

  /**
   * 点
   * @param options - 参数
   */
  declare class BasePoint extends Graphic {
    constructor(options: BasePoint.Options);
    /**
     * 位置
     */
    position: Position;
    /**
     * 三维空间中的旋转
     */
    orientation: Cesium.Quaternion;
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 绘制编辑时拾取排除对象
     */
    readonly objectsToExclude: any[];
    /**
     * 设置并添加动画轨迹位置，按“指定时间”运动到达“指定位置”添加。
     * @param [currTime = 10] - 指定时间, 默认为当前时间10秒后。 当为Number时，可以传入当前时间延迟的秒数。
     */
    addDynamicPosition(
      position: Position,
      currTime?: Cesium.JulianDate | number
    ): void;
    /**
     * 设置样式
     */
    setStyle(style: any): Graphic;
  }

  /**
   * Entity 线、面类基类
   */
  declare class BasePoly extends BasePoly {
    constructor();
    /**
     * 坐标集合
     */
    positions: string | String[] | Position[];
    /**
     * 中心点
     */
    readonly center: Position;
    /**
     * 几何外包球
     */
    readonly boundingSphere: Cesium.BoundingSphere;
    /**
     * 长度
     */
    readonly distance: number;
    /**
     * 面积
     */
    readonly area: number;
    /**
     * 设置标注
     * @param text - 文字
     * @param textStyle - 样式
     */
    setLabel(
      text: string,
      textStyle: Cesium.LabelGraphics.ConstructorOptions,
      位置: Position
    ): Graphic;
  }

  declare namespace Billboard {
    /**
     * 广告牌配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      style: Cesium.BillboardGraphics.ConstructorOptions;
    };
  }

  /**
   * 广告牌
   * @param options - 参数
   */
  declare class Billboard extends BasePoint {
    constructor(options: Billboard.Options);
    /**
     * Parse from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): Billboard;
    /**
     * 位置
     */
    position: Position;
  }

  declare namespace Box {
    /**
     * 立方盒配置项
     * @property position - 坐标点
     * @property [通用参数] - Graphic通用参数
     * @property style - 样式
     */
    type Options = {
      position: Position | string;
      通用参数?: Graphic.Options;
      style: Cesium.BoxGraphics.ConstructorOptions;
    };
  }

  /**
   * 立方盒
   * @param options - 参数
   */
  declare class Box extends BasePoint {
    constructor(options: Box.Options);
    /**
     * 长
     */
    length: number;
    /**
     * 宽
     */
    width: number;
    /**
     * 高
     */
    height: number;
  }

  declare namespace Circle {
    /**
     * 圆配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 中心坐标点
     * @property radius - 半径
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      radius: number;
      style: Cesium.PolygonGraphics.ConstructorOptions;
    };
  }

  /**
   * 圆 支持旋转
   * @param options - 参数
   */
  declare class Circle extends BasePoint {
    constructor(options: Circle.Options);
    /**
     * 位置
     */
    position: Position;
    /**
     * 半径
     */
    radius: number;
    /**
     * 边界坐标
     */
    readonly outlinePositions: Cesium.Cartesian3[];
    /**
     * 样式
     */
    style: any;
    /**
     * 旋转角
     */
    rotateAmount: number;
  }

  declare namespace Corridor {
    /**
     * 走廊配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.CorridorGraphics.ConstructorOptions;
    };
  }

  /**
   * 走廊
   * @param options - 参数
   */
  declare class Corridor extends Graphic {
    constructor(options: Corridor.Options);
    /**
     * Parses from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): Corridor;
  }

  /**
   * 曲线(B样条)
   * @param options - 参数
   */
  declare class Curve extends Polyline {
    constructor(options: Polyline.Options);
  }

  declare namespace Cylinder {
    /**
     * 圆柱、圆锥配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      style: Cesium.CylinderGraphics.ConstructorOptions;
    };
  }

  /**
   * 圆柱、圆锥
   * @param options - 参数
   */
  declare class Cylinder extends BasePoint {
    constructor(options: Cylinder.Options);
    /**
     * 长度
     */
    length: number;
    /**
     * 顶半径
     */
    topRadius: number;
    /**
     * 低半径
     */
    bottomRadius: number;
  }

  declare namespace Ellipse {
    /**
     * 椭圆配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      style: Cesium.EllipseGraphics.ConstructorOptions;
    };
  }

  /**
   * 椭圆
   * @param options - 参数
   */
  declare class Ellipse extends BasePoint {
    constructor(options: Ellipse.Options);
    /**
     * 长轴
     */
    semiMajorAxis: number;
    /**
     * 短轴
     */
    semiMinorAxis: number;
  }

  declare namespace Ellipsoid {
    /**
     * 椭球体配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      style: Cesium.EllipsoidGraphics.ConstructorOptions;
    };
  }

  /**
   * 椭球体
   * @param options - 参数
   */
  declare class Ellipsoid extends BasePoint {
    constructor(options: Ellipsoid.Options);
    /**
     * 三轴长度
     */
    radii: any;
    /**
     * 位置
     */
    position: Position;
  }

  declare namespace Label {
    /**
     * 标注配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      style: Cesium.LabelGraphics.ConstructorOptions;
    };
  }

  /**
   * 标注
   * @param options - 参数
   */
  declare class Label extends BasePoint {
    constructor(options: Label.Options);
    /**
     * 文字
     */
    text: string;
    setLabel(text: any, textStyle: any): void;
    /**
     * Parse from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): Label;
  }

  declare namespace Path {
    /**
     * 动态路线配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      style: Cesium.PathGraphics.ConstructorOptions;
    };
  }

  /**
   * 动态路线
   * @param options - 参数
   */
  declare class Path extends BasePoint {
    constructor(options: Path.Options);
    /**
     * 设置图片
     * @param billboardStyle - 样式
     */
    setBillboard(
      billboardStyle: Cesium.BillboardGraphics.ConstructorOptions
    ): Graphic;
    /**
     * Parse from entity
     * @param entity - 实体
     * @returns this
     */
    static fromEntity(entity: Cesium.Entity): Path;
  }

  declare namespace Plane {
    /**
     * 平面配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式
     * @property [plane = {normal:'Z',distance:0}] - plane
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      style: Cesium.PlaneGraphics.ConstructorOptions;
      plane?: any;
    };
  }

  /**
   * 平面
   * @param options - 参数
   */
  declare class Plane extends BasePoint {
    constructor(options: Plane.Options);
    /**
     * 宽
     */
    width: number;
    /**
     * 高
     */
    height: number;
    /**
     * 距离
     */
    distance: number;
  }

  declare namespace Point {
    /**
     * 点配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position | string;
      style: Cesium.PointGraphics.ConstructorOptions;
    };
  }

  /**
   * 点
   * @param options - 参数
   */
  declare class Point extends BasePoint {
    constructor(options: Point.Options);
    /**
     * Parse from entity
     * @param entity - 实体
     * @returns this
     */
    static fromEntity(entity: Cesium.Entity): Point;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns this
     */
    static fromDraw(layer: GraphicLayer, options: any): Point;
  }

  declare namespace Polygon {
    /**
     * 多边形配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.PolygonGraphics.ConstructorOptions;
    };
    /**
     * 多边形配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.PolygonGraphics.ConstructorOptions;
    };
  }

  /**
   * 多边形
   * @param options - 参数
   */
  declare class Polygon extends Graphic {
    constructor(options: Polygon.Options);
    /**
     * 多边形内环坐标
     */
    holes: string | String[] | Position[];
    /**
     * 多边形及其孔的线性环的层次结构
     */
    readonly hierarchy: Cesium.PolygonHierarchy;
    /**
     * 边界坐标
     */
    readonly outlinePositions: Cesium.Cartesian3[];
    /**
     * Parse from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): any;
  }

  declare namespace Polyline {
    /**
     * 线配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.PolylineGraphics.ConstructorOptions;
    };
  }

  /**
   * 线
   * @param options - 参数
   */
  declare class Polyline extends BasePoly {
    constructor(options: Polyline.Options);
    /**
     * 从 entity 转换
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): Polyline;
  }

  declare namespace PolylineVolume {
    /**
     * 线体配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.PolylineVolumeGraphics.ConstructorOptions;
    };
  }

  /**
   * 线体
   * @param options - 参数
   */
  declare class PolylineVolume extends BasePoly {
    constructor(options: PolylineVolume.Options);
    /**
     * 外围形状点集
     */
    shape: any[];
    /**
     * Parses from entity
     * @param entity - 实体
     * @param shape - 外围形状点集
     * @returns this
     */
    static fromEntity(
      entity: Cesium.Entity,
      shape: Cesium.Cartesian2[]
    ): PolylineVolume;
  }

  declare namespace Rectangle {
    /**
     * 矩形配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.RectangleGraphics.ConstructorOptions;
    };
  }

  /**
   * 矩形
   * @param options - 参数
   */
  declare class Rectangle extends Graphic {
    constructor(options: Rectangle.Options);
    /**
     * 中心点
     */
    readonly center: Position;
    /**
     * 面积
     */
    readonly area: number;
    /**
     * 边界坐标
     */
    readonly outlinePositions: Cesium.Cartesian3[];
  }

  /**
   * 扇形
   * @param options - 参数
   */
  declare class Sector extends Graphic {
    constructor(options: Polygon.Options);
    /**
     * 三个点坐标集合
     */
    positions: string | String[] | Position[];
  }

  declare namespace Wall {
    /**
     * 墙配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.WallGraphics.ConstructorOptions;
    };
  }

  /**
   * 墙
   * @param options - 参数
   */
  declare class Wall extends BasePoly {
    constructor(options: Wall.Options);
    /**
     * Parses from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): Wall | any;
  }

  declare namespace Drill {
    /**
     * 钻孔配置项
     * @property [通用参数] - Graphic通用参数
     * @property [radius = 15] - 钻孔半径
     * @property position - 钻孔位置
     * @property [renderWay = 1] - 渲染方式 1 ：颜色 2 ：纹理
     * @property [radialSegments = 128] - 分隔数
     * @property layers - 分层信息
     */
    type Options = {
      通用参数?: Graphic.Options;
      radius?: number;
      position: Position | string;
      renderWay?: number;
      radialSegments?: number;
      layers: Drill.Layer[];
    };
    /**
     * 钻孔分层信息
     * @property maxz - 钻孔分层上顶高程值
     * @property minz - 钻孔分层下底高程值
     * @property render - 渲染颜色或者纹理图片
     * @property attr - 其他属性
     */
    type Layer = {
      maxz: number;
      minz: number;
      render: string;
      attr: any;
    };
  }

  /**
   * 钻孔对象
   * @param options - 参数
   */
  declare class Drill extends Graphic {
    constructor(options: Drill.Options);
    /**
     * 长度
     */
    readonly length: number;
    /**
     * 顶部z
     */
    readonly topZ: number;
    /**
     * 底部z
     */
    readonly bottomZ: number;
    /**
     * 半径
     */
    radius: number;
    /**
     * 垂向拉伸
     */
    zScale: number;
    /**
     * 设置样式
     */
    setStyle(style: any): Graphic;
  }

  declare namespace Drill2 {
    /**
     * 钻孔配置项
     * @property [通用参数] - Graphic通用参数
     * @property [radius = 15] - 钻孔半径
     * @property [renderWay = 1] - 渲染方式 1 ：颜色 2 ：纹理
     * @property [radialSegments = 128] - 分隔数
     * @property layers - 分层信息
     */
    type Options = {
      通用参数?: Graphic.Options;
      radius?: number;
      renderWay?: number;
      radialSegments?: number;
      layers: Drill2.Layer[];
    };
    /**
     * 钻孔分层信息
     * @property topPosition - 钻孔分层上顶点坐标
     * @property bottomPosition - 钻孔分层下顶点坐标
     * @property render - 渲染颜色或者纹理图片
     * @property attr - 其他属性
     */
    type Layer = {
      topPosition: Position;
      bottomPosition: Position;
      render: string;
      attr: any;
    };
  }

  /**
   * 不规则钻孔对象
   * @param options - 参数
   */
  declare class Drill2 extends Graphic {
    constructor(options: Drill2.Options);
    /**
     * 长度
     */
    readonly length: number;
    /**
     * 顶部z
     */
    readonly topZ: number;
  }

  /**
   * 地质对象基础类
   */
  declare class Geology extends BasePrimitive {
    constructor(options: any);
    /**
     * 几何外包球
     */
    readonly boundingSphere: Cesium.BoundingSphere;
    /**
     * 几何变换矩阵
     */
    readonly modelMatrix: Cesium.Matrix4;
    /**
     * 位置
     */
    position: string | String[] | Position[];
    /**
     * 垂向拉伸
     */
    zScale: number;
    /**
     * 垂向偏移
     */
    zOffset: number;
    /**
     * 模型透明度
     */
    alpha: number;
    /**
     * 设置图层颜色
     * @param instanceId - instanceId
     * @param [color = '#ff0000'] - 颜色值
     */
    setLayerColor(instanceId: any, color?: string): void;
    /**
     * 图层闪烁
     * @param instanceId - instanceId
     * @param [color = '#ff0000'] - 颜色值
     * @param [time = 1] - 闪烁时间，单位秒
     * @returns 异步
     */
    flash(instanceId: any, color?: string, time?: number): Promise;
  }

  declare namespace Section {
    /**
     * 剖面配置项
     * @property [通用参数] - Graphic通用参数
     * @property [dataType = 1] - 数据类型 1：大地坐标 2：投影坐标
     * @property positions - 剖面线
     * @property [renderWay = 1] - 渲染方式 1 ：颜色 2 ：纹理
     * @property [depthScale = false] - 是否为埋深拉伸
     * @property layers - 分层信息
     */
    type Options = {
      通用参数?: Graphic.Options;
      dataType?: number;
      positions: Position[];
      renderWay?: number;
      depthScale?: number;
      layers: Section.Layer[];
    };
    /**
     * 剖面分层信息
     * @property [vertexes] - 顶点坐标
     * @property triangles - 三角形索引 可以为空，按每三个点一个三角形
     * @property colors - 顶点颜色
     * @property render - 渲染颜色或者纹理图片
     * @property attr - 其他属性
     */
    type Layer = {
      vertexes?: Number[];
      triangles: Number[];
      colors: Number[];
      render: string;
      attr: any;
    };
  }

  /**
   * 剖面对象
   * @param options - 参数
   */
  declare class Section extends Graphic {
    constructor(options: Section.Options);
    /**
     * 长度
     */
    readonly length: number;
    /**
     * 深度
     */
    readonly depth: number;
    /**
     * 顶部z
     */
    readonly topZ: number;
    /**
     * 底部z
     */
    readonly bottomZ: number;
    /**
     * 垂向拉伸
     */
    zScale: number;
    /**
     * 设置样式
     */
    setStyle(): Graphic;
  }

  declare namespace Tin {
    /**
     * xModel TIN对象配置项
     * @property position - tin位置
     * @property [dataType = 1] - 数据类型 1：大地坐标 2：投影坐标
     * @property layers - 分层信息
     */
    type Options = {
      position: Position | string;
      dataType?: number;
      layers: Tin.Layer[];
    };
    /**
     * xModel TIN对象单tin信息
     * @property triangles - 三角形索引
     * @property vertexes - 顶点坐标 (绝对坐标)
     * @property color - 顶点颜色(支持逐顶点和统一服色)
     * @property attr - 其他属性
     */
    type Layer = {
      triangles: Number[];
      vertexes: Number[];
      color: Number[] | string;
      attr: any;
    };
  }

  /**
   * xModel TIN对象
   * @param options - 参数
   */
  declare class Tin extends Geology {
    constructor(options: Tin.Options);
  }

  declare namespace Graphic {
    /**
     * Graphic对象配置项
     * @property [groupId = '-1'] - 组id
     * @property [id = 'Util.uuid()'] - id
     * @property [uuid = 'Util.uuid()'] - uuid 唯一编码 内部管理键
     * @property [name = '未命名'] - 名称
     * @property [style = {}] - 样式,根据各个子类类型进行配置对应样式
     * @property [attr = {}] - 附加属性
     * @property [show = true] - 显隐控制
     * @property position - 点类几何
     * @property positions - 线类、面类几何，位置对象
     */
    type Options = {
      groupId?: string;
      id?: string;
      uuid?: string;
      name?: string;
      style?: any;
      attr?: any;
      show?: boolean;
      position: Position | string | any[] | Cesium.Property | Cesium.Cartesian3;
      positions:
        | Position[]
        | String[]
        | any[][][]
        | Cesium.Property
        | Cesium.Cartesian3[];
    };
  }

  /**
   * 图形基类
   * @param options - 参数
   */
  declare class Graphic {
    constructor(options: Graphic.Options);
    /**
     * 唯一编码
     */
    readonly graphicId: string;
    /**
     * 图形id
     */
    id: string;
    /**
     * 图形名称
     */
    name: string;
    /**
     * groupId
     */
    groupId: string | any;
    /**
     * 图形显隐
     */
    show: boolean;
    /**
     * 图形属性
     */
    attr: any;
    /**
     * 图形是否允许DrillPick
     */
    allowDrillPicking: boolean;
    /**
     * 图形事件
     */
    readonly graphicEvent: GraphicEvent;
    /**
     * 图形实例
     */
    readonly delegate: Enitity | Primitive | any[];
    /**
     * 图形状态
     */
    readonly state: State;
    /**
     * 图形contextMenu
     */
    contextMenu: string;
    /**
     * 中心点
     */
    readonly center: Position;
    /**
     * 中心点世界坐标
     */
    earthPosition: Cesium.Cartesian3;
    /**
     * 外包矩形
     */
    boundingRectangle: Cesium.Rectangle;
    /**
     * 外包矩形 {minx.miny,maxx,maxy}
     */
    boundingRectangleLngLat: any;
    /**
     * 样式
     */
    style: any;
    /**
     * 附加的label文本对象
     */
    readonly label: Cesium.Label;
    /**
     * 笛卡尔坐标
     */
    cartesians: Cesium.Cartesian3[];
    /**
     * 笛卡尔坐标
     */
    cartesian: Cesium.Cartesian3;
    /**
     * 位置是否是动态变化属性
     */
    callbackProperty: boolean;
    /**
     * 变换矩阵
     */
    modelMatrix: Cesium.Matrix4;
    /**
     * 类型
     */
    readonly type: GraphicType;
    /**
     * 编辑器
     */
    readonly positionEditor: PositionEditor;
    /**
     * 是否可以编辑位置
     */
    enablePositionEditor: boolean;
    /**
     * 所属图层
     */
    readonly layer: GraphicLayer;
    /**
     * 设置标注
     * @param text - 文字
     * @param textStyle - 样式
     */
    setLabel(
      text: string | CallbackProperty,
      textStyle: Cesium.LabelGraphics.ConstructorOptions
    ): Graphic;
    /**
     * 设置样式
     * @param style - 具体对应各几何类型的样式
     */
    setStyle(style: any): Graphic;
    /**
     * 设置边框样式
     */
    setOutlineStyle(): void;
    /**
     * 设置模型
     * @param model - 模型uri
     * @param modelStyle - 样式
     */
    setModel(
      model: string,
      modelStyle: Cesium.ModelGraphics.ConstructorOptions
    ): Graphic;
    /**
     * 将矢量数据导出为GeoJSON格式规范对象。
     */
    toGeoJSON(options: any): void;
    /**
     * 从图层中移除
     */
    remove(): Graphic;
    /**
     * 添加到图层 (同layer.addGraphic)
     * @param layer - 图层
     */
    addTo(layer: Layer): Graphic;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyTo}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
    /**
     * Subscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns this
     */
    on(
      type: GraphicEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Graphic;
    /**
     * Unsubscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns this
     */
    off(
      type: GraphicEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Graphic;
    /**
     * Trigger subscription event
     * @param type - 事件类型
     * @param params - 参数
     * @returns this
     */
    fire(type: GraphicEventType, params: any): Graphic;
    /**
     * 注册图形类型
     * @param type - 类型
     */
    static registerType(type: string): void;
  }

  /**
   * 图形类型
   */
  declare enum GraphicType {}

  /**
   * html点
   * @param options - 参数
   * @param options.content - html内容
   */
  declare class DivIcon extends Graphic {
    constructor(options: { content: string });
    /**
     * 图形显隐
     */
    show: boolean;
    /**
     * 位置
     */
    position: any[] | string;
    /**
     * 内容
     */
    content: Element | string;
    /**
     * 不可用
     * @param text - 文字
     * @param textStyle - 样式
     * @returns this
     */
    setLabel(text: string, textStyle: string): DivIcon;
    /**
     * 设置样式
     * @param style - {className} 样式
     * @returns this
     */
    setStyle(style: any): DivIcon;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyTo}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
    /**
     * Parse from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): Billboard;
  }

  declare namespace Model {
    /**
     * 模型配置项
     * @property position - 位置
     * @property style - 样式
     */
    type Options = {
      position: Position | string;
      style: Cesium.ModelGraphics.ConstructorOptions;
    };
  }

  /**
   * @param options - 参数
   */
  declare class Model extends Graphic {
    constructor(options: Model.Options);
    /**
     * 模型路径
     */
    modelUrl: string;
    /**
     * 自动旋转角
     */
    rotateAmount: number;
    /**
     * Parse from entity
     */
    static fromEntity(entity: Cesium.Entity, modelUrl: string): Model;
    /**
     * 设置模型
     * @param model - 模型uri
     * @param modelStyle - 样式
     */
    setModel(
      model: string,
      modelStyle: Cesium.ModelGraphics.ConstructorOptions
    ): Graphic;
  }

  /**
   * Cesium3DTileset
   * @param options - 参数
   */
  declare class Tileset extends Graphic {
    constructor(options: Cesium.Cesium3DTileset.Options);
    /**
     * 异步回调
     */
    readonly readyPromise: Promise<Cesium3DTileset>;
    /**
     * 数据外包球
     */
    readonly boundingSphere: Cesium.BoundingSphere | null;
    /**
     * 4x4变换矩阵
     */
    readonly modelMatrix: Cesium.Matrix4;
    /**
     * 关闭高亮
     */
    closeHighlight(): void;
    /**
     * 设置位置
     * @param position - 位置
     * @returns this
     */
    setPosition(position: Position): Tileset;
    /**
     * 设置三个方向角
     * @param heading - 旋转角角度值
     * @param pitch - 俯仰角角度值
     * @param roll - 翻滚角角度值
     */
    setHeadingPitchRoll(heading: number, pitch: number, roll: number): Tileset;
    setLabel(text: any, textStyle: any): void;
    /**
     * 贴地处理
     * @returns this
     */
    clampToGround(): Tileset;
    /**
     * 设置高度
     * @param height - 高度值
     * @param isAbsolute - 是否是绝对高度
     * @returns this
     */
    setHeight(height: number, isAbsolute: boolean): Tileset;
    /**
     * 设置放缩系数
     * @param scale - 放缩系数
     * @returns this
     */
    setScale(scale: number): Tileset;
    /**
     * Sets feature property
     */
    setProperties(properties: any): Tileset;
    /**
     * 自定义shader(替换)
     */
    setCustomShader(fragmentShader: string | Cesium.CustomShader): Tileset;
    /**
     * 追加Shader
     */
    appendFS(fragmentShader: any): Tileset;
    /**
     * 设置split 方向
     * @param splitDirection - 分隔方向
     * @returns this
     */
    setSplitDirection(splitDirection: Cesium.SplitDirection): Tileset;
    /**
     * Sets style
     * @param style - 样式
     * @returns this
     */
    setStyle(style: Cesium.Cesium3DTileStyle): Tileset;
  }

  /**
   * 粒子系统
   * @param options.position - 位置
   * @param [options.modelMatrix] - 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵,可以替代position。
   * @param options.style - 粒子配置参考cesium文档
   * @param [options.gravity = 0] - 重力因子
   * @param [options.target] - 目标方向
   * @param [options.translation = Cesium.Cartesian3.ZERO] - 三个方向偏移值
   * @param [options.maxHeight = 5000] - 最大可见高度
   */
  declare class ParticleSystem extends BasePointPrimitive {
    constructor(options: {
      position: Position;
      modelMatrix?: Cesium.Matrix4;
      style: Cesium.ParticleSystem.options;
      gravity?: number;
      target?: Cesium.Cartesian3;
      translation?: Cesium.Cartesian3;
      maxHeight?: number;
    });
    /**
     * 位置
     */
    position: string | any[] | Position;
    /**
     * 重力因子
     */
    gravity: number;
    /**
     * 粒子的方向，粒子喷射的目标方向。
     */
    target: Cesium.Cartesian3;
    /**
     * 三个方向偏离距离。
     */
    translation: Cesium.Cartesian3;
  }

  /**
   * 粗单直箭头
   * @param options - 参数
   */
  declare class AssaultDirection extends FineArrow {
    constructor(options: AssaultDirection.Options);
  }

  declare namespace AttackArrow {
    /**
     * 攻击箭头配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.PolygonGraphics.ConstructorOptions;
    };
  }

  /**
   * 攻击箭头
   * @param options - 参数
   */
  declare class AttackArrow extends Polygon {
    constructor(options: AttackArrow.Options);
    /**
     * Parse from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): any;
  }

  /**
   * 曲线旗标
   */
  declare class CurveFlag {
    constructor();
    /**
     * 插值点数据
     */
    calculatePoints(points: any): any[];
    /**
     * 获取点数量
     */
    getPointCount(): number;
  }

  declare namespace DoubleArrow {
    /**
     * 双箭头配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.PolygonGraphics.ConstructorOptions;
    };
  }

  /**
   * 双箭头
   * @param options - 参数
   */
  declare class DoubleArrow extends Polygon {
    constructor(options: DoubleArrow.Options);
    /**
     * Parse from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): any;
  }

  declare namespace FineArrow {
    /**
     * 直箭头配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.PolygonGraphics.ConstructorOptions;
    };
  }

  /**
   * 直箭头
   * @param options - 参数
   */
  declare class FineArrow extends Polygon {
    constructor(options: FineArrow.Options);
    /**
     * Parse from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): any;
  }

  declare namespace GatheringPlace {
    /**
     * 聚集地配置项
     * @property [通用参数] - Graphic通用参数
     * @property [positions = []] - 坐标点
     * @property style - 样式
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions?: Position[] | String[];
      style: Cesium.PolygonGraphics.ConstructorOptions;
    };
  }

  /**
   * 聚集地
   * @param options - 参数
   */
  declare class GatheringPlace extends Polygon {
    constructor(options: GatheringPlace.Options);
    /**
     * Parse from entity
     * @param entity - 实体
     */
    static fromEntity(entity: Cesium.Entity): any;
  }

  /**
   * 弓形
   */
  declare class Lune extends Polygon {
    constructor();
  }

  /**
   * 直角旗标
   */
  declare class RectFlag {
    constructor();
  }

  /**
   * 分队战斗行动
   * @param options - 参数
   */
  declare class SquadCombat extends AttackArrow {
    constructor(options: SquadCombat.Options);
  }

  /**
   * 燕尾攻击箭头
   * @param options - 参数
   */
  declare class TailedAttackArrow extends Polygon {
    constructor(options: TailedAttackArrow.Options);
  }

  /**
   * 分队战斗行动
   * @param options - 参数
   */
  declare class TailedSquadCombat extends AttackArrow {
    constructor(options: TailedSquadCombat.Options);
  }

  /**
   * 三角旗标
   */
  declare class TriangleFlag extends Polygon {
    constructor();
    /**
     * 插值点数据
     */
    calculatePoints(points: any): any[];
  }

  /**
   * 图元点类基类
   */
  declare class BasePointPrimitive extends BasePrimitive {
    constructor();
    /**
     * 位置
     */
    position: string | any[] | Position;
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 设置并添加动画轨迹位置，按“指定时间”运动到达“指定位置”添加。
     * @param [currTime = 10] - 指定时间, 默认为当前时间10秒后。 当为Number时，可以传入当前时间延迟的秒数。
     */
    addDynamicPosition(
      position: Position,
      currTime?: Cesium.JulianDate | number
    ): void;
    /**
     * 异步计算更新坐标进行贴地(或贴模型)
     */
    clampToGround(): void;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyTo}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
    /**
     * 4x4变换矩阵
     */
    readonly modelMatrix: Cesium.Matrix4;
  }

  /**
   * Primitive 线、面类基类
   */
  declare class BasePolyPrimitive extends BasePrimitive {
    constructor();
    /**
     * 位置
     */
    positions: string | String[] | Position[];
    /**
     * 中心点
     */
    readonly center: Position;
    /**
     * 几何外包球
     */
    readonly boundingSphere: Cesium.BoundingSphere;
    /**
     * 长度
     */
    readonly distance: number;
  }

  /**
   * Primitive 基类
   */
  declare class BasePrimitive extends Graphic {
    constructor();
    /**
     * 几何外包球
     */
    readonly boundingSphere: Cesium.BoundingSphere;
    /**
     * 附加的label文本对象
     */
    readonly label: Cesium.Label;
    /**
     * 图形显隐
     */
    show: boolean;
    /**
     * 4x4变换矩阵
     */
    readonly modelMatrix: Cesium.Matrix4;
    /**
     * 设置标注
     * @param text - 文字
     * @param textStyle - 样式
     */
    setLabel(
      text: string,
      textStyle: Cesium.Label.ConstructorOptions
    ): BasePrimitive;
    /**
     * 设置样式
     * @param style - 样式
     * @returns this
     */
    setStyle(style: Cesium.Billboard.ConstructorOptions): BasePrimitive;
    /**
     * 飞向
     */
    flyTo(options?: any): void;
  }

  declare namespace BillboardPrimitive {
    /**
     * 图片点配置项
     * @property position - 位置
     * @property style - 样式
     */
    type Options = {
      position: Position | string;
      style: Cesium.Billboard;
    };
  }

  /**
   * 图片点
   * @param options - 参数
   */
  declare class BillboardPrimitive extends BasePointPrimitive {
    constructor(options: BillboardPrimitive.Options);
  }

  declare namespace BoxPrimitive {
    /**
     * 立方体 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property positions - 位置
     * @property style - 样式,参考Cesium.BoxGeometry，支持color
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions: Position[] | string | any[][];
      style: Cesium.BoxGeometry.options;
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 立方体 Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class BoxPrimitive extends BasePointPrimitive {
    constructor(options: BoxPrimitive.Options);
  }

  declare namespace CirclePrimitive {
    /**
     * 圆 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式,参考Cesium.CircleGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position[] | string | any[][];
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 圆 Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class CirclePrimitive extends BasePointPrimitive {
    constructor(options: CirclePrimitive.Options);
    /**
     * 4x4变换矩阵
     */
    readonly modelMatrix: Cesium.Matrix4;
  }

  declare namespace CorridorPrimitive {
    /**
     * 走廊 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property positions - 位置
     * @property style - 样式,参考Cesium.CorridorGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions: Position[] | string | any[][];
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * Primitive走廊
   * @param options - 参数
   */
  declare class CorridorPrimitive extends BasePolyPrimitive {
    constructor(options: CorridorPrimitive.Options);
  }

  declare namespace CylinderPrimitive {
    /**
     * 圆锥 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property style - 样式,参考Cesium.CylinderGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 圆锥 Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class CylinderPrimitive extends BasePointPrimitive {
    constructor(options: CylinderPrimitive.Options);
  }

  declare namespace EllipsePrimitive {
    /**
     * 椭圆 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式,参考Cesium.EllipseGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position[] | string | any[][];
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 椭圆 Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class EllipsePrimitive extends BasePointPrimitive {
    constructor(options: CylinderPrimitive.Options);
  }

  declare namespace EllipsoidPrimitive {
    /**
     * 椭球 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式,参考Cesium.EllipsoidGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position[] | string | any[][];
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 椭球 Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class EllipsoidPrimitive extends BasePointPrimitive {
    constructor(options: EllipsoidPrimitive.Options);
  }

  declare namespace LabelPrimitive {
    /**
     * Primitive 文字配置项
     * @property position - 位置
     * @property style - 样式
     */
    type Options = {
      position: Position | string;
      style: Cesium.LabelPrimitive;
    };
  }

  /**
   * Primitive文字
   * @param options - 参数
   */
  declare class LabelPrimitive extends BasePointPrimitive {
    constructor(options: LabelPrimitive.Options);
    /**
     * 设置标注(无用)
     * @param text - 文字
     * @param textStyle - 样式
     */
    setLabel(
      text: string,
      textStyle: Cesium.Label.ConstructorOptions
    ): BasePrimitive;
  }

  declare namespace LightCylinderPrimitive {
    /**
     * 发光柱配置项
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 位置
     * @property [style.length = 1000] - 长度
     * @property [style.topRadius = 35] - 顶部半径
     * @property [style.bottomRadius = 50] - 底部半径
     * @property [style.particleImage] - 粒子图片
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position;
      style: {
        length?: number;
        topRadius?: number;
        bottomRadius?: number;
        particleImage?: number;
      };
    };
  }

  /**
   * 发光柱
   */
  declare class LightCylinderPrimitive extends BasePointPrimitive {
    constructor(options: LightCylinderPrimitive.Options);
    /**
     * 位置
     */
    position: string | String[] | Position[];
    /**
     * 构建圆柱实例
     */
    _createCylinderInstance(
      topPts: Cesium.Cartesian3[],
      bottomPts: Cesium.Cartesian3[],
      height: number
    ): Cesium.GeometryInstance;
  }

  declare namespace ModelPrimitive {
    /**
     * 模型Primitive配置项
     * @property position - 位置
     * @property style - 样式
     */
    type Options = {
      position: Position | string;
      style: Cesium.Model;
    };
  }

  /**
   * 模型Primitive
   * @param options - 参数
   */
  declare class ModelPrimitive extends BasePointPrimitive {
    constructor(options: ModelPrimitive.Options);
    /**
     * 垂向偏移
     */
    zOffset: number;
    /**
     * 几何外包球
     */
    readonly boundingSphere: Cesium.BoundingSphere;
    /**
     * 飞向
     */
    flyTo(options?: any): void;
    /**
     * 位置
     */
    position: string | any[] | Position;
  }

  declare namespace PointPrimitive {
    /**
     * Primitive点配置项
     * @property position - 位置
     * @property style - 样式
     */
    type Options = {
      position: Position | string;
      style: Cesium.PointPrimitive;
    };
  }

  /**
   * Primitive点
   * @param options - 参数
   */
  declare class PointPrimitive extends BasePointPrimitive {
    constructor(options: PointPrimitive.Options);
  }

  declare namespace PolygonPrimitive {
    /**
     * 面 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property positions - 位置
     * @property style - 样式,参考Cesium.PolygonGeometry，支持color，clampToGround
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [options.depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [options.vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [options.interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [options.compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [options.releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [options.allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [options.cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [options.asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions: Position[] | string | any[][];
      style: Cesium.PolygonGeometry.options;
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
    };
  }

  /**
   * Primitive多边形
   * @param options - 参数
   */
  declare class PolygonPrimitive extends BasePolyPrimitive {
    constructor(options: PolygonPrimitive.Options);
  }

  declare namespace PolylinePrimitive {
    /**
     * Primitive线配置项
     * @property positions - 位置
     * @property style - 参考Cesium.Polyline参数
     */
    type Options = {
      positions: Position[] | string;
      style: Cesium.Polyline;
    };
  }

  /**
   * Primitive线
   * @param options - 参数
   */
  declare class PolylinePrimitive extends BasePolyPrimitive {
    constructor(options: PolylinePrimitive.Options);
  }

  declare namespace PolylineVolumePrimitive {
    /**
     * 线体 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property positions - 位置
     * @property style - 样式,参考Cesium.PolylineVolumeGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions: Position[] | string | any[][];
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 线体Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class PolylineVolumePrimitive extends BasePolyPrimitive {
    constructor(options: PolylineVolumePrimitive.Options);
  }

  declare namespace RectanglePrimitive {
    /**
     * 矩形 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式,参考Cesium.RectangleGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position[] | string | any[][];
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 矩形 Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class RectanglePrimitive extends BasePointPrimitive {
    constructor(options: RectanglePrimitive.Options);
  }

  /**
   * 道路(未完成)
   * @param options - 参数
   */
  declare class Road extends BasePolyPrimitive {
    constructor(options: Road.Options);
  }

  declare namespace SpherePrimitive {
    /**
     * 球 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property position - 位置
     * @property style - 样式,参考Cesium.SphereGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      position: Position[] | string | any[][];
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 椭球 Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class SpherePrimitive extends BasePointPrimitive {
    constructor(options: SpherePrimitive.Options);
  }

  declare namespace WallPrimitive {
    /**
     * 墙 Primitive图元 支持的样式信息
     * @property [通用参数] - Graphic通用参数
     * @property positions - 位置
     * @property style - 样式,参考Cesium.WallGeometry，支持color
     * @property [style.outline = false] - 是否outline模式
     * @property [style.clampToGround = false] - 是否贴地
     * @property [appearance = new Cesium.PerInstanceColorAppearance()] - 外观
     * @property [attributes] - [cesium原生]每个实例的属性,会覆盖style中属性值。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     */
    type Options = {
      通用参数?: Graphic.Options;
      positions: Position[] | string | any[][];
      style: {
        outline?: boolean;
        clampToGround?: boolean;
      };
      appearance?: Cesium.Appearance;
      attributes?: Cesium.GeometryInstance.attributes;
      depthFailAppearance?: Cesium.Appearance;
      vertexCacheOptimize?: boolean;
      interleave?: boolean;
      compressVertices?: boolean;
      releaseGeometryInstances?: boolean;
      allowPicking?: boolean;
      cull?: boolean;
      asynchronous?: boolean;
    };
  }

  /**
   * 墙 Primitive图元 矢量对象
   * @param options - 参数
   */
  declare class WallPrimitive extends BasePolyPrimitive {
    constructor(options: WallPrimitive.Options);
  }

  declare namespace RoamLine {
    /**
     * 飞行漫游路线配置项
     * @property positions - 位置
     * @property speed - 轨迹的 速度( 单位：千米/小时)
     * @property timeField - 可选当points数组中已有时间值，请传入该值的字段名称，同时speed将失效，已实际传入时间字段为准。
     * @property [startTime = Cesium.JulianDate.now()] - 轨迹的开始时间
     * @property [multiplier = 1] - 轨迹播放的倍率
     * @property [label] - 设置是否显示 文本 和对应的样式
     * @property [model] - 设置是否显示 gltf模型 和对应的样式
     * @property [billboard] - 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项
     * @property [point] - 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项
     * @property [path] - 设置是否显示 轨迹路线 和对应的样式
     * @property [interpolation = false] - 是否LagrangePolynomialApproximation插值，对轨迹进行圆弧状插值
     * @property [interpolationDegree = 2] - 当interpolation为true时，使用的插值程度
     * @property [camera] - 视角模式设置，包括
     * @property [camera.type = 'gs'] - 视角模式类型，包括：'':无、'gs':跟随视角、'dy':第一视角
     * @property [camera.distance = 3000] - 'gs'跟随视角时的 初始俯仰距离值（单位：米）
     * @property [camera.pitch] - 锁定第一视角时，俯仰角
     * @property [camera.followedZ = 10] - 'dy'锁定第一视角，距离运动点的高度（上方）
     * @property [camera.range = 1] - 'dy'锁定第一视角，距离运动点的范围
     * @property [clockRange = Cesium.ClockRange.CLAMPED] - 指定播放的模式 默认：自动停止
     */
    type Options = {
      positions: Position[];
      speed: number | Number[];
      timeField: string;
      startTime?: Cesium.JulianDate;
      multiplier?: number;
      label?: Cesium.LabelGraphics.ConstructorOptions;
      model?: Cesium.ModelGraphics.ConstructorOptions;
      billboard?: Cesium.BillboardGraphics.ConstructorOptions;
      point?: Cesium.PointGraphics.ConstructorOptions;
      path?: Cesium.PathGraphics.ConstructorOptions;
      interpolation?: boolean;
      interpolationDegree?: number;
      camera?: {
        type?: string;
        distance?: string;
        pitch?: string;
        followedZ?: string;
        range?: string;
      };
      clockRange?: Cesium.ClockRange;
    };
  }

  /**
   * 飞行漫游路线管理类 【静态一次性传入的数据】
   * @param options - 参数
   */
  declare class RoamLine extends Graphic {
    constructor(options: RoamLine.Options);
    /**
     * 当前时间对应的坐标位置
     */
    readonly position: Position;
    /**
     * 倍速
     */
    multiplier: number;
    /**
     * 是否暂停
     */
    readonly isPause: any;
    /**
     * 开始漫游
     */
    start(): void;
    /**
     * 停止漫游
     */
    stop(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 继续
     */
    proceed(): void;
    /**
     * 更新视角模式
     */
    setCameraOptions(): void;
    /**
     * 计算贴地线
     * @returns 异步调用
     */
    clampToGround(): Promise;
    /**
     * Subscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns this
     */
    on(
      type: GraphicEventType | RoamingEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Graphic;
    /**
     * Unsubscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns this
     */
    off(
      type: GraphicEventType | RoamingEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Graphic;
    /**
     * Trigger subscription event
     * @param type - 事件类型
     * @param params - 参数
     * @returns this
     */
    fire(type: GraphicEventType | RoamingEventType, params: any): Graphic;
  }

  /**
   * 影像地图工厂类
   */
  declare class ImageryProviderFactory {
    /**
     * Create amap image Provider
     */
    static createAmapImageryProvider(options: any): AmapImageryProvider;
    /**
     * Create baidu image Provider
     */
    static createBaiduImageryProvider(options: any): BaiduImageryProvider;
    /**
     * Create google image Provider
     */
    static createGoogleImageryProvider(options: any): GoogleImageryProvider;
    /**
     * Create tdt image Provider
     */
    static createTdtImageryProvider(options: any): TdtImageryProvider;
    /**
     * Create tencent image Provider
     */
    static createTencentImageryProvider(options: any): TencentImageryProvider;
    /**
     * Create arcgis image Provider
     */
    static createArcGisImageryProvider(
      options: any
    ): Promise<Cesium.ArcGisMapServerImageryProvider>;
    /**
     * Create bing image Provider
     */
    static createBingMapsImageryProvider(
      options: any
    ): Promise<Cesium.BingMapsImageryProvider>;
    /**
     * Create single tile image Provider
     */
    static createSingleTileImageryProvider(options: any): module;
    /**
     * Create WMS image Provider
     */
    static createWMSImageryProvider(options: any): module;
    /**
     * Create WMTS image Provider
     */
    static createWMTSImageryProvider(options: any): module;
    /**
     * Create xyz image Provider
     */
    static createXYZImageryProvider(options: any): module;
    /**
     * Create coord image Provider
     */
    static createCoordImageryProvider(options: any): module;
    /**
     * Create grid image Provider
     */
    static createGridImageryProvider(options: any): module;
    /**
     * Create mapbox image Provider
     */
    static createMapboxImageryProvider(options: any): module;
    /**
     * Create mapbox style image Provider
     */
    static createMapboxStyleImageryProvider(options: any): module;
    /**
     * Create TMS image Provider
     */
    static createTMSImageryProvider(
      options: any
    ): Promise<Cesium.TileMapServiceImageryProvider>;
    /**
     * Create Imagery Provider
     */
    static createImageryProvider(
      type: ImageryType,
      options: any
    ):
      | Cesium.ImageryProvider
      | Promise<Cesium.ArcGisMapServerImageryProvider>
      | Promise<Cesium.BingMapsImageryProvider>
      | Promise<Cesium.TileMapServiceImageryProvider>;
  }

  /**
   * 影像类型
   */
  declare enum ImageryType {
    /**
     * arcgis
     */
    ARCGIS = "arcgis",
    /**
     * 百度
     */
    BAIDU = "baidu",
    /**
     * 必应
     */
    BING = "bing",
    /**
     * 单张图像
     */
    SINGLE_TILE = "single_tile",
    /**
     * WMS
     */
    WMS = "wms",
    /**
     * WMTS
     */
    WMTS = "wmts",
    /**
     * XYZ
     */
    XYZ = "xyz",
    COORD = "coord",
    GRID = "grid",
    /**
     * mapbox
     */
    MAPBOX = "mapbox",
    /**
     * mapbox_style
     */
    MAPBOX_STYLE = "mapbox_style",
    /**
     * tms
     */
    TMS = "tms",
    /**
     * 天地图
     */
    TDT = "tdt",
  }

  /**
   * 百度墨卡托投影
   */
  declare class BaiduMercatorProjection {
    constructor();
    getDistanceByMC(point1: any, point2: any): number;
    /**
     * Calculate the distance between two points according to the latitude and longitude coordinates
     */
    getDistanceByLL(point1: any, point2: any): number | any;
    /**
     * The plane cartesian coordinates are converted to latitude and longitude coordinates
     */
    convertMC2LL(point: any): any;
    /**
     * The latitude and longitude coordinates are converted to plane cartesian coordinates
     */
    convertLL2MC(point: any): any | any;
    convertor(fromPoint: any, factor: any): any;
    getDistance(x1: any, x2: any, y1: any, y2: any): number;
    toRadians(deg: any): number;
    toDegrees(rad: any): number;
    getRange(v: any, a: any, b: any): number;
    getLoop(v: any, a: any, b: any): any;
    lngLatToMercator(point: any): any | any;
    lngLatToPoint(point: any): any;
    /**
     * WebMercator transforms to latitude and longitude
     */
    mercatorToLngLat(point: any): Point | any;
    pointToLngLat(point: any): Point | any;
    /**
     * Latitude and longitude coordinates  transforms to  pixel coordinates
     */
    pointToPixel(point: any, zoom: any, mapCenter: any, mapSize: any): any;
    /**
     * Pixel coordinates transforms to latitude and longitude coordinates
     */
    pixelToPoint(
      pixel: any,
      zoom: any,
      mapCenter: any,
      mapSize: any
    ): Point | any;
    getZoomUnits(zoom: any): number;
  }

  declare class AmapImageryProvider extends Cesium.UrlTemplateImageryProvider {
    constructor(options?: any);
  }

  /**
   * 百度地图服务
   */
  declare class BaiduImageryProvider {
    constructor(options?: any);
    /**
     * Request Image
     */
    requestImage(
      x: any,
      y: any,
      level: any
    ): Promise<HTMLImageElement | HTMLCanvasElement>;
  }

  /**
   * 谷歌地图
   */
  declare class GoogleImageryProvider extends Cesium.UrlTemplateImageryProvider {
    constructor(options?: any);
  }

  /**
   * 天地图影像类型
   */
  declare const enum TiandituMapsStyle {
    IMG_W = "img_w",
    IMG_C = "img_c",
    CIA_W = "cia_w",
    CIA_C = "cia_c",
    VEC_W = "vec_w",
    VEC_C = "vec_c",
    TER_W = "ter_w",
    TER_C = "ter_c",
    CVA_W = "cva_w",
    CVA_C = "cva_c",
    CTA_W = "cta_w",
    CTA_C = "cta_c",
    EIA_W = "eia_w",
    EIA_C = "eia_c",
    EVA_W = "eva_w",
    EVA_C = "eva_c",
  }

  declare namespace TdtImageryProvider {
    /**
     * 天地图WMTS服务配置项
     * @property [key] - 天地图密钥
     * @property [style = 'img_w'] - 地图样式
     * @property [protocol] - 协议
     */
    type ConstructorOptions = {
      key?: String[] | string;
      style?: TiandituMapsStyle;
      protocol?: string;
    };
  }

  /**
   * 天地图WMTS服务
   * @param [options] - 参数
   */
  declare class TdtImageryProvider extends Cesium.WebMapTileServiceImageryProvider {
    constructor(options?: TdtImageryProvider.ConstructorOptions);
  }

  /**
   * 腾讯地图
   */
  declare class TencentImageryProvider extends Cesium.WebMapTileServiceImageryProvider {
    constructor(options?: any);
  }

  declare class AmapMercatorTilingScheme extends Cesium.WebMercatorTilingScheme {
    constructor();
  }

  declare class BaiduMercatorTilingScheme extends Cesium.WebMercatorTilingScheme {
    constructor();
    tileXYToNativeRectangle(
      x: any,
      y: any,
      level: any,
      result: any
    ): module | any;
    positionToTileXY(position: any, level: any, result: any): undefined | any;
  }

  declare namespace BaseLayer {
    /**
     * 图层对象配置项
     * @property [groupId = '-1'] - 组id
     * @property [id = 'Util.uuid()] - id
     * @property [uuid = 'Util.uuid()] - uuid 唯一编码 内部管理键
     * @property [name = '未命名'] - 名称
     */
    type Options = {
      groupId?: string;
      id?: string;
      uuid?: string;
      name?: string;
    };
  }

  /**
   * 图层基类,设置基础属性、基础事件
   * @param options - 图层配置
   */
  declare class BaseLayer {
    constructor(options: BaseLayer.Options);
    /**
     * 唯一编号 内部数据管理使用,包括点击拾取时返回的图层信息
     */
    readonly layerId: string;
    /**
     * id
     */
    readonly id: string | any;
    /**
     * 组id
     */
    groupId: string | any;
    /**
     * 实例
     */
    readonly delegate:
      | Cesium.DataSource
      | Cesium.Primitive
      | any[]
      | Cesium.ImageryLayer;
    /**
     * 图层显隐
     */
    show: boolean;
    /**
     * 图层状态
     */
    readonly state: State;
    /**
     * 图层事件
     */
    readonly layerEvent: LayerEvent;
    /**
     * 场景
     */
    readonly viewer: Viewer;
    /**
     * Clears all graphics
     * Subclasses need to be overridden
     */
    clear(): void;
    /**
     * Removes from the viewer
     */
    remove(): void;
    /**
     * Adds to the viewer
     * @param viewer - 视图
     * @returns this
     */
    addTo(viewer: Viewer): Layer;
    /**
     * 比较图层是否为同一图层
     * @param layer - 比较图层
     * @returns 是否相同
     */
    equal(layer: Layer): boolean;
    /**
     * Subscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns remove callback function
     */
    on(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): Event.RemoveCallback;
    /**
     * Subscribe once event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     */
    once(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): void;
    /**
     * Unsubscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     */
    off(
      type: EventType,
      callback: (...params: any[]) => any,
      context: any
    ): boolean;
    /**
     * 注册图层类型
     * @param type - 类型
     */
    static registerType(type: string): void;
    /**
     * 获取图层类型
     * @param type - 类型
     */
    static getLayerType(type: string): string | undefined;
  }

  /**
   * 矢量图层基类, 其子类是实例化后需添加到三维场景中方可展示各类三维数据
   * @param [通用参数] - BaseLayer通用参数
   * @param options - 图层配置
   */
  declare class Layer extends BaseLayer {
    constructor(通用参数?: BaseLayer.Options, options: any);
    /**
     * 要素数量
     */
    readonly length: number;
    /**
     * 添加 graphic
     * @param graphic - 图形
     */
    addGraphic(graphic: Graphic): Layer;
    /**
     * 添加 graphics
     * @param graphics - 图形集合
     */
    addGraphics(graphics: Graphic[]): Layer;
    /**
     * 移除 graphic
     * @param graphic - 图形
     */
    removeGraphic(graphic: Graphic): Layer;
    /**
     * 移除 graphic
     * @param graphics - 图形
     */
    removeGraphics(graphics: Graphic[]): Layer;
    /**
     * 移除 全部 graphic
     */
    removeAllGraphic(): Layer;
    /**
     * 根据要素id判断要素是否存在
     * @param layer - 自定义图层
     */
    hasGraphic(layer: Graphic): boolean;
    /**
     * 通过id获取图形
     * @param id - id
     */
    getGraphic(id: string): any | undefined;
    /**
     * 通过属性键值获取图层中图形
     * @param attrName - 属性名
     * @param attrVal - 属性值
     */
    getGraphicsByAttr(attrName: string, attrVal: any): Graphic[];
    /**
     * Iterate through each graphic and pass it as an argument to the callback function
     * @param method - 函数
     * @param context - 上下文
     */
    eachGraphic(method: (...params: any[]) => any, context: any): Layer;
    /**
     * Returns all graphics
     */
    getGraphics(): Graphic[];
    /**
     * sets the style, the style will apply to every graphic of the layer
     * Subclasses need to be overridden
     */
    setStyle(style: any): void;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyTo}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
  }

  /**
   * 图层组，将图层按一定的逻辑分组，方便统一管理
   * @param options - 图层配置
   */
  declare class LayerGroup {
    constructor(options: any);
    /**
     * 唯一编号 内部数据管理使用
     */
    readonly id: string;
    /**
     * 图层显隐
     */
    show: boolean;
    /**
     * 图层组事件
     */
    readonly layerGroupEvent: LayerEvent;
    /**
     * 图层组状态
     */
    readonly state: State;
    /**
     * 添加一个图层
     * @param layer - 图层
     * @returns this
     */
    addLayer(layer: Layer): LayerGroup;
    /**
     * 移除一个图层
     * @param layer - 图层
     * @returns this
     */
    removeLayer(layer: Layer): LayerGroup;
    /**
     * 通过id获取图层
     * @param id - id
     * @returns 图层
     */
    getLayer(id: string): Layer | undefined;
    /**
     * 获取所有图层
     */
    getLayers(): Layer[];
    /**
     * 添加是视图
     * @param viewer - 视图
     * @returns this
     */
    addTo(viewer: Viewer): LayerGroup;
    /**
     * 移除
     * @returns this
     */
    remove(): LayerGroup;
    /**
     * 清除
     */
    clear(): void;
  }

  /**
   * 图层类型
   */
  declare enum LayerType {}

  declare namespace ClusterLayer {
    /**
     * Graphic对象配置项
     * @property [size = 18] - 聚合最精细时图像大小
     * @property [pixelRange = 40] - 边界像素范围
     * @property [fontSize = 12] - 字体大小
     * @property [fontColor = Cesium.Color.BLACK] - 字体颜色
     * @property [style = 'circle'] - 样式
     * @property [gradient = {0.0001: Cesium.Color.DEEPSKYBLUE,0.001: Cesium.Color.GREEN,0.01: Cesium.Color.ORANGE,0.1: Cesium.Color.RED }] - 每级聚合图像数量占总数据量的百分比及对应的颜色
     */
    type Options = {
      size?: number;
      pixelRange?: number;
      fontSize?: number;
      fontColor?: Cesium.Color;
      style?: string;
      gradient?: any;
    };
  }

  /**
   * 聚合图层
   * @param [通用参数] - BaseLayer通用参数
   * @param [图层参数] - 聚合图层参数
   */
  declare class ClusterLayer extends Layer {
    constructor(通用参数?: BaseLayer.Options, 图层参数?: ClusterLayer.Options);
    /**
     * Clears all entities
     * @returns this
     */
    clear(): GraphicLayer;
  }

  /**
 * Czml图层
CzmlDataSource,用于将相同类或业务属性的实体放入同一集合
 * @param [通用参数] - BaseLayer通用参数
 * @param options - 图层id等信息
 */
  declare class CzmlLayer extends GeoJsonLayer {
    constructor(
      通用参数?: BaseLayer.Options,
      options: Cesium.CzmlDataSource.LoadOptions
    );
  }

  /**
   * GeoJSON数据图层(ceisum原生)，该类中矢量数据是使用ceisum原生方法加载的entity对象。
   * @param options - 图层id等信息
   * @param [通用参数] - BaseLayer通用参数
   */
  declare class GeoJsonLayer extends Layer {
    constructor(
      options: Cesium.GeoJsonDataSource.LoadOptions,
      通用参数?: BaseLayer.Options
    );
    /**
     * 设置显隐
     */
    show: boolean;
    /**
     * Entity矢量数据 集合
     */
    readonly entities: Cesium.Entity[];
    /**
     * 遍历数据几何
     * @param method - 执行函数
     * @param context - 上下文
     * @returns this
     */
    eachGraphic(method: (...params: any[]) => any, context: any): GeoJsonLayer;
    /**
     * Clears all entities
     * @returns this
     */
    clear(): GeoJsonLayer;
  }

  /**
 * gpx图层
GpxDataSource,处理 GPS 交换格式 (GPX)
 * @param [通用参数] - BaseLayer通用参数
 * @param options - 图层id等信息
 */
  declare class GpxLayer extends GeoJsonLayer {
    constructor(
      通用参数?: BaseLayer.Options,
      options: Cesium.GpxDataSource.LoadOptions
    );
  }

  /**
   * 几何图层
   * 图层用于添加多种类型的数据(PointCollection、PolylineCollection、billboardCollection、LabelCollection,PrimitiveCollection,CustomDataSource)
   * @param [通用参数] - BaseLayer通用参数
   */
  declare class GraphicLayer extends Layer {
    constructor(通用参数?: BaseLayer.Options);
    /**
     * 点集合
     */
    readonly pointCollection: Cesium.PointCollection;
    /**
     * 线集合
     */
    readonly polylineCollection: Cesium.PolylineCollection;
    /**
     * Billboard集合
     */
    readonly billboardCollection: Cesium.BillboardCollection;
    /**
     * Label集合
     */
    readonly labelCollection: Cesium.LabelCollection;
    /**
     * primitive集合
     */
    readonly primitiveCollection: Cesium.PrimitiveCollection;
    /**
     * entity集合
     */
    readonly dataSource: Cesium.CustomDataSource;
    /**
     * Clears all
     * @returns this
     */
    clear(): PrimitiveLayer;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyTo}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
    /**
     * 将矢量数据导出为GeoJSON格式规范对象。
     * @param options - 参数对象:
     * @param [options.noAlt = false] - 不导出高度值
     */
    toGeoJSON(options: { noAlt?: boolean }): void;
    /**
     * 加载通过绘制功能导出生成的json数据
     */
    loadGeoJSON(geojson: any): void;
    /**
     * 绘制矢量数据，绘制的数据会加载在当前图层
     * @param options - 绘制参数，包含：
     * @param options.type - 类型
     * @param [options.style] - 矢量数据样式，具体参考各个Graphic支持的style
     * @param [options.callback] - 绘制创建完成的回调方法
     */
    draw(options: {
      type: GraphicType | string;
      style?: any;
      callback?: (...params: any[]) => any;
    }): void;
  }

  /**
   * 设置不同间距保留的小数位数不一样
   * @param dDeg - 间距（弧度）
   * @returns 保留的小数位数
   */
  declare function gridPrecision(dDeg: number): number;

  /**
   * 度转换为度分秒
   * @param deg - 度
   * @param isLat - 是否是纬度
   * @returns 度分秒
   */
  declare function convertDEGToDMS(deg: number, isLat: boolean): string;

  /**
   * 全球经纬网
   * @example
   * const graticulesObj = new GraticuleLayer({
   *  meridians: false
   * });
   * @param [options.color = Color.WHITE.withAlpha(.5)] - The line color. Defaults to Color.WHITE.withAlpha(.5)
   * @param [options.meridiansColor = Color.YELLOW] - The meridians line color, show only meridians option is true. Defaults to Color.YELLOW
   * @param [options.debounce = 500] - The render debounce value, defaults to 500ms
   * @param [options.gridCount = 15] - Lines in screen, defaults to 15
   * @param [options.meridians = true] - If show the colored meridians, defaults to true
   * @param [options.labelOptions] - The label style
   */
  declare class GraticuleLayer extends GraphicLayer {
    constructor(options: {
      color?: Cesium.Color;
      meridiansColor?: Cesium.Color;
      debounce?: number;
      gridCount?: number;
      meridians?: boolean;
      labelOptions?: Cesium.Label;
    });
  }

  /**
   * 热力图层
   * @param [options] - BaseLayer通用参数
   * @param [options.clampGround = false] - 是否贴地
   * @param [options.classificationType = Cesium.ClassificationType.BOTH] - 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。
   * @param options.radius - 每个值对应的缓冲半径
   * @param [options.height = 120] - 高度
   */
  declare class HeatLayer extends Layer {
    constructor(options?: {
      clampGround?: boolean;
      classificationType?: boolean;
      radius: any;
      height?: number;
    });
    /**
     * 设置数据点
     * @param positions - {lng,lat,value}
     */
    setPositions(positions: object[]): void;
    /**
     * 追加点
     * @param position - {lng,lat,value}
     */
    addPosition(position: any): void;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyTo}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
    /**
     * 图层显隐
     */
    show: boolean;
  }

  /**
   * html图形图层
   * @param [通用参数] - BaseLayer通用参数
   */
  declare class HtmlLayer extends Layer {
    constructor(通用参数?: BaseLayer.Options);
    /**
     * 图层显隐
     */
    show: boolean;
    /**
     * Clears all divIcons
     */
    clear(): HtmlLayer;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyToBoundingSphere}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
  }

  declare namespace ImageLayer {
    /**
     * 配置信息
     * @property type - 图层类型
     * @property [imageryProvider] - Cesium各个ImageryProvider或者自定义ImageryProvider,未定义的话根据type构建imageryProvider
     * @property options - 图层其他参数，参考Cesium各个ImageryProvider构造函数
     * @property options - 图层其他参数，参考Cesium.ImageryLayer构造函数
     * @property [crs] - 不同的值使用不同的投影方式tilingScheme，“EPSG3857”：WebMercatorTilingScheme，“EPSG4326”：GeographicTilingScheme，"GCJ-02":AmapMercatorTilingScheme
     * @property [filterColor] - 滤镜颜色
     * @property [invertColor] - 反设颜色
     */
    type Options = {
      type: ImageryType;
      imageryProvider?: Cesium.ImageryProvider;
      options: Cesium.ImageryLayer.options;
      options: Cesium.ImageryLayer.options;
      crs?: string;
      filterColor?: string;
      invertColor?: boolean;
    };
  }

  /**
   * 影像图层 支持 ImageryType
   * @param options - 参数
   * @param [通用参数] - BaseLayer通用参数
   */
  declare class ImageLayer extends BaseLayer {
    constructor(options: ImageLayer.Options, 通用参数?: BaseLayer.Options);
    /**
     * 异步构建
     * @returns 图层实例
     */
    static build(options: ImageLayer.Options): ImageLayer;
    /**
     * imageLayer 瓦片图层对应的内部ImageryLayer对象
     */
    readonly imageLayer: Cesium.ImageryLayer;
    /**
     * imageryProvider 瓦片图层对应的内部ImageryProvider对象
     */
    readonly imageryProvider: Cesium.XXXImageryProvider;
    /**
     * 透明度。从0.0到1.0。
     */
    alpha: number;
    /**
     * 亮度，取值范围：0.0-1.0。
     */
    brightness: number;
    /**
     * 对比度。 1.0使用未修改的图像颜色，小于1.0会降低对比度，而大于1.0则会提高对比度。
     */
    contrast: number;
    /**
     * 伽马校正值。 1.0使用未修改的图像颜色。
     */
    gamma: number;
    /**
     * 色调。 0.0 时未修改的图像颜色。
     */
    hue: number;
    /**
     * 饱和度。 1.0使用未修改的图像颜色，小于1.0会降低饱和度，而大于1.0则会增加饱和度。
     */
    saturation: number;
    /**
     * 图层数据矩形范围。
     */
    rectangle: Cesium.Rectangle;
    /**
     * 获取wms元数据
     * @returns Rectangle
     */
    static getMateData(): Cesium.Rectangle;
    /**
     * GetMap获取数据
     * @returns feature集合
     */
    getFeatureJson(param: any): Promise<object>;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyTo}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
    /**
     * 图层置顶
     */
    raiseToTop(): void;
    /**
     * 图层显隐
     */
    show: boolean;
  }

  /**
 * Kml图层
KmlDataSource,用于将相同类或业务属性的实体放入同一集合
 * @param [通用参数] - BaseLayer通用参数
 * @param options - 图层id等信息
 */
  declare class KmlLayer extends GeoJsonLayer {
    constructor(
      通用参数?: BaseLayer.Options,
      options: Cesium.KmlDataSource.LoadOptions
    );
  }

  /**
   * 矢量图形图层
   * 图形层用于添加各种实体
   * @param [options] - BaseLayer通用参数
   */
  declare class PrimitiveLayer extends Layer {
    constructor(options?: BaseLayer.Options);
  }

  /**
   * S3M图层
   * @param [options = {}] - BaseLayer通用参数
   */
  declare class S3MLayer extends Layer {
    constructor(options?: BaseLayer.Options);
    /**
     * 飞向
     * @param options - 同 {@link viewer.camera#flyToBoundingSphere}
     */
    flyTo(options: any): void;
  }

  /**
   * 地形服务图层
   * @param [通用参数] - BaseLayer通用参数
   */
  declare class TerrainLayer extends BaseLayer {
    constructor(通用参数?: BaseLayer.Options);
    /**
     * 图层显隐
     */
    show: boolean;
  }

  /**
   * tileset图层 （添加多个tileset）
   * @param [通用参数] - BaseLayer通用参数
   */
  declare class TilesetLayer extends Layer {
    constructor(通用参数?: BaseLayer.Options);
    /**
     * Clear all tileset
     */
    clear(): TilesetLayer;
    /**
     * 飞向
     * @param options - 同 {@link Viewer#flyTo}
     * @returns 异步
     */
    flyTo(options: any): Promise<Boolean>;
  }

  /**
   * 材质属性(Entity使用) 基类
   */
  declare class MaterialProperty {
    constructor(options: any);
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): any;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): any;
  }

  /**
   * 材质: 模糊圆
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 3] - 速度
   */
  declare class CircleBlurMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 扩散圆
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 20] - 速度
   */
  declare class CircleDiffuseMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 渐隐圆
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 20] - 速度
   */
  declare class CircleFadeMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 脉冲圆
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 20] - 速度
   */
  declare class CirclePulseMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 扫描圆
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 20] - 速度
   */
  declare class CircleScanMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 螺旋圆
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 20] - 速度
   */
  declare class CircleSpiralMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 多彩圆
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 20] - 速度
   */
  declare class CircleVaryMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 波纹圆
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   * @param [options.count = 3] - 波纹数量
   * @param [options.gradient = 5] - 透明度的幂方（0-1）,0表示无虚化效果，1表示虚化成均匀渐变
   */
  declare class CircleWaveMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      speed?: number;
      count?: number;
      gradient?: number;
    });
  }

  /**
   * 材质: 电弧球体效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   */
  declare class EllipsoidElectricMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 轨迹球体效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   */
  declare class EllipsoidTrailMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 闪烁线效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   */
  declare class PolylineFlickerMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 流动线效果 颜色
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   * @param [options.percent = 0.03] - 比例
   * @param [options.gradient = 0.1] - 透明度的幂方（0-1）,0表示无虚化效果，1表示虚化成均匀渐变
   */
  declare class PolylineFlowColorMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      speed?: number;
      percent?: number;
      gradient?: number;
    });
  }

  /**
   * 材质: 图片轨迹线效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   * @param [options.image] - 图片地址
   * @param [options.repeat] - 重复次数
   */
  declare class PolylineImageTrailMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      speed?: number;
      image?: string;
      repeat?: any;
    });
  }

  /**
   * 材质: 光线效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   * @param [options.image] - 图片地址
   */
  declare class PolylineLightingMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      speed?: number;
      image?: string;
    });
  }

  /**
   * 材质: 追踪光效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   * @param [options.image] - 图片地址
   */
  declare class PolylineLightingTrailMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      speed?: number;
      image?: string;
    });
  }

  /**
   * 线状 OD线效果 材质
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.bgColor] - 线的背景颜色
   * @param [options.speed = 20 + 10 * Math.random()] - 速度
   * @param [options.startTime = Math.random] - 开始的时间系数
   * @param [options.bidirectional = 0] - 运行形式：0 正向运动 1 反向运动 2 双向运动
   */
  declare class PolylineOdMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      bgColor?: Cesium.Color;
      speed?: number;
      startTime?: number;
      bidirectional?: number;
    });
  }

  /**
   * 材质: 轨迹线效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   */
  declare class PolylineTrailMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 雷达线效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   */
  declare class RadarLineMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 雷达扫描效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   */
  declare class RadarSweepMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 材质: 雷达波效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   */
  declare class RadarWaveMaterialProperty {
    constructor(options?: { color?: Cesium.Color; speed?: number });
  }

  /**
   * 文字贴图 entity材质
   * @param options - 参数对象，包括以下：
   * @param [options.text = ''] - 文本内容
   * @param [options.textBaseline = 'middle'] - 文本的基线
   * @param [options.fill = true] - 是否填充
   * @param [options.stroke = false] - 是否描边文本
   * @param [options.fillColor = Cesium.Color.BLUE] - 文本颜色
   * @param [options.strokeColor = Cesium.Color.BLACK] - 描边颜色
   * @param [options.backgroundColor = Cesium.Color.TRANSPARENT] - 背景颜色
   * @param [options.strokeWidth = 1] - 描边宽度
   * @param [options.padding = 10] - 要在文本周围添加的填充的像素大小
   * @param [options.opacity = 1] - 透明度
   */
  declare class TextMaterialProperty extends MaterialProperty {
    constructor(options: {
      text?: string;
      textBaseline?: string;
      fill?: boolean;
      stroke?: boolean;
      fillColor?: Cesium.Color;
      strokeColor?: Cesium.Color;
      backgroundColor?: Cesium.Color;
      strokeWidth?: number;
      padding?: number;
      opacity?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): any;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): any;
  }

  /**
   * 材质: 图片轨迹墙效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   * @param [options.image] - 图片地址
   * @param [options.repeat] - 重复次数
   */
  declare class WallImageTrailMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      speed?: number;
      image?: string;
      repeat?: any;
    });
  }

  /**
   * 材质: 图片轨迹墙效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   * @param [options.image] - 图片地址
   * @param [options.repeat] - 重复次数
   */
  declare class WallLineTrailMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      speed?: number;
      image?: string;
      repeat?: any;
    });
  }

  /**
   * 材质: 轨迹墙效果
   * @param [options] - 参数对象，包括以下：
   * @param [options.color = 随机色] - 运动对象的颜色
   * @param [options.speed = 5] - 速度
   * @param [options.image] - 图片地址
   */
  declare class WallTrailMaterialProperty {
    constructor(options?: {
      color?: Cesium.Color;
      speed?: number;
      image?: string;
    });
  }

  /**
   * 水面效果材质
   * @param [options] - 参数对象，包括以下：
   * @param [options.baseWaterColor = new Cesium.Color(0.2, 0.3, 0.6, 1.0)] - 基础颜色
   * @param [options.blendColor = new Cesium.Color(0.0, 1.0, 0.699, 1.0)] - 从水中混合到非水域时使用的rgba颜色对象。
   * @param [options.specularMap] - 单一通道纹理用来指示水域的面积。
   * @param [options.normalMap] - 水正常扰动的法线图。
   * @param [options.frequency = 100] - 控制波数的数字。
   * @param [options.animationSpeed = 0.01] - 控制水的动画速度的数字。
   * @param [options.amplitude = 10] - 控制水波振幅的数字。
   * @param [options.specularIntensity = 0.5] - 控制镜面反射强度的数字。
   * @param [options.fadeFactor = 1.0] - fadeFactor
   */
  declare class WaterMaterialProperty {
    constructor(options?: {
      baseWaterColor?: Cesium.Color;
      blendColor?: Cesium.Color;
      specularMap?: string;
      normalMap?: string;
      frequency?: number;
      animationSpeed?: number;
      amplitude?: number;
      specularIntensity?: number;
      fadeFactor?: number;
    });
  }

  /**
   * 测量基类
   */
  declare class Measure {
    constructor();
    /**
     * 绑定相关事件
     */
    bindEvent(): void;
    /**
     * 解除相关事件
     */
    unbindEvent(): void;
    /**
     * 创建节点
     * @param position - 位置
     * @param [isCenter = false] - 是否是中心点
     */
    createAnchor(
      position: Cesium.Cartesian3,
      isCenter?: boolean
    ): Cesium.Entity;
    /**
     * 创建Label
     */
    createLabel(
      position: Cesium.Cartesian3 | Cesium.CallbackProperty,
      text: string | Cesium.CallbackProperty,
      labelShow?: boolean | Cesium.CallbackProperty
    ): Cesium.Entity;
    /**
     * 插值量算贴地距离
     * @returns 贴地距离
     */
    getGeodesicDistance(
      point1: Cesium.Cartesian3,
      point2: Cesium.Cartesian3
    ): Promise<Number>;
    /**
     * 计算中点
     * @param p1 - 第一点
     * @param p2 - 第二点
     * @returns 中点
     */
    computeMidPosition(
      p1: Cesium.Cartesian3,
      p2: Cesium.Cartesian3
    ): Cesium.Cartesian3;
    /**
     * 计算几何中点
     * @param p1 - 第一点
     * @param p2 - 第二点
     * @returns 中点
     */
    computeMathMidPosition(
      p1: Cesium.Cartesian3,
      p2: Cesium.Cartesian3
    ): Cesium.Cartesian3;
    /**
     * 开始测量
     * @param measureFactory - 标绘工厂
     */
    start(measureFactory: MeasureFactory): void;
    /**
     * 结束测量 子类实现
     */
    cancelMeasure(): void;
  }

  /**
   * 测量工厂
   * @param viewer - 地图
   * @param [options] - 配置
   * @param [pointOptions] - 测量标绘节点样式
   * @param [textOptions] - 测量标绘文字样式
   */
  declare class MeasureFactory {
    constructor(
      viewer: Viewer,
      options?: any,
      pointOptions?: Cesium.Point.options,
      textOptions?: Cesium.Label.options
    );
    /**
     * 视图
     */
    readonly viewer: any;
    /**
     * 文字样式参数
     */
    readonly textOptions: any;
    /**
     * 默认参数
     */
    readonly options: any;
    /**
     * 测量回调事件
     */
    readonly measureFactoryEvent: any;
    /**
     * 测量临时图层
     */
    readonly graphicLayer: any;
    /**
     * 临时图层
     */
    readonly anchorLayer: any;
    /**
     * 开始测量
     * @param type - 测量类型
     * @param callback - 回调函数
     * @param style - 绘制结果样式
     * @returns 各个测量实例
     */
    measure(
      type: MeasureType,
      callback: (...params: any[]) => any,
      style: any
    ): Measure;
    /**
     * 结束状态
     */
    endState(): void;
    /**
     * 清除绘制结果
     */
    clear(): void;
    /**
     * 销废
     */
    destroy(): void;
  }

  /**
   * 测量类型
   */
  declare enum MeasureType {
    /**
     * 位置测量
     */
    POINT = "point",
    /**
     * 空间距离
     */
    DISTANCE = "distance",
    /**
     * 贴地距离
     */
    GROUNDDISTANCE = "groundDistance",
    /**
     * 三角测量
     */
    ELEVATION = "elevation",
    /**
     * 高度测量
     */
    HEIGHT = "height",
    /**
     * 空间面积
     */
    AREA = "area",
    /**
     * 贴地面积
     */
    GROUNDAREA = "groundArea",
    /**
     * 体积、挖填方
     */
    VOLUME = "volume",
    /**
     * 角度
     */
    ANGLE = "angle",
  }

  /**
   * 角度测量
   * @param style - 线段样式
   */
  declare class MeasureAngle extends Measure {
    constructor(style: Cesium.PolylineGraphics.ConstructorOptions);
  }

  /**
   * 面积测量
   * @param style - 多边形样式
   */
  declare class MeasureArea extends Measure {
    constructor(style: Cesium.PolylineGraphics.ConstructorOptions);
  }

  /**
   * 距离测量
   * @param style - 线样式
   */
  declare class MeasureDistance extends Measure {
    constructor(style: Cesium.PolylineGraphics.ConstructorOptions);
  }

  /**
   * 三角测量
   * @param style - 线样式
   */
  declare class MeasureElevation extends MeasureDistance {
    constructor(style: Cesium.PolylineGraphics.ConstructorOptions);
  }

  /**
   * 高度测量
   * @param style - 线段样式
   */
  declare class MeasureHeight extends MeasureDistance {
    constructor(style: Cesium.PolylineGraphics.ConstructorOptions);
  }

  /**
   * 位置测量
   * @param style - 点样式
   */
  declare class MeasurePoint extends Measure {
    constructor(style: Cesium.PointGraphics.ConstructorOptions);
  }

  /**
   * 体积测量
   * @param style - 以下参数：
   * @param [style.referencePlaneHeight] - 基准面高 默认为绘制多边形的地形最低点
   * @param [style.wallStyle] - 绘制体积的墙样式
   * @param [style.polygonStyle] - 绘制体积的基准面样式
   * @param [style.splitNum = 10] - 计算体积时插值数，等比分割的个数
   */
  declare class MeasureVolume extends MeasureArea {
    constructor(style: {
      referencePlaneHeight?: number;
      wallStyle?: Cesium.PolygonGraphics.ConstructorOptions;
      polygonStyle?: Cesium.PolygonGraphics.ConstructorOptions;
      splitNum?: number;
    });
    /**
     * 基准面高
     */
    referencePlaneHeight: number;
  }

  /**
   * Draw基类
   */
  declare class Draw {
    constructor();
    /**
     * 绑定相关事件
     */
    bindEvent(): void;
    /**
     * 解除相关事件
     */
    unbindEvent(): void;
    /**
     * 创建节点
     * @param position - 位置
     * @param [isCenter = false] - 是否是中心点
     */
    createAnchor(
      position: Cesium.Cartesian3,
      isCenter?: boolean
    ): Cesium.Entity;
    /**
     * 开始绘制
     * @param plot - 标绘工厂
     */
    start(plot: Plot): void;
    /**
     * 结束编辑 子类实现
     */
    cancelDraw(): void;
  }

  /**
   * 绘制提示
   */
  declare const enum DrawEditMessage {
    /**
     * 单击完成绘制
     */
    point = "\u5355\u51FB\u5B8C\u6210\u7ED8\u5236<br/>\u53F3\u51FB\u53D6\u6D88",
    /**
     * 单击添加点
     */
    pointAdd = "\u5355\u51FB\u6DFB\u52A0\u70B9",
    /**
     * 单击开始绘制,右键取消
     */
    poly = "\u5355\u51FB\u5F00\u59CB\u7ED8\u5236,\u53F3\u952E\u53D6\u6D88",
    /**
     * 单击增加点<br/>双击完成绘制
     */
    end = "\u5355\u51FB\u589E\u52A0\u70B9<br/>\u53CC\u51FB\u5B8C\u6210\u7ED8\u5236",
    /**
     * 双击完成绘制
     */
    dbend = "\u53CC\u51FB\u5B8C\u6210\u7ED8\u5236",
    /**
     * 按下拖动修改位置
     */
    drag = "\u6309\u4E0B\u62D6\u52A8\u4FEE\u6539\u4F4D\u7F6E",
    /**
     * 按下拖动修改位置,右击删除节点
     */
    dragAnchor = "\u6309\u4E0B\u62D6\u52A8\u4FEE\u6539\u4F4D\u7F6E,\u53F3\u51FB\u5220\u9664\u8282\u70B9",
    /**
     * 按下拖动增加节点
     */
    dragMidAnchor = "\u6309\u4E0B\u62D6\u52A8\u589E\u52A0\u8282\u70B9",
    /**
     * 释放后 完成修改
     */
    endDrag = "\u91CA\u653E\u540E\u5B8C\u6210\u4FEE\u6539",
    /**
     * 右击结束编辑
     */
    rClickEnd = "\u53F3\u51FB\u7ED3\u675F\u7F16\u8F91",
  }

  /**
   * Edit基类
   */
  declare class Edit {
    constructor();
    /**
     * 绑定相关事件
     */
    bindEvent(): void;
    /**
     * 解除相关事件
     */
    unbindEvent(): void;
    /**
     * 创建节点
     * @param position - 位置
     * @param [isCenter = false] - 是否是中心点
     */
    createAnchor(
      position: Cesium.Cartesian3,
      isCenter?: boolean
    ): Cesium.Entity;
    /**
     * 计算中点
     * @param p1 - 第一点
     * @param p2 - 第二点
     * @returns 中点
     */
    computeMidPosition(
      p1: Cesium.Cartesian3,
      p2: Cesium.Cartesian3
    ): Cesium.Cartesian3;
    /**
     * 开始编辑
     * @param plot - 标绘工厂
     */
    start(plot: Plot): void;
    /**
     * 停止编辑
     */
    stopEdit(): void;
  }

  declare namespace Plot {
    /**
     * 标绘工具 options
     * @property [graphicLayer] - 标绘结果显示的图层，可不传
     * @property [enableEdit = false] - 是否默认开启编辑。
     * @property [continuousDraw = false] - 是否连续编辑。
     */
    type Options = {
      graphicLayer?: GraphicLayer;
      enableEdit?: boolean;
      continuousDraw?: boolean;
    };
  }

  /**
   * 标绘工厂
   * @param viewer - 地图
   */
  declare class Plot {
    constructor(viewer: Viewer, options: Plot.Options);
    /**
     * 视图
     */
    readonly viewer: any;
    /**
     * 默认参数
     */
    readonly options: any;
    /**
     * 标绘回调事件
     */
    readonly plotEvent: Cesium.Event;
    /**
     * 标绘图层
     */
    readonly graphicLayer: GraphicLayer;
    /**
     * 临时图层,绘制过程的节点
     */
    readonly anchorLayer: Cesium.CustomDataSource;
    /**
     * 当前状态
     */
    readonly state: any;
    /**
     * 是否开启编辑
     */
    enableEdit: boolean;
    /**
     * 是否连续绘制
     */
    continuousDraw: boolean;
    /**
     * 绘制矢量要素
     * @param type - 类型
     * @param callback - 回调函数
     * @param style - 样式
     */
    draw(
      type: GraphicType,
      callback: (...params: any[]) => any,
      style: Cesium.Graphics.ConstructorOptions
    ): void;
    /**
     * 编辑矢量要素
     * @param graphic - 编辑要素
     * @param callback - 回调函数
     */
    edit(graphic: Graphic, callback: (...params: any[]) => any): void;
    /**
     * 结束绘制和编辑状态
     */
    endState(): void;
    /**
     * 清除绘制结果
     */
    clear(): void;
    /**
     * 销废绘制对象
     */
    destroy(): void;
    /**
     * Subscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns this
     */
    on(
      type: PlotEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Plot;
    /**
     * Unsubscribe event
     * @param type - 事件类型
     * @param callback - 回调函数
     * @param context - 上下文
     * @returns this
     */
    off(
      type: PlotEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Plot;
    /**
     * Trigger subscription event
     * @param type - 事件类型
     * @param params - 参数
     * @returns this
     */
    fire(type: PlotEventType, params: any): Plot;
  }

  /**
   * 数据状态
   */
  declare const enum State {
    /**
     * 初始化完成
     */
    INITIALIZED = "initialized",
    /**
     * 已添加
     */
    ADDED = "added",
    /**
     * 已移除
     */
    REMOVED = "removed",
    /**
     * 已清除
     */
    CLEARED = "cleared",
    /**
     * 注册完成
     */
    INSTALLED = "installed",
    /**
     * 可使用
     */
    ENABLED = "enabled",
    /**
     * 不可使用
     */
    DISABLED = "disabled",
    /**
     * 开始
     */
    PLAY = "play",
    /**
     * 暂停
     */
    PAUSE = "pause",
    /**
     * 恢复
     */
    RESTORE = "restore",
  }

  /**
   * 地形工厂类
   */
  declare class TerrainFactory {
    /**
     * Create ellipsoid terrain
     */
    static createEllipsoidTerrain(
      options: any
    ): Promise<EllipsoidTerrainProvider>;
    /**
     * Create url terrain
     */
    static createUrlTerrain(options: any): Promise<CesiumTerrainProvider>;
    /**
     * Create google terrain
     */
    static createGoogleTerrain(
      options: any
    ): Promise<GoogleEarthEnterpriseTerrainProvider>;
    /**
     * Create arcgis terrain
     */
    static createArcgisTerrain(
      options: any
    ): Promise<ArcGISTiledElevationTerrainProvider>;
    /**
     * Create vr terrain
     */
    static createVRTerrain(options: any): Promise<VRTheWorldTerrainProvider>;
    /**
     * 创建地形服务
     */
    static createTerrain(
      type: TerrainType,
      options: Cesium.TerrainProvider.options
    ): Promise<TerrainProvider>;
  }

  /**
   * 地形类型
   */
  declare enum TerrainType {
    NONE = "none",
    XYZ = "xyz",
    ARCGIS = "arcgis",
    GOOGLE = "google",
    VR = "vr",
  }

  /**
   * 常用坐标系(百度、GCJ02、WGS84)坐标之间转换
   */
  declare class CoordTransform {
    /**
     * BD-09 To GCJ-02
     * @param lng - 经度
     * @param lat - 纬度
     * @returns [经度,纬度]
     */
    static BD09ToGCJ02(lng: number, lat: number): any[];
    /**
     * GCJ-02 To BD-09
     * @param lng - 经度
     * @param lat - 纬度
     * @returns [经度,纬度]
     */
    static GCJ02ToBD09(lng: number, lat: number): any[];
    /**
     * WGS-84 To GCJ-02
     * @param lng - 经度
     * @param lat - 纬度
     * @returns [经度,纬度]
     */
    static WGS84ToGCJ02(lng: number, lat: number): any[];
    /**
     * GCJ-02 To WGS-84
     * @param lng - 经度
     * @param lat - 纬度
     * @returns [经度,纬度]
     */
    static GCJ02ToWGS84(lng: number, lat: number): any[];
    /**
     * 是否在国内
     * @param lng - 经度
     * @param lng - 纬度
     */
    static out_of_china(lng: number, lng: number): boolean;
    /**
     * 经纬度转墨卡托
     * @param lnglat - [lng,lat]   转换前经纬度坐标的对象
     * @returns [x,y]
     */
    static lnglatToMercator(lnglat: any[]): any[];
    /**
     * 墨卡托转经纬度
     * @param mercator - [x,y] 转换前墨卡托坐标的对象
     * @returns [lng,lat]
     */
    static mercatorTolnglat(mercator: any[]): any[];
  }

  /**
   * 系统坐标之间变换
   */
  declare class Transform {
    /**
     * Transforms Cartesian To WGS84
     * @param cartesian - 世界坐标
     * @returns 系统自定义坐标
     */
    static transformCartesianToWGS84(cartesian: Cesium.Cartesian3): Position;
    /**
     * Transforms Cartographic To WGS84
     * @param cartographic - cartographic坐标
     * @returns 系统自定义坐标
     */
    static transformCartographicToWGS84(
      cartographic: Cesium.Cartographic
    ): Position;
    /**
     * Transforms WGS84 To Cartesian
     * @param position - 系统自定义坐标
     */
    static transformWGS84ToCartesian(position: Position): Cesium.Cartographic;
    /**
     * Transforms Cartesian To Cartesian
     * @param position - 系统自定义坐标
     */
    static transformCartesianToCartesian(
      position: Cartesian3
    ): Cesium.Cartographic;
    /**
     * Transforms WGS84 To Cartographic
     * @param position - 系统自定义坐标
     */
    static transformWGS84ToCartographic(
      position: Position
    ): Cesium.Cartographic;
    /**
     * Transforms Cartographic Array To WGS84 Array
     * @param cartographicArr - cartographic坐标
     * @returns 系统自定义坐标
     */
    static transformCartographicArrayToWGS84Array(
      cartographicArr: Cesium.Cartographic[]
    ): Position[];
    /**
     * Transforms Cartesian Array To WGS84 Array
     * @param cartesianArr - cartesian数组
     */
    static transformCartesianArrayToWGS84Array(
      cartesianArr: Cesium.Cartesian3[]
    ): Position[];
    /**
     * Transforms WGS84 Array To Cartesian Array
     * @param WGS84Arr - WGS84数组
     */
    static transformWGS84ArrayToCartesianArray(
      WGS84Arr: Position[]
    ): Cesium.Cartesian3[];
    /**
     * Transforms WGS84 Array To Cartographic Array
     * @param WGS84Arr - WGS84数组
     */
    static transformWGS84ArrayToCartographicArray(
      WGS84Arr: Position[]
    ): Cesium.Cartographic[];
    /**
     * Transforms WGS84 To Mercator
     * @param position - 系统自定义坐标
     */
    static transformWGS84ToMercator(position: Position): Position;
    /**
     * Transforms Mercator To WGS84
     * @param position - 系统自定义坐标
     */
    static transformMercatorToWGS84(position: Position): Position;
    /**
     * Transforms Window To WGS84
     * @param position - 系统自定义坐标
     * @param viewer - 视图
     */
    static transformWindowToWGS84(position: Position, viewer: Viewer): Position;
    /**
     * Transforms WGS84 To Window
     * @param position - 系统自定义坐标
     * @param viewer - 视图
     */
    static transformWGS84ToWindow(
      position: Position,
      viewer: Viewer
    ): Cesium.Cartesian2;
  }

  /**
   * Math functions.
   */
  declare module "Math" {
    /**
     * 计算三角形面积
     * @param positions - 点坐标集合
     * @returns 面积
     */
    function triangleArea(positions: Position[]): number;
    /**
     * 计算距离
     * @param positions - 点坐标集合
     * @returns 距离
     */
    function distance(positions: Position[]): number;
    /**
     * 计算外包中心点
     * @param positions - 点坐标集合
     * @returns 中心点
     */
    function center(positions: Position[]): Position;
    /**
     * 计算两点中点
     * @param start - 经纬度坐标
     * @param end - 经纬度坐标
     * @returns 中点
     */
    function mid(
      start: string | String[] | any[][],
      end: string | String[] | any[][]
    ): Position;
    /**
     * 计算面积
     * @param positions - 点坐标集合
     * @returns 面积
     */
    function area(positions: Position[]): number;
    /**
     * 计算外包
     * @param positions - 点坐标集合
     * @param expand - 外围扩充系数
     */
    function bounds(positions: Position[], expand: number): any;
    /**
     * Some of the code borrows from MAPV
     * https://github.com/huiyan-fe/mapv/blob/3292c7c25dbbf29af3cf7b3acb48108d60b3eed8/src/utils/curve.js
     * 生成曲线
     * @param points - 点集
     * @param [count = 40] - 两点之间插值数量
     * @returns [[x,y],[x,y],[x,y]，[x,y]...]
     */
    function curve(points: Position[], count?: number): any[];
    /**
     * Get a curvilinear coordinate set of points based on two points
     */
    function getCurveByTwoPoints(
      point1: Position,
      point2: Position,
      count: number
    ): any[];
  }

  /**
   * 样式转换
   */
  declare class StyleConvert {
    constructor();
    /**
     * 转换Cesium样式为Geojson
     * @param style - 样式
     * @returns 样式
     */
    static toJSON(style: any): any;
    /**
     * 转换Geojson样式为Cesium样式
     * @param style - 样式
     * @param isPrimitive - 是否是Primitive
     * @returns 样式
     */
    static toCesiumValue(style: any, isPrimitive: boolean): any;
  }

  /**
 * Dom Utils
some code reference leaflet
https://github.com/Leaflet/Leaflet/tree/master/src/core
 */
  declare class DomUtil {
    /**
     * Returns an element given its DOM id, or returns the element itself
     if it was passed directly.
     * @param id - id
     */
    static get(id: string): HTMLElement | any;
    /**
     * Returns the value for a certain style attribute on an element,
    including computed values or values set through CSS.
     * @param el - html 元素
     * @param style - eg：left
     */
    static getStyle(el: HTMLElement, style: string): null | any;
    /**
     * Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
     * @param tagName - 元素类型
     * @param className - calss名称
     * @param container - 上级容器
     */
    static create(
      tagName: HTMLElement,
      className: string,
      container: HTMLDocument
    ): HTMLElement;
    /**
     * Removes `el` from its parent element
     * @param el - 元素
     */
    static remove(el: HTMLElement): void;
    /**
     * Removes all of `el`'s children elements from `el`
     * @param el - 元素
     */
    static empty(el: HTMLElement): void;
    /**
     * Returns `true` if the element's class attribute contains `name`.
     * @param el - 元素
     * @param name - class名称
     */
    static hasClass(el: HTMLElement, name: string): void;
    /**
     * add `name` to the element's class attribute.
     * @param el - 元素
     * @param name - class名称
     */
    static addClass(el: HTMLElement, name: string): void;
    /**
     * remove`name` from the element's class attribute.
     * @param el - 元素
     * @param name - class名称
     */
    static removeClass(el: HTMLElement, name: string): void;
    /**
     * Sets the element's class.
     * @param el - 元素
     * @param name - class名称
     */
    static setClass(el: HTMLElement, name: string): void;
    /**
     * Returns the element's class.
     * @param el - 元素
     */
    static getClass(el: HTMLElement): void;
    /**
     * Creates svg
     * @param width - svg宽
     * @param height - svg高
     * @param path - svg路线
     * @param container - 容器
     */
    static createSvg(
      width: number,
      height: number,
      path: string,
      container: HTMLElement
    ): SVGElement;
    /**
     * Parses string to Dom
     * @param domStr - domString
     * @param withWrapper - 父容器
     * @param className - 类名
     */
    static parseDom(
      domStr: string,
      withWrapper: HTMLElement,
      className: string
    ): HTMLDivElement | NodeListOf<ChildNode>;
    /**
     * enter full screen
     * @param el - 元素
     */
    static enterFullscreen(el: HTMLElement): void;
    /**
     * exit full screen
     */
    static exitFullscreen(): void;
    /**
     * Creates video
     * @param className - 类名
     * @param [container = null] - 父容器
     */
    static createVideo(
      url: URL,
      className: string,
      container?: HTMLElement
    ): HTMLElement;
  }

  /**
   * 矢量元素公共方法
   */
  declare class GraphicUtil {
    /**
     * GeoJSON格式的Feature单个对象转为 Graphic构造参数（用于创建BaseGraphic）
     * @param feature - geojson单个Feature对象
     */
    static featureToGraphic(feature: any): Graphic;
    /**
     * GeoJSON 转为 Graphic
     * @param geojson - geojson对象
     */
    static geoJsonToGraphics(geojson: any): Graphic[];
    /**
     * 根据类型和参数 创建Graphic工厂方法
     * @param type - 数据类型
     * @param options - 构造参数，按type支持GraphicType类的构造方法参数
     */
    static create(type: string, options: any): Graphic;
  }

  /**
   * 材质公共方法
   */
  declare class MaterialUtil {
    /**
     * 创建 材质属性（用于Entity）
     * @param type - 数据类型
     * @param options - 构造参数，按type支持Material类的构造方法参数
     */
    static createMaterialProperty(
      type: string,
      options: any
    ): Cesium.MaterialProperty;
    /**
     * 创建 材质属性（用于Entity）
     * @param type - 数据类型
     * @param options - 构造参数，按type支持Material类的构造方法参数
     */
    static createMaterial(type: string, options: any): Cesium.Material;
    /**
     * 将材质对象转为Json简单对象，用于保存。
     * @param material - 材质对象
     * @returns json对象
     */
    static toJSON(material: any): any;
    /**
     * 将Json简单对象转为材质对象，用于渲染。
     * @param material - Json简单对象
     * @param isPrimitive - 是否是Primitive
     */
    static toCesiumValue(material: any, isPrimitive: boolean): MaterialProperty;
    /**
     * 将Json简单对象转为Cesium对象，用于渲染。
     * @param material - Json简单对象
     * @returns 对象值为Cesium 格式，主要涉及颜色、Cartesian2、Cartesian3
     */
    static convertJsonToCesiumObject(material: any): any;
  }

  /**
   * 常用坐标格式转换
   */
  declare class Parse {
    /**
     * 转换其他种类的坐标为自定义Position
     * @param position - 支持 string or Array or Position
     * @returns 坐标
     */
    static parsePosition(
      position: string | any[] | Position | Cesium.Cartesian3
    ): Position;
    /**
     * Parses all kinds of coordinates array to position array
     */
    static parsePositions(positions: string | String[] | any[][]): Position[];
    /**
     * Parses point position to array
     * @param position - 支持 string or Array or Position
     * @param [noAlt = false] - 是否需要高程数据
     * @returns [lng, Lat]
     */
    static parsePointCoordToArray(
      position: string | any[] | Position,
      noAlt?: boolean
    ): any[];
    /**
     * Parses polyline positions to array
     * @param [noAlt = false] - 是否需要高程数据
     */
    static parsePolylineCoordToArray(
      positions: string | String[] | any[][],
      noAlt?: boolean
    ): any[][];
    /**
     * Parses polygon positions to array
     * @param [noAlt = false] - 是否需要高程数据
     */
    static parsePolygonCoordToArray(
      positions: string | String[] | any[][],
      noAlt?: boolean
    ): any[][];
  }

  /**
   * 标绘公用
   */
  declare class PlotUtil {
    /**
     * 两点直线距离
     * @param pnt1 - [x,y]
     * @param pnt2 - [x,y]
     * @returns 直线距离
     */
    static distance(pnt1: number[], pnt2: number[]): number;
    /**
     * 线段距离
     * @param points - [[x,y],[x,y]]
     */
    static wholeDistance(points: number[]): number;
    /**
     * @param points - [[x,y],[x,y]]
     */
    static getBaseLength(points: number[]): number;
    /**
     * 两点中点
     * @param pnt1 - [x,y]
     * @param pnt2 - [x,y]
     * @returns [x,y]
     */
    static mid(pnt1: number[], pnt2: number[]): number[];
    static getCircleCenterOfThreePoints(
      pnt1: number[],
      pnt2: number[],
      pnt3: number[]
    ): any[];
    /**
     * 求线段交点
     */
    static getIntersectPoint(
      pntA: number[],
      pntB: number[],
      pntC: number[],
      pntD: number[]
    ): any[];
    /**
     * 计算两点方位角
     * @param startPnt - 坐标弧度值
     * @param endPnt - 坐标弧度值
     * @returns 弧度值
     */
    static getAzimuth(startPnt: number[], endPnt: number[]): number;
    /**
     * 计算两点方位角
     * @param startPnt - 坐标弧度值
     * @param endPnt - 坐标弧度值
     * @returns 角度值
     */
    static getAzimuthDegree(startPnt: number[], endPnt: number[]): number;
    /**
     * 求 三点夹角
     */
    static getAngleOfThreePoints(
      pntA: number[],
      pntB: number[],
      pntC: number[]
    ): number;
    /**
     * 是否是顺时针
     */
    static isClockWise(pnt1: number[], pnt2: number[], pnt3: number[]): boolean;
    /**
     * 求线上点
     */
    static getPointOnLine(
      t: number,
      startPnt: number[],
      endPnt: number[]
    ): any[];
    static getCubicValue(
      t: any,
      startPnt: any,
      cPnt1: any,
      cPnt2: any,
      endPnt: any
    ): any[];
    /**
     * 已知两点，旋转角度，距离，求第三点
     */
    static getThirdPoint(
      startPnt: any,
      endPnt: any,
      angle: any,
      distance: any,
      clockWise: any
    ): any[];
    static getArcPoints(
      center: any,
      radius: any,
      startAngle: any,
      endAngle: any
    ): Number[];
    static getBisectorNormals(t: any, pnt1: any, pnt2: any, pnt3: any): any[][];
    static getNormal(pnt1: any, pnt2: any, pnt3: any): any[];
    /**
     * 求曲线上的点
     */
    static getCurvePoints(t: any, controlPoints: any): any[];
    static getLeftMostControlPoint(t: any, controlPoints: any): any[];
    static getRightMostControlPoint(t: any, controlPoints: any): number[];
    /**
     * 获取贝塞尔曲线点
     * @param points - [[x,y],[x,y]]
     */
    static getBezierPoints(points: any[][]): any[][];
    static getBinomialFactor(n: any, index: any): number;
    static getFactorial(n: any): number;
    /**
     * 获取B样条曲线坐标集合
     * @param points - [[x,y],[x,y]]
     */
    static getQBSplinePoints(points: any[][]): any[][];
    static getQuadricBSplineFactor(k: any, t: any): number;
  }

  /**
   * 单个坐标或位置矩阵相关的处理 静态方法
   */
  declare class PointUtil {
    /**
     * 根据观察点的方向角度和距离，计算目标点坐标
     * @param position - 观察点坐标
     * @param angle - 方向角度 (正北方向为0,顺时针到360度)
     * @param radius - 半径距离
     * @returns 目标点坐标
     */
    static calculatePositionByDirectionAndLen(
      position: Position,
      angle: number,
      radius: number
    ): Position;
    /**
     * 计算两点之间的航向角
     * @param start - A点
     * @param end - B点
     * @returns 航向角
     */
    static calculateHeadingForLine(
      start: Cesium.Cartesian3,
      end: Cesium.Cartesian3
    ): number;
    /**
     * 获取坐标的贴地形坐标
     * @param scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param positions - 坐标
     * @returns 贴地坐标
     */
    static getSurfaceTerrainPositions(
      scene: Cesium.Scene,
      positions: Position[]
    ): Promise<Position[]>;
    /**
     * 计算 贴地(或贴模型)高度 坐标 （非精确计算，根据当前加载的地形和模型数据情况有关）
     * @param scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param positions - 坐标
     * @param [options = {}] - 参数对象:
     * @param [options.async = false] - 是否进行异步精确计算
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @returns 贴地坐标
     */
    static getSurfacePositions(
      scene: Cesium.Scene,
      positions: Position[],
      options?: {
        async?: boolean;
        objectsToExclude?: object[];
      }
    ): Promise<Position[]>;
    /**
     * 点集设置统计高度
     * @param positions - 点集
     * @param alt - 高度
     * @param isAbsolute - 是否绝对高
     * @returns positions 点集
     */
    static setPositionsHeight(
      positions: Position[] | Cesium.Cartesian3[],
      alt: number,
      isAbsolute?: boolean
    ): Position[] | Cesium.Cartesian3[];
  }

  /**
   * 线、面工具类
   */
  declare class PolyUtil {
    /**
     * 按2个坐标点分段分步来计算，求路线的贴地线坐标（插值）
     * @param [options = {}] - 参数对象:
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param options.positions - 坐标数组
     * @param [options.splitNum = 100] - 插值数，等比分割的个数
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param [options.offset = 0] - 可以按需增加偏移高度（单位：米），便于可视
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 无
     */
    static computeStepSurfaceLine(options?: {
      scene: Cesium.Scene;
      positions: Cesium.Cartesian3[];
      splitNum?: number;
      has3dtiles?: boolean;
      objectsToExclude?: object[];
      offset?: number;
      callback: (...params: any[]) => any;
    }): any;
    /**
     * 求路线的贴地线坐标（插值）
     * @param [options = {}] - 参数对象:
     * @param options.viewer - 三维地图场景 viewer
     * @param options.positions - 坐标数组
     * @param [options.splitNum = 100] - 插值数，等比分割的个数
     * @param [options.async = false] - 是否异步求精细高程
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param [options.offset = 0] - 可以按需增加偏移高度（单位：米），便于可视
     * @returns 插值后的数据集合
     */
    static computeSurfaceLine(options?: {
      viewer: Viewer;
      positions: Cesium.Cartesian3[];
      splitNum?: number;
      async?: number;
      has3dtiles?: boolean;
      objectsToExclude?: object[];
      offset?: number;
    }): Promise<Position[]>;
    /**
     * 求点集的贴地坐标
     * @param [options = {}] - 参数对象:
     * @param options.viewer - 三维地图场景 viewer
     * @param options.positions - 坐标数组
     * @param [options.offset = 0] - 可以按需增加偏移高度（单位：米），便于可视
     * @param [options.async = false] - 是否精确计算贴地高度
     * @returns 贴地后的数据集合
     */
    static pointsClampToGround(options?: {
      viewer: Viewer;
      positions: Position[];
      offset?: number;
      async?: boolean;
    }): Promise<Position[]>;
    /**
     * 求多边形内部插值后的点和生成的三角形
     * @param [options = {}] - 参数对象:
     * @param options.positions - 坐标数组
     * @param [options.splitNum = 10] - 插值数，等比分割的个数
     * @param [options.isOnlyPoint = false] - 是否仅返回点集
     * @returns 插值后的数据集合
     */
    static interPolygon(options?: {
      positions: Position[];
      splitNum?: number;
      isOnlyPoint?: boolean;
    }): any;
    /**
     * 根据 基准面高度 重新计算填挖方体积
     * @param resultInter - 插值完的对象
     * @param cutHeight - 基准面高度
     */
    static updateVolume(resultInter: VolumeResult, cutHeight: number): void;
    /**
     * 计算体积
     * @param options.viewer - 三维地图场景 viewer
     * @param options.positions - 坐标数组
     * @param [options.splitNum = 10] - 插值数，等比分割的个数
     * @param [options.cutHeight] - 基准面高度，默认取地形最低点
     * @returns 面内进行贴地(或贴模型)插值, 返回三角网等计算结果
     */
    static computeVolume(options: {
      viewer: Viewer;
      positions: Position[];
      splitNum?: number;
      cutHeight?: number;
    }): Promise<VolumeResult>;
  }

  /**
   * 体积计算结果
   * @property minHeight - 面内最小高度
   * @property maxHeight - 面内最大高度
   * @property positions - 插值后的坐标数组
   * @property triangles - 三角网索引
   * @property digVolume - 挖方体积
   * @property fillVolume - 填方体积
   * @property totalArea - 贴地面积
   */
  declare type VolumeResult = {
    minHeight: number;
    maxHeight: number;
    positions: Position[];
    triangles: Number[];
    digVolume: number;
    fillVolume: number;
    totalArea: number;
  };

  /**
   * 系统自定义Position类
   * @param lng - 经度
   * @param lat - 纬度
   * @param alt - 高度
   * @param heading - 俯仰角
   * @param pitch - 航向角
   * @param roll - 旋转角
   */
  declare class Position {
    constructor(
      lng: number,
      lat: number,
      alt: number,
      heading: number,
      pitch: number,
      roll: number
    );
    /**
     * 经度
     */
    lng: number;
    /**
     * 纬度
     */
    lat: number;
    /**
     * 高度
     */
    alt: number;
    /**
     * 航向角
     */
    heading: number;
    /**
     * 旋转角
     */
    pitch: number;
    /**
     * 翻滚角
     */
    roll: number;
    /**
     * 序列化为字符串格式
     */
    serialize(): string;
    /**
     * Calculate the distance between two positions
     * @param target - 目标点
     * @returns 距离
     */
    distance(target: Position): number;
    /**
     * 复制点
     * @returns 点
     */
    copy(): Position;
    /**
     * 判断是否两点是否坐标一致
     * @param position - 比较点
     * @returns 是否一致
     */
    equal(position: Position): boolean;
    /**
     * 转为数组格式
     */
    toArray(): any[];
    /**
     * 以“，”分隔为字符串
     */
    toString(): string;
    /**
     * 转为对象格式
     */
    toObject(): any;
    /**
     * 从数组格式生成
     */
    static fromArray(arr: any[]): Position;
    /**
     * 从字符串格式生成
     */
    static fromString(str: string): Position;
    /**
     * 从对象格式生成
     */
    static fromObject(obj: any): Position;
    /**
     * Deserialize
     */
    static deserialize(valStr: string): Position;
  }

  /**
   * Some of the code borrows from leaflet
   * https://github.com/Leaflet/Leaflet/tree/master/src/core
   */
  declare class Util {
    /**
     * Generates uuid
     */
    static uuid(prefix?: any): string;
    /**
     * Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter.
     */
    static merge(dest: any, ...sources: any[]): any;
    /**
     * splitWords(str: String): String[]
     * Trims and splits the string on whitespace and returns the array of parts.
     */
    static splitWords(str: any): void;
    /**
     * setOptions(obj: Object, options: Object): Object
     * Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`.
     */
    static setOptions(obj: any, options: any): void;
    /**
     * formatNum(num: Number, digits?: Number): Number
     *  Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.
     */
    static formatNum(num: any, digits: any): number;
    /**
     * trim(str: String): String
     * Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
     */
    static trim(str: any): void;
    /**
     * Data URI string containing a base64-encoded empty GIF image.
     * Used as a hack to free memory from unused images on WebKit-powered
     * mobile devices (by setting image `src` to this string).
     */
    static emptyImageUrl(): string;
    /**
     * checkPosition(position: Object): Boolean
     * Check position for validity
     */
    static checkPosition(position: any): void;
    /**
     * Creates a debounced function that delays invoking `fn` until after `delay`
     */
    static debounce(fn: any, delay: any): (...params: any[]) => any;
    /**
     * Creates a throttled function that only invokes `fn` at most once per
     */
    static throttle(fn: any, delay: any): (...params: any[]) => any;
    static dataURLtoBlob(dataUrl: any): Blob;
    /**
     * 判断对象是否为Object类型
     * @param obj - 对象
     * @returns 是否为Object类型
     */
    static isObject(obj: any): boolean;
    /**
     * 按范围截图
     * @param positions - 坐标集合
     * @param scene - 场景
     * @returns 画布
     */
    static clipRegion2Canvas(
      positions: Cesium.Cartesian3[],
      scene: Viewer.scene
    ): Promise<HTMLCanvasElement>;
  }

  /**
   * 配置相机
   * @param viewer - 视图
   */
  declare class CameraOption {
    constructor(viewer: Viewer);
    /**
     * 设置相机pitch 范围
     * @param min - 最小pitch
     * @param max - 最大pitch
     */
    setPitchRange(min: any, max: any): void;
    /**
     * 限制相机视角到地面以下
     */
    limitCameraToGround(): void;
    setBounds(west: any, south: any, east: any, north: any): void;
    /**
     * 切换鼠标操作模式
     */
    changeMouseMode(mouseMode: any): void;
  }

  /**
   * 鼠标操作模式
   */
  declare enum MouseMode {
    /**
     * 左键中键
     */
    LEFT_MIDDLE = 0,
    /**
     * 左键右键
     */
    LEFT_RIGHT = 1,
  }

  declare namespace ViewerOption {
    /**
     * 视图配置项
     * @property [shadows = false] - 是否开启阴影
     * @property [resolutionScale = 1] - 获取或设置呈现分辨率的比例因子。小于1.0的值可以提高功能较弱的设备的性能，而大于1.0的值将以更高的分辨率渲染，然后缩小，从而提高视觉逼真度。例如，如果小部件的布局大小为640x480，将此值设置为0.5将导致场景以320x240渲染，然后在将其设置为2.0时进行放大，将导致场景在1280x960渲染，然后进行缩小
     * @property [backgroundColor = Cesium.Color.BLACK] - 场景背景色
     * @property [showAtmosphere = true] - 天空大气
     * @property [showSun = true] - 是否显示太阳
     * @property [showMoon = true] - 是否显示月球
     * @property [skyBox] - 天空盒
     * @property [globe] - 地球相关参数
     * @property [globe.show = true] - 是否显示地球
     * @property [globe.showGroundAtmosphere = true] - 是否显示地面大气
     * @property [globe.depthTestAgainstTerrain = false] - 是否开启深度检测
     * @property [globe.baseColor] - 地球背景色，默认是蓝色
     * @property [globe.undergroundColor] - 当摄影机位于地下或球体为半透明时，渲染球体背面的颜色
     * @property [translucency] - 用于控制全局半透明的参数
     * @property [cameraController] - 相机参数（Cesium.ScreenSpaceCameraController）
     * @property [cameraController.enableRotate = true] - 旋转
     * @property [cameraController.enableTilt = true] - 倾斜
     * @property [cameraController.enableTranslate = true] - 平移
     * @property [cameraController.enableCollisionDetection = true] - 是否可以进入地下,默认不可进入
     */
    type options = {
      shadows?: boolean;
      resolutionScale?: number;
      backgroundColor?: Cesium.Color;
      showAtmosphere?: boolean;
      showSun?: boolean;
      showMoon?: boolean;
      enableFxaa?: boolean;
      skyBox?: any | Cesium.SkyBox;
      globe?: {
        show?: boolean;
        showGroundAtmosphere?: boolean;
        depthTestAgainstTerrain?: boolean;
        tileCacheSize?: number;
        baseColor?: Cesium.Color;
        undergroundColor?: Cesium.Color;
      };
      translucency?: {
        enabled?: boolean;
        backFaceAlpha?: number;
        backFaceAlphaByDistance?: Cesium.NearFarScalar;
        frontFaceAlpha?: number;
        frontFaceAlphaByDistance?: Cesium.NearFarScalar;
      };
      cameraController?: {
        enableInputs?: boolean;
        enableRotate?: boolean;
        enableTilt?: boolean;
        enableTranslate?: boolean;
        enableCollisionDetection?: boolean;
        minimumZoomDistance?: number;
        maximumZoomDistance?: number;
      };
    };
  }

  /**
   * 配置视图相关配置项，包括Viewer、Canvas、Scene、SkyBox、Globe、Camera
   * @param viewer - 视图
   */
  declare class ViewerOption {
    constructor(viewer: Viewer);
    /**
     * Sets options
     * @param options - 配置对象参数
     * @returns this
     */
    setOptions(options: ViewerOption.options): ViewerOption;
  }

  /**
   * 组件配置项
   * @param viewer - 视图
   */
  declare class WidgetOption {
    constructor(viewer: Viewer);
    /**
     * setOptions
     * @param options - 配置项
     * @returns this
     */
    setOptions(options: WidgetOption.Options): WidgetOption;
  }

  declare namespace WidgetOption {
    /**
     * 自定义组件控制配置项
     * @property [enableCompass = true] - 导航盘
     * @property [enableCompass2 = true] - 导航盘2
     * @property [enableStateBar = true] - 状态栏
     * @property [enableDistanceLegend = true] - 比例尺
     * @property [enableImagerySwitch = true] - 地理底图
     * @property [enableImagerySwitchTerrain = false] - 地形默认开启
     * @property [enableZoomController = true] - 缩放组件
     * @property [enableKeyboardRoaming = false] - 行走组件
     */
    type Options = {
      enableCompass?: boolean;
      enableCompass2?: boolean;
      enableStateBar?: boolean;
      enableDistanceLegend?: boolean;
      enableImagerySwitch?: boolean;
      enableImagerySwitchTerrain?: boolean;
      enableZoomController?: boolean;
      enableKeyboardRoaming?: boolean;
    };
  }

  /**
   * 定义视图
   * @param id - 视图容器id或者已经构造好的Viewer对象
   * @param options - Cesium.Viewer 配置项
   */
  declare class Viewer {
    constructor(
      id: string | Cesium.Viewer,
      options: Cesium.Viewer.ConstructorOptions
    );
    /**
     * 注册事件
     */
    _mouseEvent: any;
    /**
     * Cesium.Viewer
     */
    readonly delegate: Cesium.Viewer;
    /**
     * Cesium.Viewer
     */
    readonly viewer: Cesium.Viewer;
    /**
     * 自定义组件容器
     */
    readonly container: HTMLElement;
    /**
     * viewer.scene
     */
    readonly scene: Cesium.Scene;
    /**
     * Cesium相机
     */
    readonly camera: Cesium.Camera;
    /**
     * 画布
     */
    readonly canvas: canvas;
    /**
     * viewer.dataSources
     */
    readonly dataSources: Cesium.DataSourceCollection;
    /**
     * viewer.imageryLayers
     */
    readonly imageryLayers: Cesium.ImageryLayerCollection;
    /**
     * viewer.terrainProvider
     */
    readonly terrainProvider: Cesium.TerrainProvider;
    /**
     * trackedEntity
     */
    trackedEntity: Cesium.Entity;
    /**
     * viewer.entities
     */
    readonly entities: Cesium.EntityCollection;
    /**
     * viewer.postProcessStages
     */
    readonly postProcessStages: Cesium.PostProcessStageCollection;
    /**
     * viewer.clock
     */
    readonly clock: Cesium.Clock;
    /**
     * 视图事件
     */
    readonly viewerEvent: ViewerEvent;
    /**
     * 场景事件
     */
    readonly sceneEvent: SceneEvent;
    /**
     * 鼠标事件
     */
    readonly mouseEvent: MouseEvent;
    /**
     * 相机位置
     */
    readonly cameraPosition: Position;
    /**
     * 分辨率
     */
    readonly resolution: number;
    /**
     * 视图范围
     */
    readonly viewBounds: Cesium.Rectangle;
    /**
     * 临时图层
     */
    readonly graphicLayer: GraphicLayer;
    /**
     * 地图显示等级
     */
    readonly level: number;
    /**
     * 是否只触发Viewer上绑定的事件，屏蔽图层和要素事件
     */
    onlyViewEvent: boolean;
    /**
     * 获取当前客户端显卡信息
     */
    readonly clientGraphicsCard: string;
    /**
     * 设置viewer的options
     * @param [options] - 配置项
     * @param [options.widgetController] - 默认组件相关参数
     * @returns 视图
     */
    setOptions(options?: { widgetController?: WidgetOption.Options }): Viewer;
    /**
     * 设置相机pitch 范围
     * @param min - 最小pitch
     * @param max - 最大pitch
     * @returns this
     */
    setPitchRange(min: number, max: number): Viewer;
    /**
     * 改变场景模式，2：2D，2.5：2.5D，3：3D
     * @param sceneMode - 模式
     * @param duration - 飞行时间
     * @returns this
     */
    changeSceneMode(sceneMode: number, duration: number): Viewer;
    /**
     * 改变鼠标模式，0：Default，1: Change the tiltEventTypes to CameraEventType.RIGHT_DRAG
     * @param mouseMode - 鼠标模式
     * @returns this
     */
    changeMouseMode(mouseMode: number): Viewer;
    /**
     * 添加地形
     * @param terrainProvider - 地形服务
     * @returns terrain
     */
    setTerrain(
      terrainProvider: Promise<Cesium.TerrainProvider>
    ): Cesium.Terrain;
    /**
     * 移除地形
     * @returns this
     */
    removeTerrain(): Viewer;
    /**
     * 添加图层(图层组)
     * @param layer - 自定义图层
     * @returns this
     */
    addLayer(layer: LayerGroup | BaseLayer): Viewer;
    /**
     * 移除图层(图层组)
     * @param layer - 自定义图层
     */
    removeLayer(layer: BaseLayer): Viewer;
    /**
     * 根据图层id判断图层是否存在
     * @param layer - 自定义图层
     */
    hasLayer(layer: BaseLayer | any): boolean;
    /**
     * 根据图层id获取图层
     * @param id - 图层id
     */
    getLayer(id: string): BaseLayer | undefined;
    /**
     * 通过名称获取图层
     * @param name - 图层名称
     * @returns 图层实例
     */
    getLayerByName(name: string): Layer;
    /**
     * 获取所以图层
     * @returns 所有图层
     */
    getLayers(): Layer[];
    /**
     * 获取图层数量
     * @returns 图层数量
     */
    getLayerCount(): number;
    /**
     * Iterate through each layer and pass it as an argument to the callback function
     * @param method - 函数
     * @param context - 上下文
     * @returns this
     */
    eachLayer(method: (...params: any[]) => any, context: any): Viewer;
    /**
     * 添加后处理特效
     * @param effect - 特效
     * @returns this
     */
    addEffect(effect: BaseEffect): Viewer;
    /**
     * 移除后处理特效
     * @param effect - 自定义图层
     */
    removeEffect(effect: BaseEffect): Viewer;
    /**
     * 添加分析
     * @param thing - 特效
     * @returns this
     */
    addThing(thing: BaseThing): Viewer;
    /**
     * 移除分析
     * @param thing - 自定义图层
     */
    removeThing(thing: BaseThing): Viewer;
    /**
     * 飞向
     * @param target - 自定义图层等
     * @param [options] - 参数:
     * @param [options.duration = 3.0] - 飞行时间.
     * @param [options.maximumHeight] - 飞行最大高度.
     * @param [options.offset] - The offset from the target in the local east-north-up reference frame centered at the target.
     * @returns 异步
     */
    flyTo(
      target: BaseLayer | Cesium.Object,
      options?: {
        duration?: number;
        maximumHeight?: number;
        offset?: Cesium.HeadingPitchRange;
      }
    ): Promise<Boolean>;
    /**
     * viewer.zoomTo
     * @param target - 自定义图层等
     * @returns this
     */
    zoomTo(target: Layer | Cesium.Object): Viewer;
    /**
     * 相机flyTo
     * @param position - 位置点
     * @param duration - 飞行的持续时间以秒为单位
     * @returns this
     */
    flyToPosition(
      position: string | any[] | Position,
      duration: number
    ): Promise;
    /**
     * 相机 camera.flyToBoundingSphere
     * @param positions - 位置点
     * @param options - 参数参考camera.flyToBoundingSphere.options
     * @returns this
     */
    flyToPositions(
      positions: string | any[] | Position[],
      options: any
    ): Viewer;
    /**
     * Camera zoom to a position
     * @param position - 位置点
     * @param completeCallback - 回调函数
     * @returns this
     */
    zoomToPosition(
      position: string | any[] | Position,
      completeCallback: (...params: any[]) => any
    ): Viewer;
    /**
     * 绑定指定类型事件监听器
     * @param type - 事件类型
     * @param callback - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)
     * @returns this
     */
    on(
      type: ViewerEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Viewer;
    /**
     * 执行一次指定类型事件监听器
     * @param type - 事件类型
     * @param callback - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)
     * @returns this
     */
    once(
      type: ViewerEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Viewer;
    /**
     * 解除事件监听器
     * @param type - ViewerEventType or  sceneEvent
     * @param callback - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)
     * @returns this
     */
    off(
      type: ViewerEventType,
      callback: (...params: any[]) => any,
      context: any
    ): Viewer;
    /**
     * Destroys the viewer.
     */
    destroy(): void;
    /**
     * Export scene to image
     * @param options - 参数
     * @param [options.name = 'scene] - 图片名称
     * @param [options.download = true] - 是否下载
     * @param [options.positions] - 范围
     * @returns image
     */
    exportScene(options: {
      name?: string;
      download?: boolean;
      positions?: Cesium.Cartesian3[];
    }): string;
    /**
     * 添加组件，调用组件install方法
     * @returns this
     */
    use(plugin: any): Viewer;
  }

  /**
   * 导航盘
   */
  declare class Compass extends Widget {
    constructor();
  }

  /**
   * 导航盘
   */
  declare class Compass2 extends Widget {
    constructor();
  }

  /**
   * 比例尺
   */
  declare class DistanceLegend extends Widget {
    constructor();
  }

  /**
   * 地理底图控件
   */
  declare class ImagerySwitch extends Widget {
    constructor();
    /**
     * 设置或获取地形开关
     */
    terrainEnable: boolean;
    /**
     * 设置或获取显示图层
     */
    switchId: number;
    /**
     * 设置或获取影像透明度
     */
    imageryAlpha: number;
    /**
     * 图层集合
     */
    layers: any[];
    /**
     * 添加影像图层
     * @param options - 以下参数：
     * @param [options.id = uuid] - id
     * @param options.layer - 图层对象
     * @param options.iconUrl - 图片地址
     * @param options.name - 名称
     * @param [options.show = false] - 显隐
     */
    addLayer(options: {
      id?: string;
      layer: ImageLayer[];
      iconUrl: string;
      name: string;
      show?: boolean;
    }): void;
    /**
     * 改变图层显隐
     */
    changeLayer(id: any): void;
    /**
     * 移除指定图层
     */
    removeLayer(id: any): void;
    /**
     * 改变地形显隐
     * @param show - 是否显隐
     */
    changeTerrain(show: boolean): void;
    /**
     * 修改默认地形
     * @param terrain - 地形对象
     */
    setTerrain(terrain: Cesium.TerrainProvider): void;
  }

  /**
   * 键盘控制行走
   */
  declare class KeyboardRoaming extends Widget {
    constructor();
    /**
     * 设置或获取组件是否可用
     */
    enable: boolean;
    /**
     * 设置或获取移动速率
     */
    moveRate: boolean;
    /**
     * 设置或获取旋转速率
     */
    rotateRate: boolean;
  }

  /**
   * 加载蒙层
   */
  declare class LoadingMask extends Widget {
    constructor();
  }

  /**
   * 分屏显示
   */
  declare class MapSplit extends Widget {
    constructor();
    /**
     * 设置对比影像图层
     * @param splitDirection - 分隔方向
     * @returns this
     */
    addBaseLayer(
      baseLayer: Cesium.ImageryProvider,
      splitDirection?: number
    ): MapSplit;
  }

  /**
   * 信息框
   */
  declare class Popup extends Widget {
    constructor();
    /**
     * 自定义类名
     */
    config: any;
    /**
     * 设置 Wrapper
     * @returns this
     */
    setWrapper(wrapper: Element): Popup;
    /**
     * 设置popup 位置
     * @param position - 位置点
     * @returns this
     */
    setPosition(position: Cesium.Cartesian3): Popup;
    /**
     * 显示并设置内容
     * @param position - 位置点
     * @param content - 内容
     * @returns this
     */
    showAt(position: Cesium.Cartesian3, content: string | Element): Popup;
    /**
     * 设置或获取组件是否可用
     */
    enable: boolean;
  }

  /**
   * 状态栏
   */
  declare class StateBar extends Widget {
    constructor();
  }

  /**
   * 提示信息窗
   */
  declare class Tooltip extends Widget {
    constructor();
    /**
     * 设置位置和内容
     * @param position - 屏幕位置
     */
    showAt(position: Event, content: string): void;
  }

  /**
   * 缩放控件
   */
  declare class ZoomController extends Widget {
    constructor();
    /**
     * 获取设置home位置
     */
    homePosition: any;
  }

  /**
   * 基础组件父类
   */
  declare class Widget {
    constructor();
    /**
     * 设置或获取组件是否可用
     */
    enable: boolean;
    /**
     * 组件状态
     */
    readonly state: State;
    /**
     * 注册到viewer
     * @param viewer - 视图
     */
    install(viewer: Viewer): void;
    /**
     * Setting widget content
     * @returns this
     */
    setContent(content: string | Element): Widget;
    /**
     * 隐藏组件
     */
    hide(): void;
    /**
     * 显示组件
     */
    show(): void;
    /**
     * 注册组件类型
     */
    static registerType(type: string): void;
    /**
     * 获取组件类型
     */
    static getWidgetType(type: string): void;
  }

  /**
   * 组件类别
   */
  declare enum WidgetType {}
}
