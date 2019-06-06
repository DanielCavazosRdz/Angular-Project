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
  private categoriesUrl = 'http://private-c3edb-postsmock.apiary-mock.com/categories';
  private categories: Observable<string>;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string> {
    return this.categories;
  }

  GetInfo(): void {
    this.categories = this.http.get<string>(this.categoriesUrl);
  }
}
