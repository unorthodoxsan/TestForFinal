import { Component, Input } from '@angular/core';
import { EmployeeService } from './Services/employee.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent {
  title = 'app';
  constructor() { }
  ngOnInit() { }
}