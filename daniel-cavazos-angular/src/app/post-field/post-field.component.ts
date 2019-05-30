import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
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

  constructor(private postService: PostsService, private sanitization: DomSanitizer, private categoryService: CategoryService) { }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  getCategory(): void {
    this.categoryService.getCategory()
  }

  ngOnInit() {
    this.getPosts();
    this.category = '';
  }

  setBg(image) {
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${image})`);
  }


}
