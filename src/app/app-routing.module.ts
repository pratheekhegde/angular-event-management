import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// default routes
export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  // {
  //   path: 'login',
  //   loadChildren: 'app/modules/login/login.module#LoginModule',
  //   data: {
  //     title: "Login"
  //   }
  // },
  {
    path: 'events',
    loadChildren: 'app/event/event.module#EventModule',
     data: {
      title: "Events"
    }
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
     data: {
      title: "Admin"
    }
  },
  {
    path: 'about', component: AboutComponent, data: { title: "About Page"}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
