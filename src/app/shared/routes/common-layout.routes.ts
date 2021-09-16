import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    } ,
  {
    path: 'pages',
    loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule),
  }
];
