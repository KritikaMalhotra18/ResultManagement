import { Component } from '@angular/core';
import {StudentApiConnectionService} from "../../services/student-api-connection.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-dashboard',
  templateUrl: './result-dashboard.component.html',
  styleUrls: ['./result-dashboard.component.css'],
})
export class ResultDashboardComponent {
  students: any[] = [];

  constructor(private studentData: StudentApiConnectionService, private router:Router) {
    studentData.students().subscribe((response) => {
      console.warn('data', response);

      this.students = Object.values((response as any).data);
    });
  }

  deleteStudent(rollNo:number){
    this.studentData.delete(rollNo).subscribe((result)=>{
      console.log(rollNo);
      this.router.navigate(['dashboard'])
    })
    
  }
  goTo(){
    this.router.navigate(['/'])
  }
}
