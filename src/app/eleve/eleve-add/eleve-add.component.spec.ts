import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveAddComponent } from './eleve-add.component';

describe('EleveAddComponent', () => {
  let component: EleveAddComponent;
  let fixture: ComponentFixture<EleveAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
