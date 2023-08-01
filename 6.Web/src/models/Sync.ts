import axios, { AxiosResponse } from 'axios';
import { User } from './User';

export class Sync extends User {
  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
