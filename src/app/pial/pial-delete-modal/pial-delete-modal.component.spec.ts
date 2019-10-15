import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PialDeleteModalComponent } from './pial-delete-modal.component';

describe('PialDeleteModalComponent', () => {
  let component: PialDeleteModalComponent;
  let fixture: ComponentFixture<PialDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PialDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PialDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
