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

  constructor( private dialog: MatDialog) {}

  ngOnInit() {

  }

}
