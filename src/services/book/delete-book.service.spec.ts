import { Test } from "@nestjs/testing";
import { DeleteBookService } from "./delete-book.service";
import { BookRepository } from "@/repositories/book.repository";
import { Book } from "@/database/entities/__mocks__/book.entity";

jest.mock("@/repositories/book.repository");
describe("DeleteBookService", () => {
  type SutTypes = { sut: DeleteBookService; repository: BookRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [BookRepository, DeleteBookService],
    }).compile();
    const service = moduleRef.get<DeleteBookService>(DeleteBookService);
    const repository = moduleRef.get<BookRepository>(BookRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it("should remove a book", async () => {
    const { sut, repository } = await makeSut();
    await sut.delete(Book.id);
    expect(repository.remove).toHaveBeenCalledWith(Book);
  });
});
