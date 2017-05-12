import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Event } from './../../shared/models/event.interface';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html'
})
export class EventRegistrationComponent implements OnInit {

  eventDetails: FirebaseObjectObservable<Event>;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {

    this.titleService.setTitle("Register form");

    // Get id if present in the URL 
    this.route.params
      .subscribe((params: Params) => {
        if (params['id']) {
          this.eventDetails = this.db.object('/events/' + params['id']);
        }
      });
  }

}
