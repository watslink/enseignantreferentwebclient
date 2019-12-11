import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDeleteModalComponent } from './file-delete-modal.component';

describe('FileDeleteModalComponent', () => {
  let component: FileDeleteModalComponent;
  let fixture: ComponentFixture<FileDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
