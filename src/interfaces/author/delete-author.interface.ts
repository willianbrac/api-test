export interface DeleteAuthorService {
  delete(id: string): Promise<true>;
}
