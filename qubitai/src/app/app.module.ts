import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    EmployeeListComponent,
    ReusableTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
