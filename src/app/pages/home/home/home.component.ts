import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/core/services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogPosts: Observable<any> | undefined;

  constructor(private contentfulService : ContentfulService) { }

  ngOnInit(): void {
    this.blogPosts = this.contentfulService.getAllEntries();
  }
}
