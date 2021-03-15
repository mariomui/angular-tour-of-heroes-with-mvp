import { NgModule } from '@angular/core';
import { StandardLayoutModule } from '../../layouts/standard/standard-layout.module';
import { StandardLayoutComponent } from '../../layouts/standard/standard/standard-layout.component';
import { DefaultParentComponent } from './default/default-parent.component';

@NgModule({
  declarations: [StandardLayoutComponent],
  imports: [DefaultParentComponent, StandardLayoutModule],
  exports: [DefaultParentComponent],
})
export class DefaultParentModule {}
