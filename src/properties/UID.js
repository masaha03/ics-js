import guid from 'simple-guid';
import Property from '../Property';

export default class UID extends Property {
  static propName = 'UID';

  shortTransformer () {
    return Boolean(this.value);
  }

  transformer () {
    return guid();
  }
}
