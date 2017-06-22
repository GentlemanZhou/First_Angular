import { SitestatComponent } from './sitestat/sitestat.component';
import { AmchartsDemoComponent } from './chart/amcharts-demo.component';
import { ToastrComponent } from './toastr/toastr.component';
import { ZtreeDemoComponent } from './zTree/ztree-demo.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { LayerDemoComponent } from './layer/layer-demo.component'
import { HighchartsDemoComponent } from './highChart/highcharts-demo.component';
import { EChartComponent } from './eChart/eChart.component';
import { CkeditorDemoComponent } from './ckeditor-demo/ckeditor-demo.component';
export const appRoutes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  }, {
    path: 'posts',
    component: SitestatComponent
  }, {
    path: 'amChart',
    component: AmchartsDemoComponent
  }, {
    path: 'toastr',
    component: ToastrComponent
  }, {
    path: 'ztree',
    component: ZtreeDemoComponent
  },
  {
    path: 'layer',
    component: LayerDemoComponent
  },
  {
    path: 'grid/:page',
    component: GridDemoComponent
  }, {
    path: 'highcharts',
    component: HighchartsDemoComponent
  }, {
    path: 'echart',
    component: EChartComponent
  },
  {
    path: 'ckeditor',
    component: CkeditorDemoComponent
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'map',
    loadChildren: './map/map-demo.module#MapDemoModule'
  }
];
