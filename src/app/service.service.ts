import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  BASE_URL: string = ""
  constructor(private http: HttpClient) { }
  getUsers(): Observable<Users>{
    return this.http.get<Users>(this.BASE_URL +`Username`)

  }
}
