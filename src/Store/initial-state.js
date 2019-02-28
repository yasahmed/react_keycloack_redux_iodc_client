import uniqueId from 'lodash/uniqueId';

const clients = [
  {
    name: 'john',
    id: uniqueId(),
    age: 60,
  },
  { name: 'doe', id: uniqueId(), age: 20 },
];

export default { clients };
