import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMailModalComponent } from './new-mail-modal.component';

describe('NewMailModalComponent', () => {
  let component: NewMailModalComponent;
  let fixture: ComponentFixture<NewMailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
