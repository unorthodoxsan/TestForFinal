import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IEmployee } from '../Employee/employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class EmployeeService {

  postsUrl: string = 'http://localhost:3000/emp_data';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.postsUrl);
  }

  savePost(emp: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.postsUrl, emp, httpOptions);
  }
}