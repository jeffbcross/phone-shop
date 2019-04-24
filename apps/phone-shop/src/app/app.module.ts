import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  FeaturePhonesModule,
  featurePhonesRoutes
} from '@tuskphone/feature-phones';
import { RouterModule } from '@angular/router';
import { PhonesComponent, PhoneDetailComponent } from '@tuskphone/feature-phones';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeaturePhonesModule, RouterModule.forRoot([{
    path: 'phones',
    component: PhonesComponent
  },{
    path: 'phones/:id',
    component: PhoneDetailComponent
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'phones'
  }])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
