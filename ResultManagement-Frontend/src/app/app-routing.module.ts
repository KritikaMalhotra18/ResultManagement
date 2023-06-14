import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultDashboardComponent } from './teacher/result-dashboard/result-dashboard.component';
import { AddStudentComponent } from './teacher/add-student/add-student.component';
import { EditStudentComponent } from './teacher/edit-student/edit-student.component';
import { StudentSearchComponent } from './student-view/student-search/student-search.component';
import { StudentSearchResultComponent } from './student-view/student-search-result/student-search-result.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  {
    path:'',
    component:HomeScreenComponent
  },
  {
    path:"dashboard",
    component:ResultDashboardComponent
  },

  {
    path:"dashboard/add",
    component:AddStudentComponent
  },

  {
    path:"dashboard/edit/:rollNo",
    component:EditStudentComponent
  },
  {
    path:"studentDashboard",
    component:StudentSearchComponent
  },
  {
    path:"studentDashboard/studentResult/:rollNo",
    component:StudentSearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
