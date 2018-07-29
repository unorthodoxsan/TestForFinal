import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMgmtComponent } from './Components/user-mgmt/user-mgmt.component';
import { HomeComponent } from './Components/home/home.component';
import { TaskMgmtComponent } from './Components/task-mgmt/task-mgmt.component';
import { ReportComponent } from './Components/report/report.component';

const routes: Routes = [

  { path: 'user_mgmt', component: UserMgmtComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'task_mgmt' , component: TaskMgmtComponent },
  { path: 'reports' , component: ReportComponent },
  { path: '' , component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
