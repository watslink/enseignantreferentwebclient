import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAddModalComponent } from './file-add-modal.component';

describe('FileAddModalComponent', () => {
  let component: FileAddModalComponent;
  let fixture: ComponentFixture<FileAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
