import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  declarations: [PhonesComponent, PhoneDetailComponent],
  exports: [PhonesComponent, PhoneDetailComponent]
})
export class FeaturePhonesModule {}
