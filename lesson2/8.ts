// 可以在方法前检查用户权限, 决定是否可以访问该方法

let users = {
  '001': { roles: ['admin'] },
  '002': { roles: ['user'] },
};

function authorize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let user = users[args[0]];
    if (user && user.roles.includes('admin')) {
      return originalMethod.apply(this, args);
    } else {
      throw new Error('Unauthorized to call this method');
    }
  };
  return descriptor;
}
class AdminPanel {
  @authorize
  deleteUser(userId: string) {
    console.log(`User ${userId} deleted`);
  }
}

const adminPanel = new AdminPanel();
adminPanel.deleteUser('002');
