import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-dialog-articulos',
  templateUrl: './dialog-articulos.component.html',
  styleUrls: ['./dialog-articulos.component.css']
})
export class DialogArticulosComponent {

  displayedColumns = ['idArticulo', 'codigo', 'nombre', 'precioUnitario'];

  constructor(
    public dialogRef: MatDialogRef<DialogArticulosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  cerrarDialog(): void {
    this.dialogRef.close();
  }
}
