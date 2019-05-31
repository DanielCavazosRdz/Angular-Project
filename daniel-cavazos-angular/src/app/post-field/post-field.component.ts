import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-post-field',
  templateUrl: './post-field.component.html',
  styleUrls: ['./post-field.component.scss']
})
export class PostFieldComponent implements OnInit {

  @Input() addedPost: Observable<Post>;

  posts: Post[];
  public category: string;
  myObserver = {
    next: x => this.posts = x,
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  newPostObserver = {
    next: x => this.posts = x,
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  constructor(private postService: PostsService, private sanitization: DomSanitizer, private categoryService: CategoryService) { }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
    this.addedPost.subscribe(this.newPostObserver);
  }

  getCategory(): void {
    this.categoryService.getCategory()
    .subscribe(category => this.category = category);
  }

  ngOnInit() {
    this.getPosts();
    this.category = '';
    this.getCategory();
  }

  setBg(image: string) {
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${image})`);
  }


}
