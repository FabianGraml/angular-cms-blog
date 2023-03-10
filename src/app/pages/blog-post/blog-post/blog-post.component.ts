import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/core/services/contentful.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  
    blogPost: Observable<any> | undefined;

    constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.blogPost = this.contentfulService.getEntryById(id);
      }
    );
    }
}
