import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from 'clarity-angular';

/* App Root */
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AboutComponent } from "app/about/about.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent, // component without module
        PageNotFoundComponent // component without module
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase, 'angular-event-management'), // imports firebase/app needed for everything
        AngularFireDatabaseModule, // imports firebase/database, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
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
