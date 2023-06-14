import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { studentdetails } from 'src/app/data-type';
import { StudentApiConnectionService } from 'src/app/services/student-api-connection.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  StudentData: undefined | studentdetails;
  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private student : StudentApiConnectionService,private router: Router) {}

  ngOnInit(): void {
    let studentRollno = this.route.snapshot.paramMap.get('rollNo');
    console.warn(studentRollno);
    studentRollno &&
      this.student.getStudentRollno(studentRollno).subscribe((response) => {
        console.warn(response);
        const {data} = response as any;
        this.StudentData = data;

        console.log(this.StudentData?.rollNo);

      });
  }

  submit(data:studentdetails){
    if(this.StudentData){
      data.rollNo = this.StudentData.rollNo;
      console.log(data.rollNo)
    }
    this.student.update(data).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['dashboard'])
    })
  }

  // goTo(){
  //   this.router.navigate(['dashboard'])
  // }

}
