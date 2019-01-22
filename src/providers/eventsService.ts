import {Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IEvent } from '../interfaces/eventsInterface';

@Injectable()
export class EventsProvider {
    url = "http://185.136.165.131/subscription_service/event";

    constructor(public http : Http) {

    }

    addEvent(event) : Observable<IEvent> {
        let headers = new Headers();
        headers.append("Authentication","Bearer 06c711063423ab8cc9ed54cf5b12e33e8c8b");
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.url, event, options)
        .map((res : Response) => <IEvent>res.json());
    }

    getEvent() : Observable<IEvent> {
        let headers = new Headers();
        headers.append("Authentication","Bearer 06c711063423ab8cc9ed54cf5b12e33e8c8b");
        let options = new RequestOptions({headers:headers});
        return this.http.get(this.url,options)
        .map((res : Response) =><IEvent>res.json());
    }

    
}