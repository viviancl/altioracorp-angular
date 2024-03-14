import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../models/cliente';
import { MensajeService } from '../../service/mensaje.service';

@Component({
  selector: 'app-dialog-editar-cliente',
  templateUrl: './dialog-editar-cliente.component.html',
  styleUrls: ['./dialog-editar-cliente.component.css']
})
export class DialogEditarClienteComponent {

  constructor(
    public clienteService: ClienteService,
    public mensajeService: MensajeService,
    public dialogRef: MatDialogRef<DialogEditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente
  ) { }

  modificarCliente() {
    console.log("cliente a modificar", this.cliente.nombre);
    if (this.cliente.nombre === null || this.cliente.apellido === null || this.cliente.nombre === '' || this.cliente.apellido === '') {
      this.mensajeService.showMessage("Debe completar los datos");
    }
    else {
      console.log("modificarCliente", this.cliente);
      this.clienteService.modificar(this.cliente).subscribe({
        next: () => {
          console.log('Cliente modificado');
          this.mensajeService.showMessage("Cliente modificado con éxito");
        },
        error: (error) => {
          this.mensajeService.showMessage(error);
        },
      });
      this.dialogRef.close();
    }
  }

  cancelarEdicion(): void {
    this.dialogRef.close();
  }

}
