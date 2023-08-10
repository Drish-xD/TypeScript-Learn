@classDecorators
class Boat {
  @testDescorator
  color: string = 'red';

  get formatedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean!!!')
  pilot(@parameterDescorator speed: string, @parameterDescorator param_2: string): void {
    if (speed === 'fast') {
      console.log('Swish');
    } else {
      console.log('nothing');
    }
  }
}

// we cannot apply decorator to a declaration,
// decorator are initionalize before assigning value of properties
function testDescorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

// decorator to apply on a parameter
function parameterDescorator(targer: Boat, key: string, index: number): void {
  console.log(key, index);
}

// function decorators 'widly used'
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// class decorators
function classDecorators(constructor: typeof Boat) {
  console.log(constructor);
}

// new Boat().pilot();
