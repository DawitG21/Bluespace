import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../interfaces/userInterface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class loginProvider {
    url = "http://185.136.165.131/user_service/user/login";

    constructor(public http : Http) {

    }

    login(user) : Observable<IUser> {
        return this.http.post(this.url, user)
        .map((res : Response) => <IUser>res.json())
        .catch(this.handleError);
    }

    handleError(error: Response) {
        return Observable.throw(error);
    }
}