import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { WorksService } from '../../services/works.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [],
})
export class PortfolioComponent implements OnInit {
  constructor(public workService: WorksService, public productoService: ProductosService) {}

  ngOnInit(): void {
    //console.log('HOME WORKS: ', this.workService.works);
    // LLegan vacíos los works en primera estancia al no haberse ejecutado el loadworks del servicio
  }
}
