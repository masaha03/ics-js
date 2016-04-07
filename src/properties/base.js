import Property from '../Property';

export default (name) => {
  return class base extends Property {
    static propName = name;
  };
};
