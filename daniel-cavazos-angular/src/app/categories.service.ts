import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesUrl = 'http://localhost:3000/categories';
  private categories: Observable<string>;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string> {
    return this.categories;
  }

  GetInfo(): void {
    this.categories = this.http.get<string>(this.categoriesUrl);
  }
}
