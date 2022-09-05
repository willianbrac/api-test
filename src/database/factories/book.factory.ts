import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Book } from '../entities/book.entity';

define(Book, (faker: typeof Faker) => {
  const book = new Book();
  (book.id = faker.datatype.uuid()),
    (book.title = faker.name.title()),
    (book.category = faker.name.title()),
    (book.synopsis = faker.lorem.paragraph());
  return book;
});
