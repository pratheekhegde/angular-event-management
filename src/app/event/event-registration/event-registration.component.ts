import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.scss']
})
export class EventRegistrationComponent implements OnInit {

  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Register for the event: ");
  }

}
