import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() newPerson = new EventEmitter()
  username: string = ""

  searchData(username: string){
    this.newPerson.emit(username)
  }

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }
  
}
