import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsUrl = 'http://localhost:3000/posts'; // the way you would communicate to the db
  private posts = [];
  $postsChange = new Subject<Post[]>();
  postsObservable = new Observable<Post[]>();
  counter  = 1;


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.postsObservable;
  }

  // no call from the localhost needed, since the observable has the same info as the database
  getPost(id: number): Post {
    for (let data of this.posts) {
      if(data.id === id) {
        return data;
      }
    }
  }

  updatePost(post: Post) {
    for (let data of this.posts) {
      if(data === post) {
        data = post;
      }
    }
    this.$postsChange.next(this.posts);
    console.log(post.id);
    this.http.put(this.postsUrl, post, httpOptions).subscribe((x)=>x);
  }

  addPost(post: Post) {
    for(let post of this.posts){
      this.counter = this.counter + post.id;
    }
    post.id = this.counter;
    this.posts.push(post);
    this.$postsChange.next(this.posts);
    this.http.post(this.postsUrl, post, httpOptions).subscribe((x)=>x);
  }

  deletePost(post: Post) {
    for (let data of this.posts) {
      if(data === post) {
        this.posts.splice(this.posts.indexOf(data), 1);
      }
    }
    this.$postsChange.next(this.posts);
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}?id=${id}`;
    this.http.delete<Post>(url).subscribe((x)=>x);
  }

  getInfo(): void {
    this.postsObservable = this.http.get<Post[]>(this.postsUrl).pipe(
      map(data => this.posts = data, this.$postsChange.next(this.posts)));
  }

}
