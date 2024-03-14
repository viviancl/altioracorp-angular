import { Injectable } from '@angular/core';
import { GenericoService } from '../shared/generico.service';
import { Articulo } from '../models/articulo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService extends  GenericoService<Articulo>{

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.apiUrl}/articulos`);
  }

}
