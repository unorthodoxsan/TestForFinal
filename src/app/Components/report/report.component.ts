import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'jsonurl';
  dataSource = 'db.json';
}