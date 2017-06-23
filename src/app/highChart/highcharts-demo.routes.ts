import { RouterModule } from '@angular/router';
import { HighchartsDemoComponent } from './highcharts-demo.component';


export const highchartsRoutes = [
  {
    path : '',
    component : HighchartsDemoComponent,
    children : [
    ]
  }
];
