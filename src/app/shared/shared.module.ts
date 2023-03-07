import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';



@NgModule({
  declarations: [
    MdToHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MdToHtmlPipe
  ]
})
export class SharedModule { }
