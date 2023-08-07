import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItems(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');

    for (let molel of this.collection.model) {
      const itemParent = document.createElement('div');
      this.renderItems(molel, itemParent);
      templateElement.content.append(itemParent);
    }
    this.parent.append(templateElement.content);
  }
}
