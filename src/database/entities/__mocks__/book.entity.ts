import faker from 'faker';

export const Book = {
  id: faker.datatype.uuid(),
  title: faker.name.title(),
  category: faker.name.title(),
  synopsis: faker.lorem.paragraph(),
};
