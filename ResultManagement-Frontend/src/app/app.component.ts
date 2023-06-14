import { Component } from '@angular/core';
import {StudentApiConnectionService} from "./services/student-api-connection.service"
import { getData } from './util/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  // students:any;
  // constructor(private studentData : StudentApiConnectionService ){
  //   studentData.students().subscribe((data)=>{
  //     console.warn("data",data);
  //     this.students=(data);
  //   })

    // console.log(  getData());
  }
// }
