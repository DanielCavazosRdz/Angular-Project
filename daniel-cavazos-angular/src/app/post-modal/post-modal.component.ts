import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoriesService } from '../categories.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  categories: [];
  post: Post = {
    id: 0,
    title: '',
    category: '',
    shortDescription: '',
    description: '',
    publishedAt: '',
    image: '',
    comments: [null]
  };

  constructor(private postService: PostsService, private categoriesService: CategoriesService,
              public dialogRef: MatDialogRef<PostModalComponent>) { }

  categoryObserver = {
    next: x => this.categories = x,
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  postObserver = {
    next: x => this.newPost.emit(x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };


  getCategories(): void {
    this.categoriesService.getCategories()
    .subscribe(this.categoryObserver);
  }

  getCategory(category: string): void {
    console.log('selected Category: ' + category);
    this.post.category = category;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    this.postService.addPost(this.post).subscribe(this.postObserver);
  }

  ngOnInit() {
    this.getCategories();
    console.log(this.categories);
  }

}
