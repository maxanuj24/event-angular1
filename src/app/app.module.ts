import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { SearchbynamePipe } from './searchbyname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    ListEventsComponent,
    UpdateEventComponent,
    SearchbynamePipe
  ],
  imports: [
    BrowserModule,
    routingModule, 
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
