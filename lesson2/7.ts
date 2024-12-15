// 方法装饰器

export function Log(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  const originMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${methodName} with`, args);
    return originMethod.apply(this, args);
  };
}

class MathLib {
  @Log
  static add(x: number, y: number) {
    return x + y;
  }
}

const sun = MathLib.add(1, 2);
console.log(sun);
