import Component from '../Component';
import {singleton} from './validators';

export default class VALARM extends Component {
  static componentName = 'VALARM';

  static requiredProps = ['ACTION', 'TRIGGER'];

  static validProps = {
    /* eslint-disable key-spacing, sorting/sort-object-props */
    ACTION:       [singleton()],
    TRIGGER:      [singleton()],

    ATTACH:       [singleton()],
    DESCRIPTION:  [singleton()],
    DURATION:     [singleton()],
    REPEAT:       [singleton()],
    SUMMARY:      [singleton()],

    ATTENDEE:     []
    /* eslint-enable key-spacing, sorting/sort-object-props */
  }
}
