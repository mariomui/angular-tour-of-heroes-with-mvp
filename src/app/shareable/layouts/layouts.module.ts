import { NgModule } from '@angular/core';
import { StandardLayoutModule } from './standard/standard-layout.module';

@NgModule({
  imports: [StandardLayoutModule],
  exports: [StandardLayoutModule],
})
export class LayoutsModule {}
