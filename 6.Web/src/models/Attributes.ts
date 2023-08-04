export class Attributes<T extends Object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(updatedData: T): void {
    Object.assign(this.data, updatedData);
  }

  getAll(): T {
    return this.data;
  }
}
