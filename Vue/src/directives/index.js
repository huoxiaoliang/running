import sizeDirect from './sizeDirect'

/** setup custom vue directives. - [安装自定义的vue指令] */
export function setupDirectives(app) {
  app.directive('sizeOb', sizeDirect)
}
