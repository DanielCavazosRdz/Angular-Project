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

  posts: Post[];
  public category: string;

  constructor(private postService: PostsService, private sanitization: DomSanitizer, private categoryService: CategoryService) { }

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
  }

  deletePost(post: Post): void {
    this.postService.deletePost(post);
  }

  

  setBg(image: string) {
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${image})`);
  }


}
