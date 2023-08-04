import { AxiosPromise } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

interface HasId {
  id?: number;
}

type Callback = () => void;

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(value: T): void;
  getAll(): T;
}

interface Sync<T> {
  save(data: T): AxiosPromise;
  fetch(id: number): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export type { Callback, Events, HasId, ModelAttributes, Sync, UserProps };

