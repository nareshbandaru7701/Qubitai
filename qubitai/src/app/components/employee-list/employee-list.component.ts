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

	public loadingValue = 'loading';
	public employeeData: any = [];
	public employeeTotalCount: any;
	public currentPage: number = 1;
	public limit: number = 5;
	public base_URL = 'https://my-json-server.typicode.com/nareshbandaru7701/Qubitai/employeeData';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	const self = this;
	self.getEmployeeData();
  }

  getEmployeeData() {
	const self = this;
	self.http.get(self.base_URL + '?_page=' + self.currentPage + '&_limit=' + self.limit).subscribe((res: any) => {
		if(res) {
			self.employeeData = res;
			self.employeeData.forEach(ele => {
				if(ele.total_rcords) {
					self.employeeTotalCount = ele.total_rcords;
				}
			});
		self.loadingValue = 'loaded';
		}
	});
  }

  employeePage(page) {
	const self = this;
	self.loadingValue = 'loading';
	self.currentPage = page;
	self.getEmployeeData();
  }

}
