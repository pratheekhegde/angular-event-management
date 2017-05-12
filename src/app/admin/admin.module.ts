import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

// Shared Module
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: []
})
export class AdminModule { }
