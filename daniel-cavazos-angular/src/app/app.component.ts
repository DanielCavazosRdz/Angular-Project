import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { PostsService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private postService: PostsService, private categoriesService: CategoriesService) {
    // calls the url to get the info needed
    console.log('hello');
    this.postService.getInfo();
    this.categoriesService.GetInfo();
  }

  ngOnInit() {

  }

}
