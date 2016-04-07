import Property from '../Property';

const baseProp = (name) => {
  return class base extends Property {
    static propName = name;
  };
};

export default baseProp;
