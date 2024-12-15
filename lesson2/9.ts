// 方法装饰器实现缓存结果

function cache(target: any, name: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const key = JSON.stringify(args);
    if (this.cache[name]) {
      return this.cache[name][key];
    }
    const result = fn.apply(this, args);
    this.cache[name] = this.cache[name] || {};
    this.cache[name][key] = result;
    return result;
  };
  return descriptor;
}

class MathLib {
  cache: any = {};
  @cache
  add(a: number, b: number) {
    return a + b;
  }
}

const m = new MathLib();
console.log(m.add(1, 2));
