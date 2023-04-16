import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Work } from '../interfaces/work.interface';


@Injectable({
    providedIn: 'root'
})
export class WorksService {

    loading = true;
    works: Work[] = [];
    work!: Work;
    worksFilter: Work[] = [];

    constructor(private http: HttpClient) {
        this.loadWorks();
    }

    private loadWorks() {

        return new Promise((resolve, reject) => {
            this.http.get('https://rocking-colors-default-rtdb.europe-west1.firebasedatabase.app/works_idx.json')
                .subscribe((res: any) => {
                    console.log('SERVICE: ', res);
                    this.loading = false;
                    this.works = res;
                    resolve;
                });
        })


    }

    getWork(id: string) {
        return this.http.get(`https://rocking-colors-default-rtdb.europe-west1.firebasedatabase.app/works/${id}.json`);
    }

    getNimg(id: string) {
        return this.http.get(`https://rocking-colors-default-rtdb.europe-west1.firebasedatabase.app/works_idx/${id}.json`);
        //console.log('Probando Servicio -> ID: ', id);
    }


    buscarWork(termino: string) {
        if (this.works.length === 0) {
            this.loadWorks().then(() => {
                // ejecutar después de tener los productos
                // Aplicar filtro
                this.filtrarWorks(termino);
            })
        } else {
            // Aplicar filtro
            this.filtrarWorks(termino);
        }


    }

    private filtrarWorks(termino: string) {
        this.worksFilter = [];

        termino = termino.toLocaleLowerCase();

        console.log('HEY TERMINO', termino);

        this.works.forEach(w => {
            const tituloLower = w.titulo?.toLocaleLowerCase();
            const categoriaLower = w.categoria?.toLocaleLowerCase();
            if (categoriaLower!.indexOf(termino) >= 0 || tituloLower!.indexOf(termino) >= 0) {
                this.worksFilter.push(w);
            }
        })
    }
}
