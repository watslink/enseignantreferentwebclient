import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListModalComponent } from './mail-list-modal.component';

describe('MailListModalComponent', () => {
  let component: MailListModalComponent;
  let fixture: ComponentFixture<MailListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
