import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FiltersComponent } from './filters/filters.component';
import { PostFieldComponent } from './post-field/post-field.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatGridListModule, MatDialogModule,
  MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { PostModalComponent } from './post-modal/post-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    FiltersComponent,
    PostFieldComponent,
    PostModalComponent
  ],
  entryComponents: [ PostModalComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
