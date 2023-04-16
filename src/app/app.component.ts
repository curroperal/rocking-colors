import { Component } from '@angular/core';
import { InfoWebService } from './services/info-web.service';
import { WorksService } from './services/works.service';
import { ProductosService } from './services/productos.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    /* title = 'rocking-colors'; */

    constructor(public infoweb: InfoWebService, public worksServ: WorksService, public productosService: ProductosService) {

    }
}
