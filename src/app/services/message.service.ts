import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.mode';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  baseURL: string = 'http://localhost:3000/api/';
  baseUrlUser = '';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}
  getmessages(): Observable<any> {
    return this.http.get(this.baseURL + 'messages');
  }
  email:string=localStorage.getItem('token');

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL + 'messagesUsers');
  }

  getUserMessage(userName:any):Observable<any>{
    this.baseUrlUser = `${this.baseURL + 'messages'}/userName?userName=${userName}`
    return this.http.get(this.baseUrlUser);
  }
  getUserMessageEmail(userEmail:any):Observable<any>{
    this.baseUrlUser = `${this.baseURL + 'messages'}/userEmail?userEmail=${userEmail}`
    return this.http.get(this.baseUrlUser);
  }

  PostMessageUser(message:Message){
    return this.http.post<any>(this.baseURL+'messagesUser',message,{
      headers: this.headers
    });
  }
  PostMessageAdmin(message:Message){
    return this.http.post<any>(this.baseURL+'messagesAdmin',message,{
      headers: this.headers
    });
  }



}
