import { Component, OnInit } from '@angular/core';

@Component({
  // no selector necessary
  selector: 'app-base-class',
  templateUrl: './base-class.component.html',
  styleUrls: ['./base-class.component.scss'],
})
export class BaseClassComponent implements OnInit {
  constructor() {
    //
  }
  ngOnInit() {}
}
