import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericoService<T> {

  constructor(
    protected http: HttpClient,
    @Inject("url") protected url: string
  ) { }

  listar() {
    return this.http.get < T[] > (this.url).pipe(catchError(this.handleError));
  }

  listarPorId(id: number) {
    return this.http.get < T > (`${this.url}/${id}`).pipe(catchError(this.handleError));
  }

  registrar(t: T) {
    return this.http.post(this.url, t).pipe(catchError(this.handleError));
  }

  modificar(t: T) {
    return this.http.put(this.url, t).pipe(catchError(this.handleError));
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(catchError(this.handleError));
  }

  modificarPut(t: T) {
    return this.http.put(this.url, t).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    // Lógica para trabajar con el DTO de error
    if (error.error instanceof ErrorEvent) {
      // Error del cliente, como la red o el navegador
      console.error('Ocurrió un error:', error.error.message);
    } else {
      // El backend devolvió un código de estado no exitoso.
      // El cuerpo de la respuesta puede contener información útil sobre el error.
      console.error(`Código de error ${error.status}, ` + `body: ${JSON.stringify(error.error)}`);
    }
    // Devolver un observable con un mensaje de error específico
    return throwError('Algo salió mal; por favor, inténtelo de nuevo más tarde.');
  }

}
