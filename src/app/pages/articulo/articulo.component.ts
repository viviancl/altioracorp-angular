import { Component, ViewChild } from '@angular/core';
import { MensajeService } from '../../service/mensaje.service';
import { ArticuloService } from '../../service/articulo.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogNuevoArticuloComponent } from 'src/app/dialogs/dialog-nuevo-articulo/dialog-nuevo-articulo.component';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  articulos = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = ['idArticulo', 'codigo', 'nombre', 'precioUnitario'];

  constructor(private articuloService: ArticuloService,
    private mensajeService: MensajeService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadArticulos();
  }

  loadArticulos(): void {
    this.articuloService.listar().subscribe({
      next: (data: any) => {
        this.articulos = data;
        this.articulos.paginator = this.paginator;
      },
      error: (error) => {
        this.mensajeService.showMessage(error);
      },
    });
  }

  openCrearArticuloDialog(): void {
    const dialogRef = this.dialog.open(DialogNuevoArticuloComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('El diálogo de creación de articulo se cerró');
    });
  }

}
