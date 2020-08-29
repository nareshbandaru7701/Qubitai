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

	public studentData: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
	  const self = this;
	  self.getStudentData();
  }

  getStudentData() {
	const self = this;
	self.http.get('./assets/student.json').subscribe((res: any) => {
		if(res) {
			self.studentData = res.studentData;
		}
	});
  }

  studentPage(page) {
	alert('You clicked on page number ' + page + ' of Student List');
  }

}
