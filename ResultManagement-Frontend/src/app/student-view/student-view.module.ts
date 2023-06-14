import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSearchComponent } from './student-search/student-search.component';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from '../app-routing.module';
import { StudentSearchResultComponent } from './student-search-result/student-search-result.component';



@NgModule({
  declarations: [
    StudentSearchComponent,
    StudentSearchResultComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports :[
    StudentSearchComponent,
    AppRoutingModule
  ]
})
export class StudentViewModule { }
