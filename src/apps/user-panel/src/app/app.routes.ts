import { Route } from '@angular/router';
import { Component } from '@angular/core';

export const appRoutes: Route[]= [
  {
    path: 'users',
    loadChildren: () =>
      import('@my-ecommerce/users').then((m) => m.FEATURE_USERS_ROUTES),
  },

  //{ path: '', redirectTo: 'users', pathMatch: 'full' },
];

