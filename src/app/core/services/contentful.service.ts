import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  
  constructor() {}

  private cdaClient = createClient({
    space: environment.space,
    accessToken: environment.accessToken,
  });
  getAllEntries() {
    const promise = this.cdaClient.getEntries();
    return from(promise);
  }
  getEntryById(id: string) {
    const promise = this.cdaClient.getEntry(id);
    return from(promise);
  }
  markdownToHtml(markdown: string) {
    return marked.marked(markdown);
  }
}