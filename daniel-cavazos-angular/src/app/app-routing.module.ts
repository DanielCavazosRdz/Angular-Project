import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './post-details/details/details.component';

const routes: Routes = [
  {path: 'posts', component: HomeComponent},
  {path: 'posts/:id', component: DetailsComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', redirectTo: '/posts', pathMatch: 'full'}
  //If you add routes, the home page duplicates, check what's wrong with that
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
