import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeshDeleteModalComponent } from './aesh-delete-modal.component';

describe('AeshDeleteModalComponent', () => {
  let component: AeshDeleteModalComponent;
  let fixture: ComponentFixture<AeshDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeshDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeshDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
