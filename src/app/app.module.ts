import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from 'clarity-angular';

/* App Root */
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ClarityModule.forRoot(),
        CoreModule,
        AppRoutingModule
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
