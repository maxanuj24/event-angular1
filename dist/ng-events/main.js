(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-event/add-event.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-event/add-event.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-event/add-event.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-event/add-event.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br />\n  <h3>Manage Event</h3>\n  <form [formGroup]=\"eventsForm\">\n    <!-- TODO: Build add form here -->\n    <div class=\"form-group\">\n        <b><label for=\"name\">Event Name</label></b>\n        <b><input type=\"text\" class=\"form-control\" id=\"name\" required></b>\n      </div>\n \n      <div class=\"form-group\">\n       <b> <label for=\"type\">Type</label></b>\n            <select type=\"text\" class=\"form-control\" id=\"type\">\n              <option>Cristmas</option>\n              <option>Concert</option>\n              <option>Party</option>\n              <option>Celebration</option>\n            </select>\n       <!--<b> <input type=\"text\" class=\"form-control\" id=\"type\"></b>-->\n      </div>\n\n      <div class=\"form-group\">\n        <b><label for=\"length\">Length (Mins)</label></b>\n        <b><input type=\"text\" class=\"form-control\" id=\"length\"></b>\n      </div>\n \n      <button type=\"submit\" class=\"btn btn-success\" style=\"color: #fff;\">Save</button>\n  </form>\n</div>\n  "

/***/ }),

/***/ "./src/app/add-event/add-event.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-event/add-event.component.ts ***!
  \**************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.eventsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    AddEventComponent.prototype.ngOnInit = function () { };
    AddEventComponent.prototype.addEvent = function () {
        var _this = this;
        this.eventsForm.value.views = 0;
        this.newEvent = this.eventsForm.value;
        this.eventService.addEvent(this.newEvent).subscribe(function (response) {
            _this.router.navigate(['/list-events']);
        });
    };
    AddEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__(/*! ./add-event.component.html */ "./src/app/add-event/add-event.component.html"),
            styles: [__webpack_require__(/*! ./add-event.component.css */ "./src/app/add-event/add-event.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-events';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-event/add-event.component */ "./src/app/add-event/add-event.component.ts");
/* harmony import */ var _list_events_list_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-events/list-events.component */ "./src/app/list-events/list-events.component.ts");
/* harmony import */ var _update_event_update_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-event/update-event.component */ "./src/app/update-event/update-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_6__["AddEventComponent"],
                _list_events_list_events_component__WEBPACK_IMPORTED_MODULE_7__["ListEventsComponent"],
                _update_event_update_event_component__WEBPACK_IMPORTED_MODULE_8__["UpdateEventComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingModule", function() { return routingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-event/add-event.component */ "./src/app/add-event/add-event.component.ts");
/* harmony import */ var _list_events_list_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-events/list-events.component */ "./src/app/list-events/list-events.component.ts");
/* harmony import */ var _update_event_update_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-event/update-event.component */ "./src/app/update-event/update-event.component.ts");




var routes = [
    { path: '', redirectTo: '/list-events', pathMatch: 'full' },
    { path: 'list-events', component: _list_events_list_events_component__WEBPACK_IMPORTED_MODULE_2__["ListEventsComponent"] },
    { path: 'add-events', component: _add_event_add_event_component__WEBPACK_IMPORTED_MODULE_1__["AddEventComponent"] },
    { path: 'update-event/:id', component: _update_event_update_event_component__WEBPACK_IMPORTED_MODULE_3__["UpdateEventComponent"] }
];
var routingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/list-events/list-events.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-events/list-events.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-events/list-events.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-events/list-events.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n    <br />\n    <h3>Events</h3>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Id</th>\n          <th>Event Name</th>\n          <th>Type</th>\n          <th>Length (Mins)</th>\n          <th>Views</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let event of events\">\n          <td>{{event._id.substr(0, 8)}}</td>\n          <td>\n            <a routerLink=\"/update-event/{{event._id}}\">{{event.name}}</a>\n          </td>\n          <!-- TODO: Build table data here -->\n          <td>{{event.type}}</td>\n          <td>{{event.length}}</td>\n          <td>{{event.views}}</td>\n        </tr>\n        \n      </tbody>\n    </table>\n    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"addEvent()\">\n      <a routerLink=\"/add-events\" style=\"color: #fff;\">Add Event</a>\n    </button>\n  </div>"

/***/ }),

/***/ "./src/app/list-events/list-events.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-events/list-events.component.ts ***!
  \******************************************************/
/*! exports provided: ListEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEventsComponent", function() { return ListEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListEventsComponent = /** @class */ (function () {
    function ListEventsComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    ListEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.getEvents().subscribe(function (response) {
            console.log(response.data);
            _this.events = Object.assign(response.data);
        });
    };
    ListEventsComponent.prototype.addEvent = function () {
        this.router.navigate(['/add-event']);
    };
    ListEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-events',
            template: __webpack_require__(/*! ./list-events.component.html */ "./src/app/list-events/list-events.component.html"),
            styles: [__webpack_require__(/*! ./list-events.component.css */ "./src/app/list-events/list-events.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListEventsComponent);
    return ListEventsComponent;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.lastId = 0;
        this.events = [];
        this.baseUrl = "localhost:3000/";
    }
    // Add an event
    EventService.prototype.addEvent = function (event) {
        // TODO: Request to create event
        return this.http.post(this.baseUrl + "/add", event);
    };
    // Get all events
    EventService.prototype.getEvents = function () {
        // TODO: Request to get all events
    };
    // Get event by ID
    EventService.prototype.getEventById = function (id) {
        console.log(id);
        // TODO: Request to get event by ID
        return this.http.get(this.baseUrl + '/event');
    };
    EventService.prototype.updateEvents = function (e) {
        // TODO: Request to update events
        return this.http.get(this.baseUrl + '/event');
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/update-event/update-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/update-event/update-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update-event/update-event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/update-event/update-event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <br />\n    <h3>Manage Event</h3>\n    <form [formGroup]=\"eventsForm\">\n      <!-- TODO: Add form here -->\n   <!-- TODO: Build add form here -->\n    <div class=\"form-group\">\n        <b><label for=\"name\">Event Name</label></b>\n        <b><input type=\"text\" class=\"form-control\" id=\"name\" value = {event.name} required></b>\n      </div>\n \n      <div class=\"form-group\">\n       <b> <label for=\"type\">Type</label></b>\n            <select type=\"text\" class=\"form-control\" id=\"type\" value = {event.value}>\n              <option>Concert</option>\n              <option>Diwali</option>\n              <option>Holi</option>\n              <option>Celebration</option>\n            </select>\n       <!--<b> <input type=\"text\" class=\"form-control\" id=\"type\"></b>-->\n      </div>\n\n      <div class=\"form-group\">\n        <b><label for=\"length\">Length (Mins)</label></b>\n        <b><input type=\"text\" class=\"form-control\" id=\"length\" value = {event.length}></b>\n      </div>\n \n      <button type=\"submit\" class=\"btn btn-success\" style=\"color: #fff;\">Save</button>\n    </form>\n  </div>\n    \n"

/***/ }),

/***/ "./src/app/update-event/update-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/update-event/update-event.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEventComponent", function() { return UpdateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateEventComponent = /** @class */ (function () {
    function UpdateEventComponent(route, eventService, router) {
        var _this = this;
        this.route = route;
        this.eventService = eventService;
        this.router = router;
        this.eventsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.route.params.subscribe(function (params) { return _this.id = params; });
    }
    UpdateEventComponent.prototype.ngOnInit = function () {
        // this.event=this.eventService.getEventById(this.id);
    };
    UpdateEventComponent.prototype.updateEvent = function () {
        var _this = this;
        this.eventService.getEventById(this.id).subscribe(function (response) {
            //response.newEvent.views = parseInt(response.newEvent.views) + 1;
            _this.newEvent = _this.eventsForm.value;
            _this.eventService.updateEvents(response).subscribe(function (response) {
                console.log(response);
                _this.router.navigate(['/list-events']);
            });
        });
        this.router.navigate(['/list-events']);
    };
    UpdateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-event',
            template: __webpack_require__(/*! ./update-event.component.html */ "./src/app/update-event/update-event.component.html"),
            styles: [__webpack_require__(/*! ./update-event.component.css */ "./src/app/update-event/update-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateEventComponent);
    return UpdateEventComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\748381\Downloads\Event_Ang2_V1.1\ng-events\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map