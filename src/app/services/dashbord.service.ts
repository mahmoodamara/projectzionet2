import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  baseURL: string = 'http://localhost:3000/api/';
  baseUrlUser = '';
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}
  getCountUsers(): Observable<any> {
    return this.http.get(this.baseURL + 'countUsers');
  }
  getCountMessages(): Observable<any> {
    return this.http.get(this.baseURL + 'countMessages');
  }
  getCountProducts(): Observable<any> {
    return this.http.get(this.baseURL + 'countProducts');
  }
}
