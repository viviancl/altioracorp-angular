import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from '../../service/cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { MensajeService } from '../../service/mensaje.service';
import { DialogNuevoClienteComponent } from '../../dialogs/dialog-nuevo-cliente/dialog-nuevo-cliente.component';
import { MatPaginator } from '@angular/material/paginator';
import { DialogEditarClienteComponent } from '../../dialogs/dialog-editar-cliente/dialog-editar-cliente.component';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})


export class ClienteComponent implements OnInit {

  displayedColumns = ['idCliente', 'nombre', 'apellido', 'acciones'];

  clientes = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clienteService: ClienteService,
    private mensajeService: MensajeService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("CLiente init");
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.listar().subscribe({
      next: (data: any) => {
        this.clientes.data = data;
        this.clientes.paginator = this.paginator;
      },
      error: (error) => {
        this.mensajeService.showMessage(error);
      },
    });
  }

  openCrearClienteDialog(): void {
    const dialogRef = this.dialog.open(DialogNuevoClienteComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('El diálogo de creación de cliente se cerró');
    });
  }

  openEditarClienteDialog(cliente: any): void {
    const dialogRef = this.dialog.open(DialogEditarClienteComponent, {
      width: '300px',
      data: cliente
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('El diálogo de edición se cerró');
    });
  }
  eliminarCliente(idCliente: number) {
    this.clienteService
      .eliminar(idCliente)
      .subscribe({
        next: () => {
          this.loadClientes();
          this.mensajeService.showMessage("El cliente ha sido eliminado");
        },
        error: (error) => {
          this.mensajeService.showMessage(error);
        },
      });

  }
}
