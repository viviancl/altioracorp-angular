
import { DialogArticulosComponent } from '../../dialogs/dialog-articulos/dialog-articulos.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdenService } from '../../service/orden.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MensajeService } from '../../service/mensaje.service';
import { Articulo } from '../../models/articulo';
import { DialogGenerarOrdenComponent } from '../../dialogs/dialog-generar-orden/dialog-generar-orden.component';


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})


export class OrdenComponent implements OnInit {

  displayedColumns = ['idOrden', 'codigo', 'fecha', 'cliente', 'acciones'];

  ordenes = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mensajeService: MensajeService,
    private ordenService: OrdenService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadOrdenes();
  }

  loadOrdenes(): void {
    this.ordenService.listar().subscribe({
      next: (data: any) => {
        this.ordenes.data = data;
        this.ordenes.paginator = this.paginator;
      },
      error: (error) => {
        this.mensajeService.showMessage(error);
      },
    });
  }

  openCrearOrdenDialog(): void {
    const dialogRef = this.dialog.open(DialogGenerarOrdenComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openArticulosDialog(articulos: Articulo[]): void {
    this.dialog.open(DialogArticulosComponent, {
      width: '400px',
      data: { articulos }
    });
  }

}
