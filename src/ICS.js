import * as components from 'components';

export default class ICS {
  static MIME_TYPE = 'text/calendar';
  static DateFormat = 'YYYYMMDD'
  static DateTimeFormat = 'YYYYMMDDTHHmmss'
}

for (let componentName in components) {
  ICS[componentName] = components[componentName];
}
