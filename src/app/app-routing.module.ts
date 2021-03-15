import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './views/page-one/page-one.component';

const routes: Routes = [
  { path: 'page-one', component: PageOneComponent },
  { path: '**', redirectTo: 'page-one', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
