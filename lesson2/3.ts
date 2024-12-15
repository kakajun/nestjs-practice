function logClass(constructor: Function) {
  console.log(`Class Created: ${constructor.name}`);
}

@logClass
class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

// 类装饰器工厂

function logClassFactory(message: string) {
  return function (constructor: Function) {
    console.log(`Class Created: ${message}`);
  };
}

@logClassFactory('Hello')
class Car {}
