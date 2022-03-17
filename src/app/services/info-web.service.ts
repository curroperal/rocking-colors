import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-web.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoWebService {
  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    //console.log('WEB SERVICIO LISTO!!!');

    // Leer JSON
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-web-json').subscribe((res: InfoPagina) => {
      this.cargada = true;
      this.info = res;
      //console.log(res);
    });
  }

  private cargarEquipo() {
    this.http.get('https://rocking-colors-default-rtdb.europe-west1.firebasedatabase.app/equipo.json').subscribe((res: any) => {
      this.equipo = res;
      //console.log('Cargar Equipo', res);
    });
  }
}
