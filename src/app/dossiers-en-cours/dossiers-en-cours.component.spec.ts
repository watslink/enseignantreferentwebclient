import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersEnCoursComponent } from './dossiers-en-cours.component';

describe('DossiersEnCoursComponent', () => {
  let component: DossiersEnCoursComponent;
  let fixture: ComponentFixture<DossiersEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
