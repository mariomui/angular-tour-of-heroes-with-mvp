import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StandardLayoutModule } from './standard/standard-layout.module';

@NgModule({
  imports: [CommonModule, StandardLayoutModule],
  exports: [StandardLayoutModule],
})
export class LayoutsModule {}
