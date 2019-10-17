import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeshEditModalComponent } from './aesh-edit-modal.component';

describe('AeshEditModalComponent', () => {
  let component: AeshEditModalComponent;
  let fixture: ComponentFixture<AeshEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeshEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeshEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
