import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGenerarOrdenComponent } from './dialog-generar-orden.component';

describe('DialogGenerarOrdenComponent', () => {
  let component: DialogGenerarOrdenComponent;
  let fixture: ComponentFixture<DialogGenerarOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogGenerarOrdenComponent]
    });
    fixture = TestBed.createComponent(DialogGenerarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
