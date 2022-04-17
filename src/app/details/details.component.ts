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

  data!: any
  repo!: any;

  constructor(private getDetails: ServiceService) { }

  ngOnInit(): void {
    this.getDetails.getUser().subscribe(
      data=>{
        this.data = data;
        console.log(data)
      }
    )
    this.getDetails.getRepo().subscribe(
      repo=>{
        this.repo = repo;
        console.log(repo)
      }
    )
  }


 

}
