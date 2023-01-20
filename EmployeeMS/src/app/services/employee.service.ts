import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  getAllEmployee():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl + constant.apiEndPoint.getAllEmployee);
  }
  getAllRequests(para:number):Observable<any[]>{
    console.log("getAllRequests URL => "+environment.apiUrl + constant.apiEndPoint.getAllRequestByEmployee + para);
    return this.http.get<any[]>(environment.apiUrl + constant.apiEndPoint.getAllRequestByEmployee + para);
  }
  getAllDepartments():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl + constant.apiEndPoint.getAllDepartments);
  }

  createRequestMaster(obj:any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+constant.apiEndPoint.createRequestMaster,obj);
  }
}
