import { RouterModule } from '@angular/router';
import { MapDemoComponent } from './map-demo.component';
import { MapBaiduComponent } from './baiduMap/map-baidu.component';
import { MapAMapComponent } from './aMap/map-amap.component';
import { MapBaidu2Component } from './baiduMap2/map-baidu.component';
import {MapGoogleComponent} from './googleMap/map-google.component';

export const mapRoutes = [
  {
    path : '',
    component : MapDemoComponent,
    children : [
      { path: 'baiduMap', component: MapBaiduComponent },
      { path: 'baiduMap2', component: MapBaidu2Component },
      { path: 'gMap', component: MapGoogleComponent },
      { path: 'aMap', component: MapAMapComponent }]
  }
];
