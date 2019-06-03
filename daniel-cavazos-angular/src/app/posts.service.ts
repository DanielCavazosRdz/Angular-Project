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
    return this.postsObservable = this.http.get<Post[]>(this.postsUrl).pipe(map(data => this.posts = data, this.$postsChange.next(this.posts)));
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, httpOptions);
  }

  addPost(post: Post): void {
    post.id = this.counter;
    this.counter++;
    this.posts.push(post);
    this.$postsChange.next(this.posts);
    //return this.http.add<Post>(this.postsUrl, post, httpOptions);      //this is to return to the http, the added property, probably useful for when you have an api
  }

  deletePost(post: Post): void {                           //might return an Observable<Post> with an api
    console.log('it goes in here, and the id is: ' + post.id);
    this.posts = this.posts.filter(data => data !== post);
    console.log(this.posts);
    this.$postsChange.next(this.posts);   //for some reason, sort of freezes post-field
    // const id = typeof post === 'number' ? post : post.id;
    // const url = `${this.postsUrl}/${id}`;
    // return this.http.delete<Post>(url, httpOptions);
  }

  giveId(post: Post): Post {

    return null;
  }

}
