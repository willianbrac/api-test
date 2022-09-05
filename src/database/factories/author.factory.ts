import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Author } from '../entities/author.entity';

define(Author, (faker: typeof Faker) => {
  const author = new Author();
  author.id = faker.datatype.uuid();
  author.name = faker.internet.userName();
  return author;
});
