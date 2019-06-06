import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

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

  newComment: string;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.postsService.getPost(parseInt(id));
  }

  createComment(): void {

  }

}
