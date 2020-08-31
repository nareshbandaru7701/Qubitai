import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

	public studentTableTitles = [
		{ name: 'id', label: 'Roll No' },
		{ name: 'fullName', label: 'Name' },
		{ name: 'email', label: 'Email Id' },
		{ name: 'dob', label: 'DOB' },
		{ name: 'age', label: 'Age' },
		{ name: 'phone', label: 'Mobile' },
		{ name: 'organization', label: 'College Name' },
		{ name: 'type', label: 'Regular/Distance' },
		{ name: 'platform', label: 'Sports' }
	];

	public loadingValue = 'loading';
	public studentData: any = [];
	public studentTotalCount: any;
	public currentPage: number = 1;
	public limit: number = 5;
	public base_URL = 'https://my-json-server.typicode.com/nareshbandaru7701/Qubitai/studentData';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	  const self = this;
	  self.getStudentData();
  }

  getStudentData() {
	const self = this;
	self.http.get(self.base_URL + '?_page=' + self.currentPage + '&_limit=' + self.limit).subscribe((res: any) => {
		if(res) {
			self.studentData = res;
			self.studentData.forEach(ele => {
				if(ele.total_rcords) {
					self.studentTotalCount = ele.total_rcords;
				}
			});
		self.loadingValue = 'loaded';
		}
	});
  }

  studentPage(page) {
	const self = this;
	self.loadingValue = 'loading';
	self.currentPage = page;
	self.getStudentData();
  }

}
