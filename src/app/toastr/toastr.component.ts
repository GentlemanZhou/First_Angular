import { Component, OnInit, ViewContainerRef} from '@angular/core'
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  constructor(public router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  ngOnInit() {}

  public infoWindow() {
    this.toastr.info('这是内容！', '这是title!');
    this.toastr.error("错误啦","这是title!");
    this.toastr.warning("shenme","e");
    this.toastr.success("恭喜你，成功啦！","success");
    this.toastr.success('I don\'t need a title to live');
    this.toastr.info('<input type="checkbox" checked /> Success!', 'With HTML', {
      allowHtml: true
    });
  }
}
