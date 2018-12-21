import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomComponent } from './bedroom.component';

describe('BedroomComponent', () => {
  let component: BedroomComponent;
  let fixture: ComponentFixture<BedroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
