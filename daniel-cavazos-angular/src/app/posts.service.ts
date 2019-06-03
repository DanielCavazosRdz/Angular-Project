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

  private postsUrl = 'https://private-c3edb-postsmock.apiary-mock.com/posts';
  private posts = [];
  $postsChange = new Subject<Post[]>();
  postsObservable = new Observable<Post[]>();
  counter  = 10;


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.postsObservable = this.http.get<Post[]>(this.postsUrl).pipe(
      map(data => this.posts = data, this.$postsChange.next(this.posts)));
  }

  getPost(id: number): Post {
    for (let data of this.posts) {
      if(data.id === id) {
        return data;
      }
    }
  }

  updatePost(post: Post): void { // Observable<Post> might be used in the futer with an api
    for (let data of this.posts) {
      if(data === post) {
        data = post;
      }
    }
    this.$postsChange.next(this.posts);
    // return this.http.put(this.postsUrl, post, httpOptions);
  }

  addPost(post: Post): void {
    post.id = this.counter;
    this.counter++;
    this.posts.push(post);
    this.$postsChange.next(this.posts);
    // return this.http.add<Post>(this.postsUrl, post, httpOptions);
    // this is to return to the http, the added property, probably useful for when you have an api
  }

  deletePost(post: Post): void {   // might return an Observable<Post> with an api
    // this.posts = this.posts.filter(data => data !== post);  //for some reason, sort of freezes post-field
    for (let data of this.posts) {
      if(data === post) {
        this.posts.splice(this.posts.indexOf(data), 1);
      }
    }
    console.log(this.posts);
    this.$postsChange.next(this.posts);
    // const id = typeof post === 'number' ? post : post.id;
    // const url = `${this.postsUrl}/${id}`;
    // return this.http.delete<Post>(url, httpOptions);
  }

  giveId(post: Post): Post {

    return null;
  }

}
