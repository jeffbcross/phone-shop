import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

export const featurePhonesRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PhonesComponent, PhoneDetailComponent],
  exports: [PhonesComponent, PhoneDetailComponent]
})
export class FeaturePhonesModule {}
