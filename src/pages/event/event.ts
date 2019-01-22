import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/eventsInterface';
import { NavParams } from 'ionic-angular';

@Component({
    selector : 'event-selector',
    templateUrl : 'event.html'
}) 
export class EventComponent {
    Event : IEvent;

    constructor(public navParams : NavParams) {
        this.Event = navParams.get('item');
    }

}