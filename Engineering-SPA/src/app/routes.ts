import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestViewComponent } from './request/request-view/request-view.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestDetailResolver } from './_resolvers/request-detail.resolver';
import { RequestViewResolver } from './_resolvers/request-view.resolver';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'requests', component: RequestViewComponent, resolve: {requests: RequestViewResolver} },
  { path: 'request-create', component: RequestCreateComponent },
  { path: 'requests/:esr', component: RequestDetailComponent, resolve: {request: RequestDetailResolver} },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
