import faker from 'faker';

export const Author = {
  id: faker.datatype.uuid(),
  name: faker.internet.userName(),
};
