import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestViewComponent } from './request/request-view/request-view.component';
import { IsApprovedPipePipe } from './_pipes/IsApprovedPipe.pipe';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { RequestService } from './_services/request.service';
import { RequestDetailResolver } from './_resolvers/request-detail.resolver';
import { RequestViewResolver } from './_resolvers/request-view.resolver';
import { StatusPipePipe } from './_pipes/StatusPipe.pipe';
import { ApprovedBooleanPipe } from './_pipes/ApprovedBoolean.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RequestCreateComponent,
      RequestViewComponent,
      RequestDetailComponent,
      IsApprovedPipePipe,
      StatusPipePipe,
      ApprovedBooleanPipe,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      BsDatepickerModule.forRoot(),
      FormsModule,
      PaginationModule.forRoot(),
      ButtonsModule.forRoot()
   ],
   providers: [
     RequestService,
     RequestDetailResolver,
     RequestViewResolver,
     AlertifyService,
     UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
