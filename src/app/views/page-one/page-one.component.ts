import { Component, OnInit } from '@angular/core';
import { BaseClassComponent } from 'src/app/shareable/parent-classes/base/base/base-class.component';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent extends BaseClassComponent implements OnInit {
  title = "mario's ng universal experiment";
  ngOnInit(): void {}
}
