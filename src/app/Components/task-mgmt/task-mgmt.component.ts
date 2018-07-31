import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../Employee/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-task-mgmt',
  templateUrl: './task-mgmt.component.html',
  styleUrls: ['./task-mgmt.component.css']
})
export class TaskMgmtComponent implements OnInit {

  emps: IEmployee[];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getPosts().subscribe(emps => {
      this.emps = emps;
    });
  }
}
