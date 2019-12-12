import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionModalComponent } from './reunion-modal.component';

describe('ReunionModalComponent', () => {
  let component: ReunionModalComponent;
  let fixture: ComponentFixture<ReunionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
