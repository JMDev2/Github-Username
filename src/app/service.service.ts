import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Users } from './users';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  BASE_URL = "https://api.github.com"
  async getUser(username: string){
    const person = this.http.get<any>(`${this.BASE_URL}/users/${username}`)
    return await lastValueFrom(person).then((response)=>
      response
    )
  }

  getRepo(username: string): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/users/${username}/repos`)


  }

  constructor(private http: HttpClient) { }
  
  }

