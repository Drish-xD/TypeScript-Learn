import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Events } from '../types/types';
import { Eventing } from './Events';

export class Collection<T, K> {
  private axios_: AxiosInstance = axios.create({ baseURL: 'http://localhost:3000/users' });

  constructor(public deserialize: (json: K) => T) {}

  model: T[] = [];
  events: Events = new Eventing();

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    this.axios_.get('/').then((res: AxiosResponse) => {
      res.data.forEach((value: K) => {
        this.model.push(this.deserialize(value));
      });
      this.trigger('change');
    });
  }
}
