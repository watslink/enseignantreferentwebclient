import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeshAddModalComponent } from './aesh-add-modal.component';

describe('AeshAddModalComponent', () => {
  let component: AeshAddModalComponent;
  let fixture: ComponentFixture<AeshAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeshAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeshAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
