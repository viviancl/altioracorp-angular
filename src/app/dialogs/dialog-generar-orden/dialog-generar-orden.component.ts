import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogNuevoClienteComponent } from '../dialog-nuevo-cliente/dialog-nuevo-cliente.component';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../service/cliente.service';
import { MensajeService } from '../../service/mensaje.service';
import { Orden } from '../../models/orden';
import { OrdenService } from '../../service/orden.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ArticuloService } from '../../service/articulo.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-dialog-generar-orden',
  templateUrl: './dialog-generar-orden.component.html',
  styleUrls: ['./dialog-generar-orden.component.css']
})
export class DialogGenerarOrdenComponent implements OnInit {

  orden: Orden = new Orden();
  ordenes: Orden[] = [];

  clientes: Cliente[] = [];
  clienteSeleccionado = null;

  articulos = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ['idArticulo', 'codigo', 'nombre', 'precioUnitario', 'agregado', 'acciones'];

  constructor(public dialogRef: MatDialogRef<DialogNuevoClienteComponent>,
    private ordenService: OrdenService,
    private articuloService: ArticuloService,
    private clienteService: ClienteService,
    private mensajeService: MensajeService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadClientes();
    this.loadArticulos();
    this.loadOrdenes();
  }

  loadArticulos(): void {
    this.articuloService.listar().subscribe({
      next: (data: Articulo[]) => {
        const datosConAgregado = data.map(articulo => ({ ...articulo, agregado: false }));
        this.articulos.data = datosConAgregado;
        this.articulos.paginator = this.paginator;

        console.log("Articulos", this.articulos);
      },
      error: (error) => {
        this.mensajeService.showMessage(error);
      },
    });
  }

  loadClientes(): void {
    this.clienteService.listar().subscribe({
      next: (data: any) => {
        this.clientes = data;
      },
      error: (error) => {
        this.mensajeService.showMessage(error);
      },
    });
  }

  loadOrdenes(): void {
    this.ordenService.listar().subscribe({
      next: (data: any) => {
        this.ordenes = data;
      },
      error: (error) => {
        this.mensajeService.showMessage(error);
      },
    });
  }

  seleccionarArticulo(articulo: any) {
    if (!articulo.agregado) {
      console.log('Agregando artículo:', articulo);
      articulo.agregado = true; // Marcar el artículo como agregado
    }
  }

  eliminarArticulo(articulo: any) {
    console.log('Eliminando artículo:', articulo);
    articulo.agregado = false; // Marcar el artículo como no agregado
  }

  estaAgregado(articulo: any): boolean {
    return articulo.agregado;
  }

  // Filtrar los artículos agregados
  obtenerAgregados(): any[] {
    return this.articulos.data.filter(articulo => articulo.agregado === true);
  }

  generarNumeroOrdenCompra(): string {
    // Obtener el último número de orden de compra
    console.log("Ordenes", this.ordenes.length);
    const ultimoNumero = this.ordenes.length > 0 ? this.ordenes[this.ordenes.length - 1].codigo : 'OC-000000';

    // Extraer el número de la orden de compra y convertirlo a un número entero
    const ultimoNumeroInt = parseInt(ultimoNumero!.split('-')[1], 10);

    // Generar el siguiente número de orden de compra
    const siguienteNumeroInt = ultimoNumeroInt + 1;
    const siguienteNumeroStr = siguienteNumeroInt.toString().padStart(6, '0'); // Rellenar con ceros a la izquierda

    return `OC-${siguienteNumeroStr}`;
  }

  crearOrden() {
    if (this.clienteSeleccionado == null || this.obtenerAgregados().length == 0) {
      this.mensajeService.showMessage("Debe completar los datos");
    }
    else {
      this.orden.cliente = this.clienteSeleccionado;
      this.orden.articulos = this.obtenerAgregados();
      this.orden.fecha = new Date();
      this.orden.codigo = this.generarNumeroOrdenCompra();
      console.log("crearOrden", this.orden);
      this.ordenService.registrar(this.orden).subscribe({
        next: () => {
          console.log('Nueva orden creada');
          this.mensajeService.showMessage("Orden creada con éxito");
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
