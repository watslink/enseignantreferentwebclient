import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAddModalComponent } from './categorie-add-modal.component';

describe('CategorieAddModalComponent', () => {
  let component: CategorieAddModalComponent;
  let fixture: ComponentFixture<CategorieAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
