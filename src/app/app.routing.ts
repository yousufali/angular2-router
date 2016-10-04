import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';


const appRoutes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: '/home' },
   {
       path: 'home', component: HomeComponent
   }
];


export const appRoutingProviders = [
  HomeComponent
];

export const routing = RouterModule.forRoot(appRoutes);
