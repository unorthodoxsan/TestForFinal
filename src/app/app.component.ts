import { Component } from '@angular/core';
import { IEmployee } from './Employee/employee';
import { EmployeeService } from './Services/employee.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent {
  title = 'app';

  iproducts: IEmployee[];
   constructor(private _product: EmployeeService) {
   }
   
   ngOnInit() : void {
      this._product.getPosts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
}