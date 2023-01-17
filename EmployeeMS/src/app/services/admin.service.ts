import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+constant.apiEndPoint.users);
  }

  getEmployee():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+constant.apiEndPoint.employees);
  }
}
