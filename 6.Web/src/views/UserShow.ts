import { User } from '../models/User';
import { UserProps } from '../types/types';
import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <h1>User Details</h1>
    <div>User Name: ${this.model.get('name')}</div>
    <div>User age: ${this.model.get('age')}</div>
    <br/>
    `;
  }
}
