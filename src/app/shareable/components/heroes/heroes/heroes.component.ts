import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero.interface";

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.scss'],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  public hero: Hero = {
    name: 'WindStorms',
    id: 1,
  }
  constructor() {

  }
  ngOnInit() {
    console.log('init')
  }
}