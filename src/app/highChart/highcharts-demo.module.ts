import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';
import {highchartsRoutes} from './highcharts-demo.routes';

//declare var require: any;

import { HighchartsDemoComponent } from './highcharts-demo.component';
@NgModule({
    imports: [
     /* ChartModule.forRoot(require('highcharts'),
              require('highcharts/modules/exporting')),*/
      RouterModule.forChild(highchartsRoutes)
    ],
    exports: [],
    declarations: [
      HighchartsDemoComponent
    ],
    providers: [
     ],
})
export class HighchartsDemoModule { }
