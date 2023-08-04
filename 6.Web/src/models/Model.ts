import { AxiosResponse } from 'axios';
import type { Events, HasId, ModelAttributes, Sync } from '../types/types';

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(updateData: T): void {
    this.attributes.set(updateData);
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot Fetch without an Id');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll()).then((): void => {
      this.trigger('save');
    });
  }
}
