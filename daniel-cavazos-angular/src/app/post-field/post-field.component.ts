import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { MatDialog } from '@angular/material';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { PostsService } from '../posts.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-post-field',
  templateUrl: './post-field.component.html',
  styleUrls: ['./post-field.component.scss']
})
export class PostFieldComponent implements OnInit {

  posts: Post[];
  public category: string;
  columns = 2;

  constructor(public dialog: MatDialog, private postService: PostsService,
     private sanitization: DomSanitizer, private categoryService: CategoryService) { }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  getCategory(): void {
    this.categoryService.getCategory()
    .subscribe(category => this.category = category);
  }

  ngOnInit() {
    this.getPosts();
    this.category = '';
    this.getCategory();
    if(window.innerWidth <= 770) {
      this.columns = 1;
    } else {
      this.columns = 2;
    }
  }

  deletePost(post: Post): void {
    this.postService.deletePost(post);
  }

  editPost(post: Post): void {
    const dialogRef = this.dialog.open(PostModalComponent, {
      width: '50%',
      data: post
    });
    dialogRef.beforeClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onResize() {
    if(window.innerWidth <= 770) {
      this.columns = 1;
    } else {
      this.columns = 2;
    }
  }

  setBg(image: string) {
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${image})`);
  }

}
