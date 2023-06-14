import { Component, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { StudentApiConnectionService } from 'src/app/services/student-api-connection.service';

@Component({
  selector: 'app-student-search',

  templateUrl: './student-search.component.html',

  styleUrls: ['./student-search.component.css'],
})
export class StudentSearchComponent {
  rollNo: string = '';

  name: string = '';

  @ViewChild('myForm', { static: false })
  myForm!: NgForm;

  constructor(
    private router: Router,
    private teacherApiService: StudentApiConnectionService
  ) {}

  search(): void {
    this.teacherApiService.checkData(this.rollNo).subscribe((result) => {
      const { data } = result as any;

      console.log(data);

      if (!data) {
        alert('Data not found!');
      } else if (data.Name !== this.name) {
        console.log(this.name);
        alert('Data incorrect!');
      } else {
        this.router.navigate([`studentDashboard/studentResult/${data.rollNo}`]);

        console.log(data);
      }
    });
  }
  clearForm() {
    if (this.myForm) {
      this.myForm.resetForm();
    }
  }
}
