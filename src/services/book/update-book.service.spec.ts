import { Test } from "@nestjs/testing";
import faker from "faker";
import { BookRepository } from "@/repositories/book.repository";
import { UpdateBookService } from "./update-book.service";
import { UpdateBookInput } from "@/inputs/book/update-book.input";
import { Book } from "@/database/entities/__mocks__/book.entity";

jest.mock("@/repositories/book.repository");
describe("UpdateBookService", () => {
  type SutTypes = { sut: UpdateBookService; repository: BookRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository, UpdateBookService],
    }).compile();
    const repository = moduleRef.get<BookRepository>(BookRepository);
    const service = moduleRef.get<UpdateBookService>(UpdateBookService);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it("should update a Book", async () => {
    const { sut, repository } = await makeSut();
    const input: UpdateBookInput = {
      id: faker.datatype.uuid(),
      category: faker.name.title(),
      synopsis: faker.lorem.paragraph(),
    };
    expect(await sut.update(input.id, input)).toBe(Book);
    expect(repository.save).toHaveBeenCalledWith(Object.assign(Book, input));
  });
});
