import { User } from '../models/User';
import { UserProps } from '../types/types';
import { CollectionView } from './CollectionView';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItems(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
