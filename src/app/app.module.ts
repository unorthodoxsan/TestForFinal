import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpModule } from '@angular/http';
import { EmployeeService } from '../app/Services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { UserMgmtComponent } from './Components/user-mgmt/user-mgmt.component';
import { TaskMgmtComponent } from './Components/task-mgmt/task-mgmt.component';
import { ReportComponent } from './Components/report/report.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserMgmtComponent,
    TaskMgmtComponent,
    ReportComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
