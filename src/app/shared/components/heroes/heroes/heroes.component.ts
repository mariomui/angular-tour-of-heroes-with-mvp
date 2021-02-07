import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-heroes',
  styleUrls: ['./heroes.component.scss'],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroName = 'windstorms';
  constructor() {

  }
  ngOnInit() {
    console.log('init')
  }
}