import { User } from './models/User';

const user = new User({ name: 'dada', age: 44 });

user.events.on('change', () => {
  console.log('change done...');
});

user.events.trigger('change');
console.log(user.get('name'));
