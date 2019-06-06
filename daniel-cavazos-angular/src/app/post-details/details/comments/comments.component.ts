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

  id: string;

  newComment: string;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.post = this.postsService.getPost(parseInt(this.id));
  }

  createComment(): void {
    if(this.newComment){
      this.post.comments.push({id: this.post.comments.length + 1 ,author: 'Jon Doe' ,content: this.newComment});
      this.postsService.updatePost(this.post);
      this.post = this.postsService.getPost(parseInt(this.id));
      this.newComment = '';
    }
  }

}
