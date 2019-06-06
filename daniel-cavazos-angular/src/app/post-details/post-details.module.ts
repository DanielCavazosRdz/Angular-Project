import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './details/comments/comments.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatInputModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailsComponent, CommentsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class PostDetailsModule { }
