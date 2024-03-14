import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../service/cliente.service';
import { MensajeService } from '../../service/mensaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-nuevo-cliente',
  templateUrl: './dialog-nuevo-cliente.component.html',
  styleUrls: ['./dialog-nuevo-cliente.component.css']
})
export class DialogNuevoClienteComponent {

  cliente: Cliente = new Cliente();

  constructor(public dialogRef: MatDialogRef<DialogNuevoClienteComponent>,
    private clienteService: ClienteService,
    private mensajeService: MensajeService,
    private router: Router) { }

  crearCliente() {
    console.log("CLiente", this.cliente.nombre);
    if (this.cliente.nombre === null || this.cliente.apellido === null || this.cliente.nombre === undefined || this.cliente.apellido === undefined) {
      this.mensajeService.showMessage("Debe completar los datos");
    }
    else {
      console.log("crearCliente", this.cliente);
      this.clienteService.registrar(this.cliente).subscribe({
        next: () => {
          console.log('Nuevo cliente creado');
          this.mensajeService.showMessage("Cliente creado con éxito");
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
