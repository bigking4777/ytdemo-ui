// 开发环境
const devConfig = require('./config/config.dev');
// 打包环境
const buildConfig = require('./config/config.build');
// console.log(process.env.NODE_ENV);
module.exports = process.env.NODE_ENV === 'production' ? buildConfig : devConfig;
// module.exports = buildConfig;



// module.exports = {
//     pages: {
//       index: {
//         // 修改入口
//         entry: 'examples/main.js',
//         template: 'public/index.html',
//         filename: 'index.html',
        
//       }
//     },
//     chainWebpack: config => {
//         config.module
//           .rule('js')
//           .include
//             .add('/packages')
//             .end()
//           .use('babel')
//             .loader('babel-loader')
//             .tap(options => {
//               return options
//           })
//      }
// }
