import { Component, Input, OnInit } from '@angular/core';
import { FarmaceuticoDTO } from 'src/app/core/dto/farmaceutico.dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cols: any;
  @Input() items: Array<FarmaceuticoDTO> = Array<FarmaceuticoDTO>();

  constructor() { }

  ngOnInit(): void {
  }

}
