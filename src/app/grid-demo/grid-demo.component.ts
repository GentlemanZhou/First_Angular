import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css']
})
export class GridDemoComponent implements OnInit {
  public maxSize:number = 10;
  public itemsPerPage:number=1;
  public totalItems:number=100;
  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;
  public numPages=0;

  public searchText:string;
  public data:any = {
    "title": "序号",
    "columns": [{
      "title": "用户名",
      "field": "username"
    }, {
      "title": "邮箱",
      "field": "email"
    }],
    "rows": [{
      "username": "****",
      "email": "mr.zhouy@foxmail.com"
    }, {
      "username": "周先生7",
      "email": "mr.zhouy@foxmail.com"
    }, {
      "username": "周先生6",
      "email": "mr.zhouy@foxmail.com"
    }, {
      "username": "周先生5",
      "email": "mr.zhouy@foxmail.com"
    }, {
      "username": "周先生4",
      "email": "mr.zhouy@foxmail.com"
    }, {
      "username": "周先生3",
      "email": "mr.zhouy@foxmail.com"
    }, {
      "username": "周先生2",
      "email": "mr.zhouy@foxmail.com"
    }, {
      "username": "周先生1",
      "email": "mr.zhouy@foxmail.com"
    }]
  };
  constructor(public router: Router,
              public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
      this.loadData(this.searchText, this.currentPage);
    });
  }

  public loadTotalPages(){
        this.totalItems = 100;
        this.itemsPerPage = 2;
  }
  public loadData(searchText:string,page:number){
  }
  public pageChanged(event:any):void {
    console.log('跳转：' + event.page);
  }
}
