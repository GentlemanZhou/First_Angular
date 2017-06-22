import { Component, OnInit, OnDestroy } from '@angular/core';
declare var layer: any;
@Component({
  selector: 'app-layer-demo',
  templateUrl: './layer-demo.component.html',
  styleUrls: ['./layer-demo.component.css']
})
export class LayerDemoComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('constructor');
  }
  ngOnDestroy() {
    console.log('destroy');
  }
  ngOnInit() {
    console.log('init');
  }
  alert() {
    layer.alert('就是一个弹框而已.....');
  }
  confirm() {
    layer.confirm('你是不是傻？', {
      btn: ['是的', '不是']
    }, () => {
      layer.msg('不要忧伤，最起码你是诚实的')
    }, () => {
      layer.msg('做人要诚实一点，懂吗？', {
        time: 2000,
        btn: ['明白了', '不明白']
      })
    })
  }
  msg() {
    layer.msg('系统加载中，请喝杯茶休息一会儿');
  }
  open() {
    layer.open({
      title: '警报',
      content: '有一个逗逼刚刚点击了弹框'
    });

  }
}
