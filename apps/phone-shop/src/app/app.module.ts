import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  FeaturePhonesModule
} from '@tuskphone/feature-phones';
import { RouterModule } from '@angular/router';
import { PhonesComponent, PhoneDetailComponent } from '@tuskphone/feature-phones';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    FeaturePhonesModule,
    MatToolbarModule,
    RouterModule.forRoot([{
      path: 'phones',
      component: PhonesComponent
    },{
      path: 'phones/:id',
      component: PhoneDetailComponent
    },{
      path: '',
      pathMatch: 'full',
      redirectTo: 'phones'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
