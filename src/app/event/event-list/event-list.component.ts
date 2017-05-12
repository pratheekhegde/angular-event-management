import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Event } from './../../shared/models/event.interface';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {

  events: FirebaseListObservable<Event[]>;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    db: AngularFireDatabase
  ) {
    this.events = db.list('/events');
  }

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data.title);
  }

}
