import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from './feature/faqs/faqs.component';
import { MyOrdersComponent } from './feature/my-orders/my-orders.component';
import { PrivacyComponent } from './feature/privacy/privacy.component';


const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule),
  // },
  {
    path: '',
    loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'live-classes',
    loadChildren: () => import('./feature/live-classes/live-classes.module').then(m => m.LiveClassesModule),
  },
  {
    path: 'privacy',
    component:PrivacyComponent
  },
  {
    path: 'faqs',
    component:FaqsComponent
  },
  {
    path: 'my-orders',
    component:MyOrdersComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
