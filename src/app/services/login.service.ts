import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import { environment } from '../../configuration';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoginService {
  url:any = environment.api_url;

  constructor(private http: Http) { }

  post(path, body): Observable<any> {
    console.log(body);
    return this.http.post(
      `${this.url}${path}`,body)
    .catch(res => {
      console.log('err');
      console.log(res);
      return Observable.throw(res.json());
    })
    .map((res: Response) => res.json());
  }
  signUp(body): Observable<any> {
    console.log(body);
    return this.http.post(
      `${this.url}${'user/new'}`,body)
    .catch(res => {
      console.log('err');
      console.log(res);
      return Observable.throw(res.json());
    })
    .map((res: Response) => res.json());
  }
  getAllStudents() : Observable<any> {
    return this.http.get(`${this.url}${'user/getall'}`)
    .catch(res => {
      return Observable.throw(res.json());
    })
    .map((res: Response) => res.json());
  }
}
