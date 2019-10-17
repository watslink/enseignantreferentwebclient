import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieDeleteModalComponent } from './categorie-delete-modal.component';

describe('CategorieDeleteModalComponent', () => {
  let component: CategorieDeleteModalComponent;
  let fixture: ComponentFixture<CategorieDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
