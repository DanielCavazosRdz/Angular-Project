import { Component, OnInit, Inject } from '@angular/core';
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

  categories: [];
  title: string;
  post: Post = {
    id: 0,
    title: '',
    category: '',
    shortDescription: '',
    description: '',
    publishedAt: '',
    image: 'https://source.unsplash.com/random',
    comments: []
  };
  originalPost: Post = new Post();

  constructor(private postService: PostsService, private categoriesService: CategoriesService,
              public dialogRef: MatDialogRef<PostModalComponent>, @Inject(MAT_DIALOG_DATA) public data:Post) { }

  categoryObserver = {
    next: x => this.categories = x,
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
    console.log(this.data.title + ' also the thing in the input: ' + this.originalPost.title);
    this.post = this.data;
    this.dialogRef.close();
  }

  onEdit(): void {
    this.postService.updatePost(this.post);
  }

  onCreate(): void {
    if(this.data){this.onEdit();}
    else{
      this.postService.addPost(this.post);
    }
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getCategories();
    if(this.data) {
      this.post = this.data;
      this.originalPost = this.post;
      this.title = 'Edit Post';
    } else {this.title = 'Create Post';}

  }

}
