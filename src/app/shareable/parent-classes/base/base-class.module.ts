import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StandardLayoutModule } from '../../layouts/standard/standard-layout.module';
import { BaseClassComponent } from './base/base-class.component';

@NgModule({
  declarations: [BaseClassComponent],
  imports: [CommonModule, BaseClassComponent, StandardLayoutModule],
  exports: [BaseClassComponent],
  providers: [],
})
export class BaseClassModule {
  //
}
