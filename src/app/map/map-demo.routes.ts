import { RouterModule } from '@angular/router';
import { MapDemoComponent } from './map-demo.component';
import { MapBaiduComponent } from './baiduMap/map-baidu.component';
import { MapAMapComponent } from './aMap/map-amap.component';

export const mapRoutes = [
  {
    path : '',
    component : MapDemoComponent,
    children : [
      { path: 'baiduMap', component: MapBaiduComponent },
      { path: 'aMap', component: MapAMapComponent }]
  }
];
