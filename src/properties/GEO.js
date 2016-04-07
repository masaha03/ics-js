import Property from 'Property';

export default class GEO extends Property {
  static propName = 'GEO';

  shortTransformer() {
    return (typeof this.value === 'string' || this.value instanceof String);
  }

  transformer() {
    return this.value.join(';');
  }
}
