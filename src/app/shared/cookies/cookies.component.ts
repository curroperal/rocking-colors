import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cookies',
    templateUrl: './cookies.component.html',
    styleUrls: ['./cookies.component.scss'],
})
export class CookiesComponent implements OnInit {

    isActived: boolean = true;
  

/*
 MAnejar ----
 If(!localStorage.getItem('cookies-aceptadas')){
 
    NO VOLVER A MOSTRAR COOKIES-
    avisoCookies.class -- No display.
}
 */
    constructor() {

    }

    ngOnInit(): void {

    }



}
