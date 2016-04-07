export default class Property {
  static keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;
  static propName = 'Property';

  constructor (value, props, skipTransformer = false) {
    this.value = value;
    this.props = props || {};
    this.skipTransformer = skipTransformer;
  }

  shortTransformer () {
    return true;
  }

  transformer () {
    return this.value;
  }

  transformedValue () {
    if (this.skipTransformer || this.shortTransformer()) {
      return this.value;
    }

    return this.transformer();
  }

  transformedProps () {
    const props = [];

    Object.keys(this.props).forEach((key) => {
      props.push(key + '=' + this.props[key]);
    });

    return props.join(';');
  }

  toString () {
    const hasProps = Object.keys(this.props).length > 0;
    const key = this.constructor.propName + (hasProps ? ';' + this.transformedProps() : '');
    const value = this.transformedValue();
    const keyValuePair = key + ':' + value;

    return keyValuePair.match(/.{1,75}/g).join('\r\n ');
  }
}
