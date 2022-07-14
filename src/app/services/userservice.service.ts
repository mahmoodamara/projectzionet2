import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Email } from '../models/email.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseURL: string = 'http://localhost:3000/api/users';
  baseURLEmail: string = 'http://localhost:3000/api/email';


  email:string=localStorage.getItem('token');
  url:string = `/shearchofemail?email=${this.email}`;
  urlCode:string = `/codeUser?email=${this.email}`;


  headers = { 'content-type': 'application/json' };
  constructor(private http : HttpClient , private router:Router) { }

  getUsers():Observable<any>{
    return this.http.get(this.baseURL);
  }

  getcode():Observable<any>{
    return this.http.get(`${this.baseURL}${this.urlCode}`);
  }

PostUser(user){
    return this.http.post<any>(this.baseURL+'/signup',user,{
      headers: this.headers
    });
  }
loginUser(user){
    return this.http.post<any>(this.baseURL+'/login',user,{
      headers: this.headers
    });
  }
  getUser():Observable<any>{
    return this.http.get(this.baseURL+this.url);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  putUser(user: User) {
    return this.http.put(this.baseURL + `/${user._id}`, user);
  }
  deleteUser(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  Sendemail(email):Observable<any>{
    let body = JSON.stringify(new Email(email,""));
    return this.http.post(`${this.baseURL}/sendEmail` , body,{
    headers: this.headers
    });
  }

  sendPaswsord(email,password):Observable<any>{
    let body = JSON.stringify(new Email(email,password));
    return this.http.post(`${this.baseURL}/sendPassword` , body,{
    headers: this.headers
    });
  }

  deleteEmail(_id: string) {
    return this.http.delete(this.baseURLEmail + `/${_id}`);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
