import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GenericoService } from '../shared/generico.service';
import { Orden } from '../models/orden';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdenService extends GenericoService<Orden>{

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.apiUrl}/ordenes`);
  }
}
