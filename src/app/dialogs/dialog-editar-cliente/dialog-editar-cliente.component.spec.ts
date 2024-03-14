import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarClienteComponent } from './dialog-editar-cliente.component';

describe('DialogEditarClienteComponent', () => {
  let component: DialogEditarClienteComponent;
  let fixture: ComponentFixture<DialogEditarClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEditarClienteComponent]
    });
    fixture = TestBed.createComponent(DialogEditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
