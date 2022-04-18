import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Repository } from '../repository';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  username = "JOSEPHMAINA1995"
  // users = new Users ("","","","","","","")
  // data: Users = new Users("","","","","","","")
  data!: any
  repo!: any
  // repo: Repository [] = []

  constructor(private serviceService: ServiceService) { }

  getOutput(newPerson: any){
    this.username = newPerson
    this.getRepos = (newPerson)
    this.getDetails = (newPerson)
    this.serviceService.getUser(this.username).then(
      (data)=>(
        this.data = data
       
      )
    )
    this.serviceService.getRepo(this.username).subscribe(
      repo=>{
        this.repo = repo;
        console.log(repo)
      }
    )
  }

  getDetails(username: string){
  
    this.serviceService.getUser(username).then(
      (data)=>(
        this.data = data
       
      )
    )
  }
  getRepos(username: string){
    this.serviceService.getRepo(username).subscribe(
        repo=>{
          this.repo = repo;
          console.log(repo)
        }
      )
  }

  ngOnInit(): void {
    this.getDetails(this.username)
    this.getRepos(this.username)

  }


  

}
