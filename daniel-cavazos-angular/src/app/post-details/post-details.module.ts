import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './details/comments/comments.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [DetailsComponent, CommentsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class PostDetailsModule { }
