import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormModuleComponent } from './reactive-form-module.component';

describe('ReactiveFormModuleComponent', () => {
  let component: ReactiveFormModuleComponent;
  let fixture: ComponentFixture<ReactiveFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
