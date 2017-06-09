import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserMainComponent } from './main/main.component';
import { Http} from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import {userRoutes} from './user.routes';
import {UserAddComponent} from './add/add.component';
import {UserListComponent} from './list/list.component';
import { UserService } from './service/user.service';
//加载国际化静态文件
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      //国际化
      TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }),
      RouterModule.forChild(userRoutes)
    ],
    exports: [UserMainComponent],
    declarations: [
      UserAddComponent,
      UserListComponent,
      UserMainComponent
    ],
    providers: [UserService
     ],
})
export class UserModule { }
