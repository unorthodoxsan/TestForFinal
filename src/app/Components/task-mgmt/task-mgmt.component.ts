import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from '../../Employee/employee';
import { EmployeeService } from '../../Services/employee.service';
import { AppComponent } from '../../app.component';
declare var $: any;

@Component({
  selector: 'app-task-mgmt',
  templateUrl: './task-mgmt.component.html',
  styleUrls: ['./task-mgmt.component.css']
})
export class TaskMgmtComponent implements OnInit {

  emps: IEmployee[];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getEmp().subscribe(emps => {
      this.emps = emps;
    });

    $(document).ready(function () {
      var next = 1;
      $(".add-more").click(function (e) {
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-me').click(function (e) {
          e.preventDefault();
          var fieldNum = this.id.charAt(this.id.length - 1);
          var fieldID = "#field" + fieldNum;
          $(this).remove();
          $(fieldID).remove();
        });
      });
    });
  }
}
