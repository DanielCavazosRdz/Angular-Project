import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category: Observable<string>;

  constructor() { }

  setCategory(category: string): void {
    this.category
  }

  getCategory(): Observable<string> {
    return this.category;
  }

}
