import { Route } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
//import { UserDetailComponent } from './user-detail/user-detail.component';

export const FEATURE_USERS_ROUTES: Route[] = [
  {
    path: '',
    component: UserListComponent,
  },
  /*{
    path: ':id',
    component: UserDetailComponent,
  },*/
];
