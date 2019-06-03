import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'posts', component: AppComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', redirectTo: '/posts', pathMatch: 'full'}
  //If you add routes, the home page duplicates, check what's wrong with that
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
