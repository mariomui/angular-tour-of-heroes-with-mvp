import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Hero } from "../hero.interface";

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.scss'],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  @Output() outputEvent = new EventEmitter<string>();
  public hero: Hero = {
    name: 'WindStorms',
    id: 1,
  }
  constructor() {

  }

  addStuff(e) {
    console.log(e.target)
    this.outputEvent.emit(e.value)
  }

  ngOnInit() {
    console.log('init')
  }
}