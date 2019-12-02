import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersEnCoursDocRequisComponent } from './dossiers-en-cours-doc-requis.component';

describe('DossiersEnCoursDocRequisComponent', () => {
  let component: DossiersEnCoursDocRequisComponent;
  let fixture: ComponentFixture<DossiersEnCoursDocRequisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersEnCoursDocRequisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersEnCoursDocRequisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
