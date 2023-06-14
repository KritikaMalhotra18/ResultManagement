import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultDashboardComponent } from './result-dashboard/result-dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from '../app-routing.module';
import { EditStudentComponent } from './edit-student/edit-student.component';



@NgModule({
  declarations: [
    ResultDashboardComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports :[
    ResultDashboardComponent
  ]
})
export class TeacherModule { }
