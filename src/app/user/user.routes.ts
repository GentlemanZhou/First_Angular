import { RouterModule } from '@angular/router';
import { UserMainComponent } from './main/main.component';
import { UserAddComponent } from './add/add.component';
import { UserListComponent } from './list/list.component';

export const userRoutes = [
  {
    path : '',
    component : UserMainComponent,
    children : [
      { path: 'userAdd', component: UserAddComponent },
      { path: 'userList', component: UserListComponent }]
  }
];
