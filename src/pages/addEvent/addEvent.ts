import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/eventsInterface';
import { Event } from '../../models/EventsModel';
import { EventsProvider } from '../../providers/eventsService';

@Component({
    selector: 'addEvent-selector',
    templateUrl: 'addEvent.html'
})
export class AddEventComponent {
    Event: IEvent;

    constructor(public _EventsProvider: EventsProvider) {
        this.Event = new Event();
        this.Event.category = '';
        this.Event.start = '';
        this.Event.end = '';
        this.Event.description = '';
        this.Event.tag = '';
        this.Event.userId = "5c39bcde77138f002705c6fc";
        this.Event.rate = {
            "amount": 10,
            "time": 1,
            "target": 1,
            "targetType": "personnel"
        }
        this.Event.dueDate = "Mon Jan 14 2019";
        this.Event.participants = ["one", "two", "three"],
            this.Event.prePaid = 100;
    }

    addEvent() {
        this._EventsProvider.addEvent(this.Event)
            .subscribe(res => {
                console.log(res);
            })
    }
}