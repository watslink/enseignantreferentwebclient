import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielPedagoAdapteDeleteModalComponent } from './materiel-pedago-adapte-delete-modal.component';

describe('MaterielPedagoAdapteDeleteModalComponent', () => {
  let component: MaterielPedagoAdapteDeleteModalComponent;
  let fixture: ComponentFixture<MaterielPedagoAdapteDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielPedagoAdapteDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielPedagoAdapteDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
