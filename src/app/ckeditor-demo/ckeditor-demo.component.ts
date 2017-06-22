import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ckeditor-demo',
  templateUrl: './ckeditor-demo.component.html',
  styleUrls: ['./ckeditor-demo.component.css']
})
export class CkeditorDemoComponent implements OnInit {
  ckeditorContent = '';
  constructor() {  console.log('constructor'); }
  config = {
    filebrowserBrowseUrl : '&&&&&',
    filebrowserUploadUrl : '&&&'
  };
  ngOnInit() {
    console.log('init');
  }

}
