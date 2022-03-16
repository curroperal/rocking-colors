import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando: boolean = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
            'https://rocking-colors-default-rtdb.europe-west1.firebasedatabase.app/works.json'
          
        )
        .subscribe((res: any) => {
          this.cargando = false;
          this.productos = res;
          //resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://rocking-colors-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // Cargar productos
      this.cargarProductos().then(() => {
        // Ejecutar después de tener los productos
        this.filtarProductos(termino);
      });
    } else {
      this.filtarProductos(termino);
    }
  }

  private filtarProductos(termino: string) {
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >=0
      ) {
        this.productosFiltrados.push(prod);
        //console.log('FILTRO: ',this.productosFiltrados);
      }
    });
  }
}
