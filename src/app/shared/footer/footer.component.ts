import { Component, OnInit } from '@angular/core';
import { InfoWebService } from 'src/app/services/info-web.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();

  constructor(public infoWebService: InfoWebService) {}

  ngOnInit(): void {}
}
