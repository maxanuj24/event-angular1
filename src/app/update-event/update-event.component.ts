import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from './../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

 // newEvent: any;
  event: any = [];
  testEvent = {
    name: ''
  }
  name: String;
  type: String;
  length: number;
  views: string;
  num: number;
  id: any;
  evs: any;

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) { 
    this.route.params.subscribe(params => this.id = params['id']);
         
     this.eventService.getEventById(this.id).subscribe((response) => {

      console.log(response);
      this.name =response.name;
      this.type=response.type;
      this.length=response.length;
      this.views=response.views;
      console.log("ID to be updated ",this.id);
      console.log("Updated event Name:    ",this.name);
       console.log("Updated event Name:    ",this.views);
    
    })
  }

  ngOnInit() {
 
  }

 

  updateEvents(): void {
    
 
 console.log(this.views);
  let number_parsed: any = parseInt(this.views);
  console.log("number_parsed : -------------",number_parsed);
 
    this.views=number_parsed+1;
    console.log(this.views);
    let event = {
         name : this.name,
         type : this.type,
         length : this.length,
         views: this.views
      }
    
        console.log(event);
       console.log(this.id);
      this.eventService.updateEvents(event,this.id).subscribe((response) => {
       console.log(response);
        this.router.navigate(['/list-events']);
         }, (err) => {
       console.log(err);
      })
  }

      // onSubmit(value: any)
      // {
      //  console.log(value);
      //  let event = {
      //    name : this.name,
      //    type : this.type,
      //    length : this.length
      //  }
      //   this.eventService.updateEvents(event).subscribe((response) => {
      //  this.router.navigate(['/list-events']);
      //   });
      //  }

}
