import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http} from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SitestatComponent } from './sitestat/sitestat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import { HttpModule } from '@angular/http';
//import { Ng2HighchartsModule } from 'ng2-highcharts';
import { EChartComponent } from './eChart/eChart.component';
import { EChartOptionDirective1 } from './eChart/echart-option.directive';

import { AmchartsDemoComponent } from './chart/amcharts-demo.component';
import { AmchartComponent } from './chart/amchart/amchart.component';
import { ToastrComponent } from './toastr/toastr.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ZtreeDemoComponent } from './zTree/ztree-demo.component';
import { GridDemoComponent } from './grid-demo/grid-demo.component';
import { GridComponent } from './grid-demo/grid/grid.component';
import { LayerDemoComponent } from './layer/layer-demo.component';
import { HighchartsDemoComponent } from './highChart/highcharts-demo.component';
import { PaginationModule } from 'ng2-bootstrap';

//加载国际化静态文件
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  //模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
  declarations: [
    EChartOptionDirective1,
    EChartComponent,
    AppComponent,
    AmchartsDemoComponent,
    AmchartComponent,
    SitestatComponent,
    ZtreeDemoComponent,
    LayerDemoComponent,
    GridComponent,
    GridDemoComponent,
    HighchartsDemoComponent,
    ToastrComponent
  ],
  //导入其他module
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
   /* Ng2HighchartsModule,*/
    PaginationModule.forRoot(),
    //国际化
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  //指定应用程序的根级别需要使用的service
  providers: [],
  //通常是app启动的根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
