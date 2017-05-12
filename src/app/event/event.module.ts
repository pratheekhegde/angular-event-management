// Angular
import { NgModule } from '@angular/core';

// Clarity
import { ClarityModule } from 'clarity-angular';

import { EventRoutingModule } from './event-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';

// Shared Module
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ClarityModule.forChild(),
    EventRoutingModule
  ],
  declarations: [
    EventListComponent,
    EventRegistrationComponent
  ]
})
export class EventModule { }
