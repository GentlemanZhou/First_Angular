import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css']
})
export class GridDemoComponent implements OnInit {

  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;
  public numPages=0;

  public searchText:string;
  public data:any = {
    "maxSize": 10,       //页面最多显示几个数字页
    "itemsPerPage": 10, //每页条数
    "totalItems": 1000, //总条数
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
  pageHandel(event){
    console.log('父组件接受页面变更：'+ event.page + "每页条数："+ event.itemsPerPage);
  }
  public loadData(searchText:string,page:number){
  }

}
