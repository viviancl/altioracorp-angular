import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNuevoClienteComponent } from './dialog-nuevo-cliente.component';

describe('DialogNuevoClienteComponent', () => {
  let component: DialogNuevoClienteComponent;
  let fixture: ComponentFixture<DialogNuevoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNuevoClienteComponent]
    });
    fixture = TestBed.createComponent(DialogNuevoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
