import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';
import { studentdetails } from '../data-type';


@Injectable({
  providedIn: 'root'
})


export class StudentApiConnectionService {
  
  url = 'http://localhost:3000/api/students'
  constructor(private http:HttpClient) { }
  students(){
      return this.http.get(this.url);
  }

  delete(rollNo:number){
    return this.http.delete(`http://localhost:3000/api/students/${rollNo}`)
  }

  add(data:studentdetails){
    return this.http.post(this.url,data);
  }

  getStudentRollno(rollNo: string) {
    return this.http.get<studentdetails>(`http://localhost:3000/api/students/${rollNo}`);
  }

  update(data:studentdetails){
    return this.http.patch(this.url,data);
  }

  checkData(rollNo: string) {
    return this.http.get<studentdetails>(`http://localhost:3000/api/students/${rollNo}`);
  }
}
