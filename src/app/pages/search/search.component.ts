import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from '../../services/works.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public workService: WorksService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      console.log(params['termino']);
      this.workService.buscarWork(params['termino']);
    })
  }

}
