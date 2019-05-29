import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostsService } from '../posts.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-field',
  templateUrl: './post-field.component.html',
  styleUrls: ['./post-field.component.scss']
})
export class PostFieldComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostsService, private sanitization: DomSanitizer) { }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

  setBg(imagen) {
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${imagen})`);
  }


}
