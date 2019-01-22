import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { workSpaceInterface } from '../interfaces/workSpaceInterface';

@Injectable()
export class MyworkspaceProvider {
  
  docs: workSpaceInterface;
  subject = new Subject<any>();
  _url:any = 'http://185.136.165.131/subscription_service/workspace'; 

  constructor(private _http: Http) { }

  getWorkSpace(): Observable<workSpaceInterface> {   
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer 06c711063423ab8cc9ed54cf5b12e33e8c8b');
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this._url, options)
      .map((res: Response) => <workSpaceInterface>res.json());
  }

  addWorkSpace(docs: any): Observable<workSpaceInterface> {
    const body = JSON.stringify(docs);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer 06c711063423ab8cc9ed54cf5b12e33e8c8b');
    let options = new RequestOptions({ headers: headers, body: body });
    return this._http.post(this._url, body, options)
      .map((response) => <workSpaceInterface>response.json());
  }

  updateWorkSpace(docs: workSpaceInterface) {
    const body = JSON.stringify(docs);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer 06c711063423ab8cc9ed54cf5b12e33e8c8b');
    const options = new RequestOptions({ headers: headers, body: docs });
    return this._http.put(this._url, body, options)
      .map((response: Response) => response);
  }
 
  deleteWorkSpace(docs: workSpaceInterface) {  
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer 06c711063423ab8cc9ed54cf5b12e33e8c8b');    
    return this._http.delete(this._url, { headers:headers, body: docs } )
      .map((response => response));
  }

}
