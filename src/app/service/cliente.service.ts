import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { GenericoService } from '../shared/generico.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends GenericoService<Cliente> {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.apiUrl}/clientes`);
  }

}


