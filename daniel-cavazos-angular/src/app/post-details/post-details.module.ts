import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './details/comments/comments.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [DetailsComponent, CommentsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PostDetailsModule { }
