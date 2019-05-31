import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Observable } from 'rxjs';
import { Post } from './post';
import { AddPostComponent } from './add-post/add-post.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  newPost: Observable<Post>;

  constructor( private dialog: MatDialog) {}


  getNewPost(event: Observable<Post>) {
    console.log('it gets here 2');
    console.log(event);
    this.newPost = event;
  }

  ngOnInit() {

  }

}
