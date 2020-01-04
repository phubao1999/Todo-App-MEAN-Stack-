import { environment } from './../environments/environment';
import { PageErrorComponent } from './page-error/page-error/page-error.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { routes as adminRouter } from './admin/admin-routing.module';
import { routes as userRouter } from './user/user-routing.module';

export const APP_ROUTES: Routes = [
  {
    path: environment.routerLoginAdmin,
    children: [
      ...adminRouter
    ]
  },
  {
    path: '',
    children: [
      ...userRouter
    ]
  },
  {
    path: '**',
    component: PageErrorComponent,
  }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
