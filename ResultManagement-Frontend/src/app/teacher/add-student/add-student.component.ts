import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { studentdetails } from 'src/app/data-type';
import { StudentApiConnectionService } from 'src/app/services/student-api-connection.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(private studentData:StudentApiConnectionService,private router:Router){}

  submit(data:studentdetails){
  
    this.studentData.add(data).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['dashboard'])
    })

  }

}
