// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { EventService } from './../services/event.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add-event',
//   templateUrl: './add-event.component.html',
//   styleUrls: ['./add-event.component.css']
// })
// export class AddEventComponent implements OnInit {

//   // newEvent: Events = new Events();
//   newEvent: any;

//   constructor(private eventService: EventService, private router: Router) { }

//   ngOnInit() {}

//   eventsForm = new FormGroup({
//     name: new FormControl(),//'', [Validators.required, Validators.minLength(10)]),
//     type: new FormControl(),//'', [Validators.required]),
//     length: new FormControl()//('', [Validators.required])
//   });

//   addEvent() {
//     console.log("data ",this.eventsForm.value);
//     this.eventsForm.value.views = 0;
//     this.newEvent = this.eventsForm.value;
//     this.eventService.addEvent(this.newEvent).subscribe((response) => {
//       this.router.navigate(['/list-events']);
//     });
//   }

// }



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from './../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: []//['input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}']
  //'./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  name:String;
  type:String;
  length:Number;

  // newEvent: Events = new Events();
  newEvent: any;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {}

  eventsForm = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    length: new FormControl()
  });

  addEvent() {

    this.router.navigate(['/list-events']);
    //this.eventsForm.value.views = 0;
    //this.newEvent = this.eventsForm.value;
    /*this.eventService.addEvent(this.newEvent).subscribe((response) => {
      this.router.navigate(['/list-events']);
    });*/
  }
  

  onSubmit(value:any)
  {
    console.log(value);
    // this.newEvent.name =this.name;
    //  this.newEvent.type =this.type;
    //  this.newEvent.length =this.length;
    //  this.newEvent.view =0;
    
      this.eventService.addEvent(value).subscribe((response) => {
       this.router.navigate(['/list-events']);
     });
    console.log("name----adsdfasdf",this.name);
  }
}

