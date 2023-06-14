import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentApiConnectionService } from 'src/app/services/student-api-connection.service';

@Component({
  selector: 'app-student-search-result',
  templateUrl: './student-search-result.component.html',
  styleUrls: ['./student-search-result.component.css'],
})
export class StudentSearchResultComponent implements OnInit {
  studentResult: any;

  constructor(
    private route: ActivatedRoute,
    private studentData: StudentApiConnectionService
  ) {}

  ngOnInit(): void {
    let editId = this.route.snapshot.paramMap.get('rollNo');

    editId &&
      this.studentData.getStudentRollno(editId).subscribe((response) => {
        const { data } = response as any;

        this.studentResult = data;

        console.log(response);
      });
  }
}
