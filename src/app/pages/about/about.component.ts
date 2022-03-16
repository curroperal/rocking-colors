import { Component, OnInit } from '@angular/core';
import { InfoWebService } from '../../services/info-web.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor(public infoS: InfoWebService) { }

  ngOnInit(): void {
  }

}
