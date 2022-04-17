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

  user!: any

  constructor(private getDetails: ServiceService) { }

  ngOnInit(): void {
    this.getDetails.getUser().subscribe(
      user=>{
        this.user = user;
        console.log(user)
      }
    )
  }

 

}
