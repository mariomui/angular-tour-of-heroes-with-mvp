import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StandardLayoutComponent } from './standard/standard-layout.component';

@NgModule({
  declarations: [StandardLayoutComponent],
  imports: [CommonModule, StandardLayoutComponent],
  exports: [StandardLayoutComponent],
})
export class StandardLayoutModule {}
