import { Component, OnInit } from '@angular/core';
import { EventService } from './../services/event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  events: any;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((response) => {
      console.log(response);
      this.events = response;
      //this.events = Object.assign(response.data);
    })
  }

 addEvent() {
      this.router.navigate(['/add-event']);
  
  }

}
