import difference from 'lodash/difference';
import Property from '../../Property';
import Component from '../../Component';
import {ValidationError} from '../../errors';

export default (uniqueNames) => {
  return (component, subject) => {
    let subjectName;
    let names;

    if (subject instanceof Property) {
      subjectName = subject.constructor.propName;
      names = component.propNames();
    } else if (subject instanceof Component) {
      subjectName = subject.constructor.componentName;
      names = component.componentNames();
    }

    if (difference(names, [subjectName, ...uniqueNames]) > 1) {
      throw new ValidationError();
    }
  };
};
