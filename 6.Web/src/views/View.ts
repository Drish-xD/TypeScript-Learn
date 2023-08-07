import { Model } from '../models/Model';
import { HasId } from '../types/types';

export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {};

  constructor(protected parent: Element, protected model: T) {
    this.bindModel();
  }

  abstract template(): string;

  bindModel() {
    this.model.on('change', () => {
      this.render();
    });
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  onRender(): void {}

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const key in eventsMap) {
      const [eventName, selector] = key.split(':');
      fragment
        .querySelectorAll(selector)
        .forEach((element) => element.addEventListener(eventName, eventsMap[key]));
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (const key in regionsMap) {
      const selector = regionsMap[key];
      this.regions[key] = fragment.querySelector(selector)!;
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();

    this.parent.append(templateElement.content);
  }
}
