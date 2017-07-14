import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {OfflineOptions, ControlAnchor, NavigationControlType} from 'angular2-baidu-map';
import {forEach} from "@angular/router/src/utils/collection";
declare var BMap: any;

@Component({
  selector: 'app-map-baidu2',
  templateUrl: './map-baidu.component.html',
  styleUrls: ['./map-baidu.component.scss']
})
export class MapBaidu2Component implements OnInit {
  polygnArray: any[] = [];

  constructor() { }
  ngOnInit() {
    const map = new BMap.Map("container");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.387112, 39.920977), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("西安");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    const polygon = new BMap.Polygon([
      new BMap.Point(116.387112,39.920977),
      new BMap.Point(116.385243,39.913063),
      new BMap.Point(116.394226,39.917988),
      new BMap.Point(116.401772,39.921364),
      new BMap.Point(116.41248,39.927893)
    ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  //创建多边形
    polygon.enableEditing();
    this.polygnArray.push(polygon);
    map.addOverlay(polygon);   //增加多边形
  }

  disable() {
    if (this.polygnArray.length > 0 ) {
      for( let polygon of this.polygnArray) {
        polygon.disableEditing();
      }
    }
  }
}
