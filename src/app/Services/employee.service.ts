import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from '../Employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
}

@Injectable()
export class ProductService {
   private _producturl='app/products.json';
   constructor(private _http: Http){}
   
   getproducts(): Observable<IEmployee[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IEmployee[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}