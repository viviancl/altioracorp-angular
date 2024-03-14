import { Articulo } from "./articulo";
import { Cliente } from "./cliente";

export class Orden {
  idOrden?: number;
  codigo?: string;
  fecha?: Date;
  cliente?: Cliente;
  articulos?: Articulo[];
}

