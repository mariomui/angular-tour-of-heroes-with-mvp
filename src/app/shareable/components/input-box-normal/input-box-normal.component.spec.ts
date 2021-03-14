import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxNormalComponent } from './input-box-normal.component';

describe('InputBoxNormalComponent', () => {
  let component: InputBoxNormalComponent;
  let fixture: ComponentFixture<InputBoxNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBoxNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
