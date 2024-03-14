import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNuevoArticuloComponent } from './dialog-nuevo-articulo.component';

describe('DialogNuevoArticuloComponent', () => {
  let component: DialogNuevoArticuloComponent;
  let fixture: ComponentFixture<DialogNuevoArticuloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNuevoArticuloComponent]
    });
    fixture = TestBed.createComponent(DialogNuevoArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
