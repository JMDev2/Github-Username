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
  REPO_URL = `https://api.github.com/users/${this.username}/repos`

  getUser(): Observable<any>{
    return this.http.get<any>(this.BASE_URL)
  }

  getRepo(): Observable<any>{
    return this.http.get<any>(this.REPO_URL)
  }

  constructor(private http: HttpClient) { }
  
  }

