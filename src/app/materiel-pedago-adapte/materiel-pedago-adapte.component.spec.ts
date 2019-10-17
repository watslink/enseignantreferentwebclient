import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielPedagoAdapteComponent } from './materiel-pedago-adapte.component';

describe('MaterielPedagoAdapteComponent', () => {
  let component: MaterielPedagoAdapteComponent;
  let fixture: ComponentFixture<MaterielPedagoAdapteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielPedagoAdapteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielPedagoAdapteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
