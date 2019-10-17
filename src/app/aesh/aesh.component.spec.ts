import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeshComponent } from './aesh.component';

describe('AeshComponent', () => {
  let component: AeshComponent;
  let fixture: ComponentFixture<AeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
