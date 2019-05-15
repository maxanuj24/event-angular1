import { Injectable } from '@angular/core';
import { Events } from './../model/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  lastId = 0;

  events: Events[] = [];

  constructor(private http: HttpClient) { }
baseUrl:String ="http://localhost:8000";
  // Add an event
  addEvent(event: Events) {
    // TODO: Request to create event
   // event._id= Math.random()*10;
    return this.http.post(this.baseUrl+"/event",event);
  }

  // Get all events
  getEvents(): any {
    return this.http.get(this.baseUrl+'/event');
    // TODO: Request to get all events
  }

  // Get event by ID
  getEventById(id: string): any {
    console.log("INSIDE EVENT SERVICE :",id);
   // let x:String = id;
    // TODO: Request to get event by ID
    return this.http.get(this.baseUrl+"/event/"+id);
  }

  updateEvents(event,id):any {
    // TODO: Request to update events
   // let id:String = e._id;
    return this.http.put(this.baseUrl+"/event/"+id+'',event);
  }
}
