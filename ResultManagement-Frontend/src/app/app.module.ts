import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TeacherModule} from './teacher/teacher.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentViewModule } from './student-view/student-view.module';
import { HomeScreenComponent } from './home-screen/home-screen.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeacherModule,
    HttpClientModule,StudentViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
