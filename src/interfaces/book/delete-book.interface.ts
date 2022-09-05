export interface DeleteBookService {
  delete(id: string): Promise<true>;
}
