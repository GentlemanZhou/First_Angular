import { RouterModule } from '@angular/router';
import { MapDemoComponent } from './map-demo.component';
import { MapBaiduComponent } from './baiduMap/map-baidu.component';

export const mapRoutes = [
  {
    path : '',
    component : MapDemoComponent,
    children : [
      { path: 'baiduMap', component: MapBaiduComponent }]
  }
];
