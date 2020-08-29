import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  	public employeeTableTitles = [
		{ name: 'id', label: 'Emp Id' },
		{ name: 'fullName', label: 'Name' },
		{ name: 'email', label: 'Email Id' },
		{ name: 'dob', label: 'DOB' },
		{ name: 'age', label: 'Age' },
		{ name: 'phone', label: 'Mobile' },
		{ name: 'organization', label: 'Company Name' },
		{ name: 'type', label: 'Contractor/Permanent' },
		{ name: 'platform', label: 'Technology' }
	];

	public employeeData: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	const self = this;
	self.getEmployeeData();
  }

  getEmployeeData() {
	const self = this;
	self.http.get('./assets/employee.json').subscribe((res: any) => {
		if(res) {
		self.employeeData = res.employeeData;
		}
	});
  }

  employeePage(page) {
	alert('You clicked on page number ' + page + ' of Employee List');
  }

}
