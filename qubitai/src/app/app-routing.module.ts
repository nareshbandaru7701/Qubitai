import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', component: StudentListComponent },
  { path: 'employee-list', component: EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
