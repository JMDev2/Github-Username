import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  username = "JOSEPHMAINA1995"

  BASE_URL = `https://api.github.com/users/${this.username}`

  getUser(): Observable<any>{
    return this.http.get<any>(this.BASE_URL)
  }

  constructor(private http: HttpClient) { }
  // getUsers(): Observable<Users>{
  //   return this.http.get<Users>(this.BASE_URL +`Username`)

  }

