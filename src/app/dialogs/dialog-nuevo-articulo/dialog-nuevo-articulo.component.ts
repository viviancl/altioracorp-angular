import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { MensajeService } from 'src/app/service/mensaje.service';
import { ArticuloService } from 'src/app/service/articulo.service';
import { DialogNuevoClienteComponent } from '../dialog-nuevo-cliente/dialog-nuevo-cliente.component';

@Component({
  selector: 'app-dialog-nuevo-articulo',
  templateUrl: './dialog-nuevo-articulo.component.html',
  styleUrls: ['./dialog-nuevo-articulo.component.css']
})
export class DialogNuevoArticuloComponent {

  articulo: Articulo = new Articulo();

  constructor(public dialogRef: MatDialogRef<DialogNuevoClienteComponent>,
    private articuloService: ArticuloService,
    private mensajeService: MensajeService,
    private router: Router) { }

  crearArticulo() {
    console.log("Artículo", this.articulo.nombre);
    if (this.articulo.nombre === null || this.articulo.codigo === null || this.articulo.precioUnitario === null || this.articulo.nombre === undefined || this.articulo.codigo === undefined || this.articulo.precioUnitario === undefined) {
      this.mensajeService.showMessage("Debe completar los datos");
    }
    else {
      console.log("crearArticulo", this.articulo);
      this.articuloService.registrar(this.articulo).subscribe({
        next: () => {
          console.log('Nuevo articulo creado');
          this.mensajeService.showMessage("Articulo creado con éxito");
        },
        error: (error) => {
          this.mensajeService.showMessage(error);
        },
      });
      this.dialogRef.close();
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
