import { Collection } from './models/Collection';
import { User } from './models/User';
import { UserProps } from './types/types';
import { UserList } from './views/UserList';

const users = new Collection((json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const App = document.getElementById('app');
  if (App) {
    new UserList(App, users).render();
  } else {
    throw new Error('Root element not found');
  }
});

users.fetch();
