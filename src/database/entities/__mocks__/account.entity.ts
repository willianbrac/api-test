import faker from 'faker';

export const Account = {
  id: faker.datatype.uuid(),
  name: faker.internet.userName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};
