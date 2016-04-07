import Component from 'Component';
import { singleton } from 'components/validators';

export default class VCALENDAR extends Component {
  static componentName = 'VCALENDAR';

  static requiredProps = ['PRODID', 'VERSION'];

  static validProps = {
    PRODID:    [singleton()],
    VERSION:   [singleton()],

    CALSCALE:  [singleton()],
    METHOD:    [singleton()]
  }

  static validComponents = {
    VEVENT:     [],
    VTODO:      [],
    VJOURNAL:   [],
    VFREEBUSY:  [],
    VTIMEZONE:  []
  }
}
