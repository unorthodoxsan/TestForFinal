import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IEmployee } from '../Employee/employee';

/* const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} */

@Injectable()
export class EmployeeService {
  // postsUrl: string = 'https://api.myjson.com/bins/1b1a9u';

  postsUrl: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.postsUrl);
  }

  /* savePost(post: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.postsUrl, post, httpOptions);
  } */
}