import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AdmindeptService {

  constructor(private http : HttpClient) { }
  getAssignedRequestByUserId(id:any):Observable<any[]>{
    console.log(environment.apiUrl+constant.apiEndPoint.getAssignedRequestByUserId+id);
    return this.http.get<any[]>(environment.apiUrl+constant.apiEndPoint.getAssignedRequestByUserId+id);
  }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+constant.apiEndPoint.users);
  }

  startRequest(obj : any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+constant.apiEndPoint.startRequest+obj.RequestId,obj);
  }

  closeRequest(obj : any):Observable<any>{
    return this.http.post<any>(environment.apiUrl+constant.apiEndPoint.closeRequest+obj.RequestId,obj);
  }

  getAllRequests():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl + constant.apiEndPoint.getAllRequests);
  }

}
