import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { BookModel } from 'src/app/models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  endpoint = 'http://localhost:3800/book/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) { }

  saveBook(dataBook): Observable<BookModel>{
    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('tokenUser')
      })
    };
    return this.http.post<BookModel>(this.endpoint + 'saveBook',dataBook, httpOptionsAuth);
  }

  getbooks():Observable<any>{
    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('tokenUser')
      })
    };
    return this.http.get<BookModel[]>(this.endpoint + 'findAll', httpOptionsAuth);
  }
  getBook(id): Observable<any>{
    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('tokenUser')
      })
    };
    return this.http.get<BookModel[]>(this.endpoint + 'getBook/' + id, httpOptionsAuth);
  }

  updateBook(dataBook): Observable<BookModel>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUser')
    });
    return this.http.put<BookModel>(this.endpoint + 'updateBook/' + dataBook._id, dataBook, {headers: headers});
  }

  deleteBook(id): Observable<BookModel>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUser')
    });
    return this.http.delete<BookModel>(this.endpoint + 'deleteBook/' + id, {headers: headers});
  }

  lendBook(dataBook): Observable<BookModel>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUser')
    });
    return this.http.put<BookModel>(this.endpoint + 'lendBook', dataBook, {headers: headers});
  }

  getBooksByUser(): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUser')
    });
    return this.http.get<BookModel[]>(this.endpoint + 'getBooksByUser', {headers: headers});
  }

}
