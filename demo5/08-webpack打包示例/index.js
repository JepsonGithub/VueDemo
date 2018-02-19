// require.config({
//   paths: {
//     jquery: "./jquery.min"
//   }
// })

// // 以前端模块化的方式定义模块
// define(["jquery"], function( $ ) {
//   // 隔行变色
//   $("li:odd").css("background-color", "pink");
//   $("li:even").css("background-color", "blue");
// })


import $ from "./jquery.min.js"

// import { a, b } from "./a.js"
import * as obj from "./a.js"

// 导入 css 文件
import "./index.css"

console.log( obj.a );

$("li:odd").css("background-color", "pink");
$("li:even").css("background-color", "blue");