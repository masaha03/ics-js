import formatDate from 'format-date';
import {DATE_FORMAT, DATE_TIME_FORMAT} from '../constants';
import Property from '../Property';

/**
 * DTSTAMP property.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.8.7.2
 */
export default class DTSTAMP extends Property {
  static propName = 'DTSTAMP';

  /**
   * Check if property's value is not an instance of Date.
   *
   * @returns {boolean} Whether the property's value is transformed.
   */
  shortTransformer () {
    return !(this.value instanceof Date);
  }

  /**
   * Format the property's value to a string representation of a date or
   * datetime.
   *
   * @returns {string} The property's transformed value.
   */
  transformer () {
    let value = this.value;

    const valueIsDate = this.props.VALUE === 'DATE';

    if (valueIsDate) {
      // Remove timezone offset
      const offset = this.value.getTimezoneOffset() * 60000;

      value = new Date(this.value.getTime() + offset);
    }

    const format = valueIsDate ? DATE_FORMAT : DATE_TIME_FORMAT;

    return formatDate(format, value);
  }
}
