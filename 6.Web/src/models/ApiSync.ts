import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { HasId } from '../types/types';

export class ApiSync<T extends HasId> {
  private axios_: AxiosInstance = axios.create({ baseURL: 'http://localhost:3000/users' });

  fetch(id: number): AxiosPromise {
    return this.axios_.get(`/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    console.log(id);

    if (id) {
      return this.axios_.put(`/${id}`, data);
    } else {
      return this.axios_.post('/', data);
    }
  }
}
