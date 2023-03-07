import { Pipe, PipeTransform } from '@angular/core';
import { ContentfulService } from 'src/app/core/services/contentful.service';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  constructor(private contentfulService : ContentfulService) { 
  }
  transform(value: string): unknown {
    return this.contentfulService.markdownToHtml(value);
  }
}
