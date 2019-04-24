import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';

export const featurePhonesRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PhonesComponent],
  exports: [PhonesComponent]
})
export class FeaturePhonesModule {}
