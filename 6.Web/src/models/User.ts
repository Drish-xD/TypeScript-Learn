import type { UserProps } from '../types/types';
import { Events } from './Events';

export class User {
  events: Events = new Events();

  constructor(protected data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName as keyof UserProps]!;
  }

  set(updatedData: UserProps): void {
    Object.assign(this.data, updatedData);
  }
}
