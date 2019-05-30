import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { Post } from '../post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  post: Post;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  createPost() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostModalComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
