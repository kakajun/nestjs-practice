import 'reflect-metadata';

// 属性装饰器 用来装饰类的属性
// 元数据添加

function required(target: any, key: string) {
  Reflect.defineMetadata('required', true, target, key);
}

function log(target: any, key: string, descriptor: PropertyDescriptor) {
  return {
    value: function (...args: any[]) {
      console.log(`log: ${key} called with arguments:`, args);
      return descriptor.value.apply(this, args);
    },
  };
}

function validate(user: User) {
  for (let key in user) {
    if (Reflect.getMetadata('required', user, key) === true && !user[key]) {
      throw new Error(`${key} is required`);
    }
  }
}

class User {
  @required
  username: string;

  @log
  setUserName(name: string) {
    this.username = name;
  }
}

const user = new User();
user.setUserName('11');

try {
  validate(user);
  console.log('Validation passed');
} catch (error) {
  console.error(error.message);
}
