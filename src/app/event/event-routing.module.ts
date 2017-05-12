import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';

const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: ':id/register', component: EventRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
