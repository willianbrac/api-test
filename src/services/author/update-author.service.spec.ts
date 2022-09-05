import { Test } from "@nestjs/testing";
import faker from "faker";
import { Author } from "@/database/entities/__mocks__/author.entity";
import { UpdateAuthorInput } from "@/inputs/author/update-author.input";
import { AuthorRepository } from "@/repositories/author.repository";
import { UpdateAuthorService } from "./update-author.service";

jest.mock("@/repositories/author.repository");
describe("UpdateAuthorService", () => {
  type SutTypes = { sut: UpdateAuthorService; repository: AuthorRepository };
  const makeSut = async (): Promise<SutTypes> => {
    const moduleRef = await Test.createTestingModule({
      providers: [AuthorRepository, UpdateAuthorService],
    }).compile();
    const repository = moduleRef.get<AuthorRepository>(AuthorRepository);
    const service = moduleRef.get<UpdateAuthorService>(UpdateAuthorService);
    const sutTypes = { repository, sut: service };
    return sutTypes;
  };
  it("should update a Author", async () => {
    const { sut, repository } = await makeSut();
    const input: UpdateAuthorInput = {
      id: faker.datatype.uuid(),
      name: faker.internet.userName(),
    };
    expect(await sut.update(input.id, input)).toBe(Author);
    expect(repository.save).toHaveBeenCalledWith(Object.assign(Author, input));
  });
});
