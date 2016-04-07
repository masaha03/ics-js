import Component from '../Component';
import {singleton} from './validators';

export default class VCALENDAR extends Component {
  static componentName = 'VCALENDAR';

  static requiredProps = ['PRODID', 'VERSION'];

  static validProps = {
    /* eslint-disable key-spacing, sorting/sort-object-props */
    PRODID:    [singleton()],
    VERSION:   [singleton()],

    CALSCALE:  [singleton()],
    METHOD:    [singleton()]
    /* eslint-enable key-spacing, sorting/sort-object-props */
  }

  static validComponents = {
    /* eslint-disable key-spacing */
    VEVENT:     [],
    VFREEBUSY:  [],
    VJOURNAL:   [],
    VTIMEZONE:  [],
    VTODO:      []
    /* eslint-enable key-spacing */
  }
}
