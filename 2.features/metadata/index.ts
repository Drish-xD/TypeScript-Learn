import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'Hello World', plane);
// Reflect.defineMetadata('height', 12, plane);

// const note = {
//   note: Reflect.getMetadata('note', plane),
//   heigth: Reflect.getMetadata('height', plane),
// };

// console.log({ plane, note });

// Reflect.defineMetadata('note', 'Hello World', plane, 'color');

// const note2 = Reflect.getMetadata('note', plane, 'color');
// console.log(note2);

@controller
class Plane {
  color: string = 'red';

  @Get('/login')
  goTo(): void {
    console.log('login route');
  }
}

function Get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log('path :', path);
  }
}
