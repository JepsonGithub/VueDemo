class Person {
  constructor( name, age ) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log( "所有原型都能访问的 sayHi 方法 ")
  }
}

class Student extends Person {
  sayBye() {
    console.log( "goodBye" )
  }
}

// 实例化对象 p
var p = new Student();
