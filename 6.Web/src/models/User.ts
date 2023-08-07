import type { UserProps } from '../types/types';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { Eventing } from './Events';
import { Model } from './Model';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(new Attributes<UserProps>(attrs), new ApiSync<UserProps>(), new Eventing());
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>((json: UserProps) => User.buildUser(json));
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
