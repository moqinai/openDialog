/*
 * @Author: lipengcheng
 * @Date: 2023-07-24 09:52:40
 * @LastEditTime: 2023-07-24 16:21:46
 * @Description: 
 */
import json from "@rollup/plugin-json"
import resolve from '@rollup/plugin-node-resolve' // 配置rollup引入node_modules模块，处理外部依赖
import commonjs from '@rollup/plugin-commonjs'  // 支持解析commonjs模块
// import commonjs from "rollup-plugin-commonjs"
import { terser } from 'rollup-plugin-terser' // 代码压缩插件
// import { eslint } from 'rollup-plugin-eslint'
import { babel } from '@rollup/plugin-babel' // 转译成es5
import autoprefixer from 'autoprefixer' // css兼容前缀插件
import cssnano from 'cssnano' // css压缩
import postcss from "rollup-plugin-postcss" // 集成scss\less\styls

import serve from "rollup-plugin-serve"
import livereload from 'rollup-plugin-livereload'

export default {
  // input:”src/index.js”,  //指定入口文件路径
  // 多入口打包
  // input:[‘src/index.js’,’src/album.js’],
  input: "src/index.js",
  output: [
    {
      dir: "dist",
      format: 'iife',
      entryFileNames: '[name]dev.iife.js',
      name: 'injectSwitchSystem' // If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.
    }
  ],
  plugins:[
    // eslint(),
    resolve(), commonjs(), json(),
    babel({ exclude: 'node_modules/**' }), // 不转译，node_modules里面的代码
    postcss({ plugins: [autoprefixer(), cssnano()] }),
    serve({ // 打开html
      // open: true,
      contentBase: "./",
    }),
    livereload(),
  ]
}
