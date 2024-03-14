import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { OrdenComponent } from './pages/orden/orden.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { DialogArticulosComponent } from './dialogs/dialog-articulos/dialog-articulos.component';

import { ClienteService } from './service/cliente.service';
import { OrdenService } from './service/orden.service';
import { ArticuloService } from './service/articulo.service';

import { DialogNuevoClienteComponent } from './dialogs/dialog-nuevo-cliente/dialog-nuevo-cliente.component';
import { FormsModule } from '@angular/forms';
import { DialogEditarClienteComponent } from './dialogs/dialog-editar-cliente/dialog-editar-cliente.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogGenerarOrdenComponent } from './dialogs/dialog-generar-orden/dialog-generar-orden.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { DialogNuevoArticuloComponent } from './dialogs/dialog-nuevo-articulo/dialog-nuevo-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ClienteComponent,
    OrdenComponent,
    ArticuloComponent,
    DialogArticulosComponent,
    DialogNuevoClienteComponent,
    DialogEditarClienteComponent,
    DialogGenerarOrdenComponent,
    DialogNuevoArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [ ClienteService, OrdenService, ArticuloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
