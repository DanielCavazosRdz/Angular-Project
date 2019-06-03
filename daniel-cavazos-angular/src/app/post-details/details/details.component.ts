import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/posts.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post: Post = {
    id: 0,
    title: '',
    category: '',
    shortDescription: '',
    description: '',
    publishedAt: '',
    image: '',
    comments: []
  };

  constructor(private route: ActivatedRoute, private postsService: PostsService, private sanitization: DomSanitizer) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.postsService.getPost(parseInt(id));
  }

  setBg(image: string) {
    return this.sanitization.bypassSecurityTrustStyle(`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${image})`);
  }

}
