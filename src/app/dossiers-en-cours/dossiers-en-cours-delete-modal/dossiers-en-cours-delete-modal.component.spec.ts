import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersEnCoursDeleteModalComponent } from './dossiers-en-cours-delete-modal.component';

describe('DossiersEnCoursDeleteModalComponent', () => {
  let component: DossiersEnCoursDeleteModalComponent;
  let fixture: ComponentFixture<DossiersEnCoursDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersEnCoursDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersEnCoursDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
