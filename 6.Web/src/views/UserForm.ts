import { User } from '../models/User';
import { UserProps } from '../types/types';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set_age': this.setAgeButton,
      'click:#set_name': this.setNameButton,
      'click:#save_user': this.saveButton,
    };
  }

  setAgeButton = (): void => {
    this.model.setRandomAge();
  };

  setNameButton = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input?.value;
      this.model.set({ name });
      input.value = '';
    }
  };

  saveButton = (): void => {
    this.model.save();
    this.model.on('save', () => {
      console.log('saved changes');
    });
  };

  template(): string {
    return `
  <input type="text" placeholder=${this.model.get('name')}>
  <button id="set_name">Change Name</button>
  <button id="set_age">Set Random Age</button>
  <br/>
  <br/>
  <button id="save_user">Save</button>
`;
  }
}
