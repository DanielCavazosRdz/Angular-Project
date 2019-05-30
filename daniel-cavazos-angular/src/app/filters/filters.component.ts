import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(private categoriesService: CategoriesService, private categoryService: CategoryService) { }

  categories = [];

  myObserver = {
    next: x => this.categories = x,
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  getCategories(): void {
    this.categoriesService.getCategories()
    .subscribe(this.myObserver);
  }

  doFilter(category: string): void {
    this.categoryService.setCategory(category);
  }

  clearFilter(): void {
    this.categoryService.setCategory('');
  }

  ngOnInit() {
    this.getCategories();
    console.log(this.categories);
  }

}
