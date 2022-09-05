import { Test } from "@nestjs/testing";
import { GetBookService } from "./get-book.service";
import { BookRepository } from "@/repositories/book.repository";
import { Book } from "@/database/entities/__mocks__/book.entity";

jest.mock("@/repositories/book.repository");
describe("GetBookService", () => {
  type SutTypes = { sut: GetBookService; repository: BookRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository, GetBookService],
    }).compile();
    const service = moduleRef.get<GetBookService>(GetBookService);
    const repository = moduleRef.get<BookRepository>(BookRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it("should find a book by id", async () => {
    const { sut, repository } = await makeSut();
    expect(await sut.get(Book.id)).toBe(Book);
    expect(repository.findOne).toHaveBeenCalledWith(Book.id);
  });
});
