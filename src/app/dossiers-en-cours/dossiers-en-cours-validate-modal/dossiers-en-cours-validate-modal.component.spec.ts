import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersEnCoursValidateModalComponent } from './dossiers-en-cours-validate-modal.component';

describe('DossiersEnCoursValidateModalComponent', () => {
  let component: DossiersEnCoursValidateModalComponent;
  let fixture: ComponentFixture<DossiersEnCoursValidateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersEnCoursValidateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersEnCoursValidateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
