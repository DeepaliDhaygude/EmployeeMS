import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {

   }

   onLogin(obj:any):Observable<any>{
    console.log('I am in Login Service!!!');
    return this.http.post<any>(environment.apiUrl+constant.apiEndPoint.login,obj);
   }
}
