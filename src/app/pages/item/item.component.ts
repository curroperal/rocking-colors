import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { WorkDescription } from '../../interfaces/work-description.interface';
import { Work } from '../../interfaces/work.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { WorksService } from 'src/app/services/works.service';
//import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styles: [
    ]
})
export class ItemComponent implements OnInit {

    w!: Work;
    work !: WorkDescription;
    producto!: ProductoDescripcion;
    id: string = '';
    cod: string = '';
    n_img: number = 0;
    img_main: string = '';


    constructor(private route: ActivatedRoute, public workService: WorksService, public productoService: ProductosService) { }


    ngOnInit(): void {



        this.route.params
            .subscribe(params => {
                this.workService.getWork(params['id'])
                    .subscribe((work: any) => { /* WorkDescription */
                        this.id = params['id'];
                        console.log('ID', this.id);
                        this.work = work;
                        console.log('WORK', work);

                       /*  this.cod = this.id.substr(5, 2);
                        this.workService.getNimg(this.cod); */
                    });


                /*   .subscribe((w: any) => {
                      this.w = w;

                  }); */
            });



        this.route.params
            .subscribe(params => {
                this.cod = params['id'].substr(5, 2);
                console.log('COD', this.cod);
                this.workService.getNimg(this.cod)
                    .subscribe((work: any) => {
                        this.w = work;
                        this.n_img = work.n_img;
                        this.img_main = work.img_main
                        console.log('ESTE WORK:', this.w);
                        console.log('Nº IMÁGENES:', this.n_img);
                    });

                    
            });



    }

    /* ngOnInit(): void {
      this.route.params
      .subscribe(params => {
        //console.log(params['id']);
        this.productoService.getProducto(params['id'])
        .subscribe( (producto: any) => {
          this.id = params['id'];
          console.log('ID', this.id);
          this.producto = producto;
          console.log(producto)
        });
      });
    } */

}
