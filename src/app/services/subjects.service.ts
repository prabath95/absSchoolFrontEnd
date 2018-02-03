import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import { environment } from '../../configuration';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SubjectsService {
  url:any = environment.api_url;

  constructor(private http: Http) { }

  post( body): Observable<any> {
    var path = "subject/new";
    return this.http.post(
      `${this.url}${path}`,body)
    .catch(res => {
      return Observable.throw(res.json());
    })
    .map((res: Response) => res.json());
  }

  getallSubjects() : Observable<any>{
    return this.http.get(`${this.url}${'subject/getall'}`)
    .catch(res => {
      return Observable.throw(res.json());
    })
    .map((res:Response)=>res.json());
  }

  assignSubject(body): Observable<any>{
    var path = "assign/new";
    return this.http.post(
      `${this.url}${path}`,body)
    .catch(res => {
      return Observable.throw(res.json());
    })
    .map((res: Response) => res.json());
  }
  getAssignedSubjects(body): Observable<any>{
    var path = "subject/getSubjects";
    return this.http.post(
      `${this.url}${path}`,body)
    .catch(res => {
      return Observable.throw(res.json());
    })
    .map((res: Response) => res.json());
  }
}
