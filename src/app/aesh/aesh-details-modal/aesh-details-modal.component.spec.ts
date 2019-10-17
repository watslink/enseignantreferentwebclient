import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeshDetailsModalComponent } from './aesh-details-modal.component';

describe('AeshDetailsModalComponent', () => {
  let component: AeshDetailsModalComponent;
  let fixture: ComponentFixture<AeshDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeshDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeshDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
