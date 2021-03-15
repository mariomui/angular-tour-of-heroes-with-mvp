import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseClassModule } from './base/base-class.module';

@NgModule({
  // dont need declarations yet
  imports: [CommonModule, BaseClassModule],
  exports: [BaseClassModule],
})
export class ParentClassesModule {}

// all Superclasses are shared here.
