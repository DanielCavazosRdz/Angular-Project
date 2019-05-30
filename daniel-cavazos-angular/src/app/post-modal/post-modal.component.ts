import { Component, OnInit, Inject } from '@angular/core';
import { Post } from '../post';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  categories: [];
  post: Post = {
    id: 0,
    title: '',
    category: '',
    shortDescription: '',
    description: '',
    publishedAt: '',
    image: '',
    comments: [null]
  };

  constructor(private categoriesService: CategoriesService, public dialogRef: MatDialogRef<PostModalComponent>) { }

  myObserver = {
    next: x => this.categories = x,
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  getCategories(): void {
    this.categoriesService.getCategories()
    .subscribe(this.myObserver);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  chooseCategory(): void {
  }

  ngOnInit() {
    this.getCategories();
    console.log(this.categories);
  }

}
