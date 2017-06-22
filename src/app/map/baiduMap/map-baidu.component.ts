import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {OfflineOptions, ControlAnchor, NavigationControlType} from 'angular2-baidu-map';


@Component({
  selector: 'app-user-add',
  templateUrl: './map-baidu.component.html',
  styleUrls: ['./map-baidu.component.scss']
})
export class MapBaiduComponent implements OnInit {

  opts: any;
  offlineOpts: OfflineOptions;

  ngOnInit() {
    // 配置地图, 参考百度地图api
    this.opts = {
      // 地图中心坐标
      center: {
        longitude: 116.4177150000,
        latitude: 40.0612540000
      },
      zoom: 17,
      // 地图上的坐标
      markers: [{
        longitude: 116.4177150000,
        latitude: 40.0612540000,
        title: '华泰汽车集团',
        content: '朝阳区立水桥',
        autoDisplayInfoWindow: true
      }],
      geolocationCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
      },
      scaleCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
      },
      overviewCtrl: {
        isOpen: true
      },
      navCtrl: {
        type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
      }
    };

    this.offlineOpts = {
      retryInterval: 5000,
      txt: '没有网络'
    };
  }

  // 刚加载加载地图信息
  loadMap(e: any) {
    console.log(e);
  }

  // 单机地图坐标, 打印信息
  clickMarker(marker: any) {
    console.log(marker);
  }


}
