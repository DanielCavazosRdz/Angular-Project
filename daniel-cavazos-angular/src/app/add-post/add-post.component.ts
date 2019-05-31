import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { Post } from '../post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  @Output() post: EventEmitter<Post> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  createPost() {
    console.log('it gets here');
    this.post.emit();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostModalComponent, {
      width: '50%'
    });
    dialogRef.beforeClosed().subscribe(result => {
      this.post = dialogRef.componentInstance.newPost;
      this.createPost();
      console.log('The dialog was closed');
    });
  }
}
