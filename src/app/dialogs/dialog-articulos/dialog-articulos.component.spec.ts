import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArticulosComponent } from './dialog-articulos.component';

describe('DialogArticulosComponent', () => {
  let component: DialogArticulosComponent;
  let fixture: ComponentFixture<DialogArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogArticulosComponent]
    });
    fixture = TestBed.createComponent(DialogArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
