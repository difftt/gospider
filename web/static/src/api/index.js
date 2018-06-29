//导入模块
import * as api_table from './table'
import * as api_user from './user'
import * as api_sysdb from './sysdb'

const apiObj = {
  api_table,
  api_user,
  api_sysdb
}

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get() {
        return apiObj
      }
    }
  })
}

export default {
  install
}
