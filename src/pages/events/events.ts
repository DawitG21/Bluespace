import { Component, OnInit } from '@angular/core';
import { EventsProvider } from '../../providers/eventsService';
import { IEvent } from '../../interfaces/eventsInterface';
import { Event } from '../../models/EventsModel';
import { NavController } from 'ionic-angular';
import { EventComponent } from '../event/event';
import { AddEventComponent } from '../addEvent/addEvent';

@Component({
    selector: 'events-selector',
    templateUrl: 'events.html'
})
export class EventsComponent implements OnInit {
    event: IEvent;
    events: IEvent;

    constructor(public _EventsProvider: EventsProvider, public navCtrl: NavController) {
        this.event = new Event();
        this.event.category = "public",
            this.event.userId = "5c39bcde77138f002705c6fc",
            this.event.tag = "tag",
            this.event.description = "description",
            this.event.rate = {
                "amount": 10,
                "time": 1,
                "target": 1,
                "targetType": "personnel"
            },
            this.event.start = "Mon Jan 14 2019",
            this.event.end = "Sat Jan  19 2019",
            this.event.dueDate = "Mon Jan 14 2019",
            this.event.participants = ["one", "two", "three"],
            this.event.prePaid = 100;
    }

    ngOnInit() {
        this._EventsProvider.getEvent()
            .subscribe(res => {
                console.log(res);
                this.events = res;

            });
        /* this._EventsProvider.addEvent(this.event)
        .subscribe(res => {
            console.log(res);
        }) */
    }

    showEvent(event) {
        this.navCtrl.push(EventComponent, {
            item: event
        });
    }

    toAddEventPage() {
        this.navCtrl.push(AddEventComponent);
    }

}