// import TicketBase from './TicketBase/main'

const files = require.context('./', true, /.index.js$/);
var components = []
const obj = {}
files.keys().forEach(key=>{
  // files(key).default.install = function(Vue){
  //   Vue.component(files(key).default.name, files(key).default)
  // }
  obj[files(key).default.name] = files(key).default
//   obj[files(key).default.name].install = function(Vue) {
//     Vue.component(files(key).default.name, files(key).default)
// }
console.log(files.keys());
console.log(components);
  components = components.concat(files(key).default)
})
  // const components = [
  //   TicketBase
    
  // ]
 
  // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
  const install = function (Vue,opt = {}) {
      // 判断是否安装
      if (install.installed) return
      // 遍历注册全局组件
      components.map(component => {
          Vue.component(component.name, component)
      })
  }

  // 判断是否是直接引入文件
  if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
  }

 export default install
 
// 
  export {
      // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
      // install,
      // 以下是具体的组件列表
      // TicketBase
      obj
      
  }
