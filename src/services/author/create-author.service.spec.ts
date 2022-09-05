import { Test } from "@nestjs/testing";
import faker from "faker";
import { Author } from "@/database/entities/__mocks__/author.entity";
import { AuthorRepository } from "@/repositories/author.repository";
import { CreateAuthorService } from "./create-author.service";
import { CreateAuthorInput } from "@/interfaces/author/create-author.interface";

jest.mock("@/repositories/author.repository");
describe("CreateAuthorService", () => {
  type SutTypes = { sut: CreateAuthorService; repository: AuthorRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AuthorRepository, CreateAuthorService],
    }).compile();
    const service = moduleRef.get<CreateAuthorService>(CreateAuthorService);
    const repository = moduleRef.get<AuthorRepository>(AuthorRepository);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it("should create a Author", async () => {
    const { sut, repository } = await makeSut();
    const authorCreateInput: CreateAuthorInput = {
      name: faker.internet.userName(),
    };
    expect(await sut.create(authorCreateInput)).toBe(Author);
    expect(repository.save).toHaveBeenCalledWith(authorCreateInput);
  });
});
