import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdenComponent } from './pages/orden/orden.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ordenes', component: OrdenComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'articulos', component: ArticuloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
