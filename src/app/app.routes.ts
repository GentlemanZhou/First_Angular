import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SitestatComponent } from './sitestat/sitestat.component';
import { AmchartsDemoComponent } from './chart/amcharts-demo.component';
import { ToastrComponent } from './toastr/toastr.component';
import { ZtreeDemoComponent } from './zTree/ztree-demo.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';

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
    path: 'grid',
    component: GridDemoComponent
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }
];
