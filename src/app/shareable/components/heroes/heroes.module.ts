import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputBoxComponent } from "../input-box/input-box.component";
import { HeroesComponent } from "./heroes/heroes.component";

@NgModule({
  declarations: [HeroesComponent, InputBoxComponent],
  imports: [CommonModule],
  exports: [HeroesComponent],
})
export class HeroesModule { }