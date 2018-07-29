import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { IEmployee } from '../../Employee/employee';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.css']
})
export class UserMgmtComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addPost(name,number) {
    if (!name || !number) {
      alert('Please add post');
    } else { 
      
      let obj = { 
      "emp_number": 31920,
      "emp_name": "Prashant",
      "week": 25,
      "status": "In Progress",
      "tot_task": 6
     };
      this.employeeService.savePost(obj).subscribe(emp => {
        console.log("Post=" + emp);
      });
    }
  }
}