import formatDate from 'format-date';
import {DATE_FORMAT, DATE_TIME_FORMAT} from '../constants';
import Property from '../Property';

export default class DTSTAMP extends Property {
  static propName = 'DTSTAMP';

  shortTransformer () {
    return !(this.value instanceof Date);
  }

  transformer () {
    const valueIsDate = this.props.VALUE === 'DATE';

    if (valueIsDate) {
      // Remove timezone offset
      const offset = this.value.getTimezoneOffset() * 60000;

      this.value = new Date(this.value.getTime() + offset);
    }

    const format = valueIsDate ? DATE_FORMAT : DATE_TIME_FORMAT;

    return formatDate(format, this.value);
  }
}
