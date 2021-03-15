import { NgModule } from '@angular/core';
import { DefaultParentModule } from './default/default-parent.module';

@NgModule({
  // dont need declarations yet
  imports: [DefaultParentModule],
  exports: [DefaultParentModule],
})
export class ParentsModule {}

// all Superclasses are shared here.
