import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoWebService } from 'src/app/services/info-web.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public infoWebService: InfoWebService, private router: Router) {}

  ngOnInit(): void {}

  buscarProducto(termino: string) {
    //console.log('Termino: ', termino)
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }
}
