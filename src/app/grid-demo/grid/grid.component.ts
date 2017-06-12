import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grid',
    templateUrl: 'grid.component.html'
})
export class GridComponent implements OnInit {
    @Input() title: string;
    @Input() columns: any[];
    @Input() rows: any[];
    @Input() totalItems: number;
    @Input() itemsPerPage: number;
    @Input() maxSize: number;
  @Output()
  currentPage = new EventEmitter();
    constructor() { }

    ngOnInit() {

    }

  public pageChanged(event:any):void {
    console.log('子组件页面变更：' + event.page);
    this.currentPage.emit(event.page);

  }
}
