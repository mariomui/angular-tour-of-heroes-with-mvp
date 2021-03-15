import { Component, OnInit } from '@angular/core';
import { StandardLayoutComponent } from 'src/app/shareable/layouts/standard/standard/standard-layout.component';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent
  extends StandardLayoutComponent
  implements OnInit {
  ngOnInit(): void {}
}
