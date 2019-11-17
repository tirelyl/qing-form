import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QfFieldComponent } from './field.component';

describe('FieldComponent', () => {
  let component: QfFieldComponent;
  let fixture: ComponentFixture<QfFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QfFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QfFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
