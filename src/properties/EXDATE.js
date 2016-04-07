import formatDate from 'format-date';
import {DATE_FORMAT, DATE_TIME_FORMAT} from '../constants';
import Property from '../Property';

/**
 * EXDATE property.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.8.5.1
 */
export default class EXDATE extends Property {
  static propName = 'EXDATE';

  /**
   * Check if property's value is not an array of Date instances.
   *
   * @returns {boolean} Whether the property's value is transformed.
   */
  shortTransformer () {
    if (Array.isArray(this.value)) {
      return !this.value.every((value) => {
        return value instanceof Date;
      });
    } else {
      return true;
    }
  }

  /**
   * Format the property's values to string representations of a date or
   * datetime. The values are joined using commas to separate values.
   *
   * @returns {string} The property's transformed value.
   */
  transformer () {
    const valueIsDate = this.props.VALUE === 'DATE';
    const format = valueIsDate ? DATE_FORMAT : DATE_TIME_FORMAT;

    return this.value.map((value) => {
      if (valueIsDate) {
        // Remove timezone offset
        const offset = value.getTimezoneOffset() * 60000;

        return formatDate(format, new Date(value.getTime() + offset));
      }

      return formatDate(format, value);
    }).join(',');
  }
}
