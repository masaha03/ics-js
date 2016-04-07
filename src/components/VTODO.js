import Component from '../Component';
import {singleton, unique} from './validators';

/**
 * VTODO class.
 */
export default class VTODO extends Component {
  static componentName = 'VTODO';

  static requiredProps = ['DTSTAMP', 'UID'];

  static validProps = {
    /* eslint-disable key-spacing, sorting/sort-object-props */
    DTSTAMP:           [singleton()],
    UID:               [singleton()],

    CLASS:             [singleton()],
    COMPLETED:         [singleton()],
    CREATED:           [singleton()],
    DESCRIPTION:       [singleton()],
    DTSTART:           [singleton()],
    GEO:               [singleton()],
    'LAST-MOD':        [singleton()],
    LOCATION:          [singleton()],
    ORGANIZER:         [singleton()],
    PERCENT:           [singleton()],
    PRIORITY:          [singleton()],
    'RECURRENCE-ID':   [singleton()],
    RRULE:             [singleton()],
    SEQUENCE:          [singleton()],
    STATUS:            [singleton()],
    SUMMARY:           [singleton()],
    URL:               [singleton()],

    DUE:               [singleton(), unique(['DURATION'])],
    DURATION:          [singleton(), unique(['DUE'])],

    ATTACH:            [],
    ATTENDEE:          [],
    CATEGORIES:        [],
    COMMENT:           [],
    CONTACT:           [],
    EXDATE:            [],
    RDATE:             [],
    RELATED:           [],
    'REQUEST-STATUS':  [],
    RESOURCES:         []
    /* eslint-disable key-spacing, sorting/sort-object-props */
  }

  static validComponents = {
    VALARM: []
  }
}
