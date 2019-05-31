import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsUrl = 'https://private-c3edb-postsmock.apiary-mock.com/posts';
  private ids: [''];
  private counter = 1;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, httpOptions);
  }

  addPost(post: Post): Observable<Post> {
    console.log(post);
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url, httpOptions);
  }

  giveId(post: Post): Post {

    return null;
  }

}
