import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostRoutingModule } from './blog-post-routing.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogPostRoutingModule
  ]
})
export class BlogPostModule { }
