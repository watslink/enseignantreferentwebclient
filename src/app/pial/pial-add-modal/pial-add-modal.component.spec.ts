import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PialAddModalComponent } from './pial-add-modal.component';

describe('PialAddModalComponent', () => {
  let component: PialAddModalComponent;
  let fixture: ComponentFixture<PialAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PialAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PialAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
