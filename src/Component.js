import difference from 'lodash/difference';
import {MIME_TYPE} from './constants';
import * as properties from './properties';
import {
  InvalidComponentError,
  InvalidProvidedComponentError,
  InvalidProvidedPropError
} from './errors';

export default class Component {
  static componentName = 'Component';

  static separator = '\r\n';

  static requiredProps = [];

  static validProps = {};
  static validComponents = {};

  constructor () {
    this.prefix = 'BEGIN:' + this.constructor.componentName;
    this.suffix = 'END:' + this.constructor.componentName;

    this.internalProps = [];
    this.internalComponents = [];
  }

  props () {
    return Object.freeze(this.internalProps.slice(0));
  }

  propNames () {
    return Object.freeze(this.internalProps.map((prop) => {
      return prop.constructor.propName;
    }));
  }

  // Set props to null or {} if not needed
  addProp (name, value, props, skipTransformer) {
    const {validProps} = this.constructor;

    if (!validProps[name]) {
      throw new InvalidProvidedPropError();
    }

    const PropClass = properties[name] || properties.base(name); // eslint-disable-line import/namespace
    const prop = new PropClass(value, props, skipTransformer);

    validProps[name].forEach((validator) => {
      validator(this, prop);
    });

    this.internalProps.push(prop);

    return prop;
  }

  components () {
    return Object.freeze(this.internalComponents.slice(0));
  }

  componentNames () {
    return Object.freeze(this.internalComponents.map((component) => {
      return component.constructor.componentName;
    }));
  }

  addComponent (component) {
    const {validComponents} = this.constructor;
    const {componentName} = component.constructor;

    if (!(component instanceof Component)) {
      throw new TypeError('Expected `component` to be an instance of Component.');
    }

    if (!validComponents[componentName]) {
      throw new InvalidProvidedComponentError();
    }

    validComponents[componentName].forEach((validator) => {
      validator(this, component);
    });

    this.internalComponents.push(component);

    return component;
  }

  reset () {
    this.internalProps = this.internalComponents = [];
  }

  validateRequired () {
    const {requiredProps} = this.constructor;

    if (difference(requiredProps, this.propNames()).length > 0) {
      throw new InvalidComponentError();
    }

    return true;
  }

  toString () {
    this.validateRequired();

    const props = this.internalProps.map((prop) => {
      return prop.toString();
    });

    const components = this.internalComponents.map((component) => {
      return component.toString();
    });

    return [
      this.prefix,
      ...props,
      ...components,
      this.suffix
    ].join(this.constructor.separator);
  }

  toBlob () {
    return new Blob([this.toString()], {type: MIME_TYPE});
  }

  toBase64 () {
    const blob = this.toBlob();
    const reader = new window.FileReader();

    return new Promise((resolve, reject) => {
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.onabort = () => {
        reject();
      };
    });
  }
}
