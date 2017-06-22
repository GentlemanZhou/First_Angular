import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaiduMapModule } from 'angular2-baidu-map';
import { mapRoutes } from './map-demo.routes';
import { MapDemoComponent } from './map-demo.component';
import { MapBaiduComponent } from './baiduMap/map-baidu.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BaiduMapModule,
      RouterModule.forChild(mapRoutes)
    ],
    exports: [],
    declarations: [
      MapDemoComponent,
      MapBaiduComponent
    ],
    providers: [
     ],
})
export class MapDemoModule { }
