import { IUser } from '../interfaces/userInterface';

export class User implements IUser {
    firstName : string
    lastName : string
    email : string
    phone : string
    website : string
    userName : string
    password : string
    activateUsing : string
    role : string
}