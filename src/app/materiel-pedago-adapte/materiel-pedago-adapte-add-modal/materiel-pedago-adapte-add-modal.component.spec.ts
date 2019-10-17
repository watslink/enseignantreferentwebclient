import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielPedagoAdapteAddModalComponent } from './materiel-pedago-adapte-add-modal.component';

describe('MaterielPedagoAdapteAddModalComponent', () => {
  let component: MaterielPedagoAdapteAddModalComponent;
  let fixture: ComponentFixture<MaterielPedagoAdapteAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielPedagoAdapteAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielPedagoAdapteAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
