import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:3800/user/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extracData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) { }

  login(dataUser): Observable<UserModel>{
    return this.http.post<UserModel>(this.endpoint + 'login', dataUser, this.httpOptions);
  }

  saveUser(dataUser): Observable<UserModel>{
    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('tokenUser')
      })
    };
    return this.http.post<UserModel>(this.endpoint + 'saveUser',dataUser, httpOptionsAuth);
  }

  getUsers():Observable<any>{
    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('tokenUser')
      })
    };
    return this.http.get<UserModel[]>(this.endpoint + 'listUsers',  httpOptionsAuth);
  }

  getUser(id): Observable<any>{
    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('tokenUser')
      })
    };
    return this.http.get<UserModel[]>(this.endpoint + 'getUser/' + id, httpOptionsAuth);
  }

  updateUser(dataUser): Observable<UserModel>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUser')
    });
    return this.http.put<UserModel>(this.endpoint + 'updateUser/' + dataUser._id, dataUser, {headers: headers});
  }

  deleteUser(id): Observable<UserModel>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUser')
    });
    return this.http.delete<UserModel>(this.endpoint + 'deleteUser/' + id, {headers: headers});
  }

}
