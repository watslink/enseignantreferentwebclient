import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieEditModalComponent } from './categorie-edit-modal.component';

describe('CategorieEditModalComponent', () => {
  let component: CategorieEditModalComponent;
  let fixture: ComponentFixture<CategorieEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
