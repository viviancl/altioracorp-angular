import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, duration: number = 2000): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: duration,
    });
  }
}
