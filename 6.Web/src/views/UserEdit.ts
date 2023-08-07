import { User } from '../models/User';
import { UserProps } from '../types/types';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
import { View } from './View';

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `<main>
    <section class='user_show'></section>
    <section class='user_edit'></section>
    </main>`;
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user_show',
      userForm: '.user_edit',
    };
  }
}
