import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, //:id = placeholder
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //navigate to the dashboard automatically
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // to be available throughout the application
})
export class AppRoutingModule { }