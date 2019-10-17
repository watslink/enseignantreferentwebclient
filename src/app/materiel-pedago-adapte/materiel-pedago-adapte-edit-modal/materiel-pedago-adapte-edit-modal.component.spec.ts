import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielPedagoAdapteEditModalComponent } from './materiel-pedago-adapte-edit-modal.component';

describe('MaterielPedagoAdapteEditModalComponent', () => {
  let component: MaterielPedagoAdapteEditModalComponent;
  let fixture: ComponentFixture<MaterielPedagoAdapteEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielPedagoAdapteEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielPedagoAdapteEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
