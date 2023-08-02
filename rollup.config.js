/*
 * @Author: lipengcheng
 * @Date: 2023-07-24 09:52:40
 * @LastEditTime: 2023-07-25 17:20:01
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


export default {
  // input:”src/index.js”,  //指定入口文件路径
  // 多入口打包
  // input:[‘src/index.js’,’src/album.js’],
  input: "src/index.js",
  output: [
    {
      // file:”dist/bundle.js”, // 指定输出的文件名
      // format:”iife”, // 指定输出的格式
      dir: "dist",
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
      exports: 'auto'
    },
    {
      dir: "dist",
      format: 'esm',
      entryFileNames: '[name].esm.js',
      exports: 'auto'
    },
    // {
    //   dir: "dist",
    //   format: 'iife',
    //   entryFileNames: '[name]dev.iife.js',
    // }
  ],
  plugins:[
    // eslint(),
    resolve({
      browser: true // 如果打包后的代码如果是使用在浏览器上的，需要进行配置
    }),
    commonjs(), terser(), json(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }), // 不转译，node_modules里面的代码
    postcss({ plugins: [autoprefixer(), cssnano()] }),
  ]
}
