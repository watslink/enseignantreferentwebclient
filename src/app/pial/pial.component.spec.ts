import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PialComponent } from './pial.component';

describe('PialComponent', () => {
  let component: PialComponent;
  let fixture: ComponentFixture<PialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
