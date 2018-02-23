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
// import * as obj from "./a.js"

import aa from "./a.js"

import { a } from "./a.js"

// 导入 bootstrap
import "./node_modules/bootstrap/dist/css/bootstrap.css"

console.log( aa );
console.log( a );

// 导入 css 文件
import "./index.css"

// 导入 less 文件
import "./index.less"

class Person{
  constructor( name, age ) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log("每个实例都有的原型上的方法")
  }
}

let p = new Person( 1, 2 );

console.log( p ) 


$("li:odd").css("background-color", "pink");
$("li:even").css("background-color", "blue");