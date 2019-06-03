import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostModalComponent, {
      width: '50%'
    });
    dialogRef.beforeClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
