import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryObservable: Subject<string> = new Subject<string>();
  category: string;

  constructor() { }

  setCategory(category: string): void {
    this.category = category;
    this.setObservable();
  }

  getCategory(): Subject<string> {
    return this.categoryObservable;
  }

  setObservable() {
    this.categoryObservable.next(this.category);
  }

}
