import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { IEmployee } from '../../Employee/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps: IEmployee[];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getEmp().subscribe(emps => {
      this.emps = emps;
    });
  }
}
