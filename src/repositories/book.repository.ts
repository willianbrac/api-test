import { EntityRepository, Repository } from "typeorm";
import { Book } from "@/database/entities/book.entity";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {}
