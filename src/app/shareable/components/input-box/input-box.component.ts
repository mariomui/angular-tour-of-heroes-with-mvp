import { AfterViewInit, Component, Directive, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators'

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit, AfterViewInit {
  @Input() heroName;
  @Output() nameSender = new EventEmitter<string>()
  observedInputBox: Observable<any>;

  @ViewChild('inputbox', { static: true }) private inputbox: ElementRef<any>

  private _subs = new Subscription();
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observedInputBox = fromEvent(this.inputbox.nativeElement, 'keyup');
    this._subs.add(
      this.observedInputBox.pipe(
        map((data) => {
          return data.target.value;
        }),
        debounceTime(1000),
        tap(what => console.log(what, 'what')),
      ).subscribe((heroName) => {
        this.changeName(heroName)
      }));
  }
  changeName(heroName) {
    this.nameSender.emit(heroName)
  }
}
