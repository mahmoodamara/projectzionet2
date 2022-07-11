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

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL + 'messagesUsers');
  }

  getUserMessage(userEmail:any):Observable<any>{
    this.baseUrlUser = `${this.baseURL + 'messages'}/userEmail?userEmail=${userEmail}`
    return this.http.get(this.baseUrlUser);
  }

  PostMessage(message:Message){
    return this.http.post<any>(this.baseURL+'messages',message,{
      headers: this.headers
    });
  }

}
