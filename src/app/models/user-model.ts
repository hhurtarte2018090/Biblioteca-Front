import { BookModel } from '../models/book-model';
import { Role } from './role.enum';


export interface UserModel {
    _id?: {},
    identifier: string,
    name: string,
    lastname: string,
    username: string,
    email: string,
    role: Role,
    password: string,
    books?: BookModel[];
}
