import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LuminosidadeComponent} from './luminosidade.component';

describe('LuminosidadeComponent', () => {
  let component: LuminosidadeComponent;
  let fixture: ComponentFixture<LuminosidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LuminosidadeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminosidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
