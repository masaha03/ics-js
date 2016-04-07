import Property from '../Property';

/**
 * Generate a generic class with a given name. Used when the property does not
 * require any special transformations. This includes properties such as
 * LOCATION and SUMMARY.
 *
 * @param {string} name Name of the property.
 * @returns {Object} Generic property class.
 */
export default (name) => {
  return class base extends Property {
    static propName = name;
  };
};
