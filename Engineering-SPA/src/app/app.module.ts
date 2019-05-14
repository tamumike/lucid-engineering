import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestViewComponent } from './request/request-view/request-view.component';
import { IsApprovedPipePipe } from './_pipes/IsApprovedPipe.pipe';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RequestCreateComponent,
      RequestViewComponent,
      IsApprovedPipePipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BsDropdownModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
