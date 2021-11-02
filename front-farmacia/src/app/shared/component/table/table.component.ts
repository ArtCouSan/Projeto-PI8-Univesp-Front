import { Component, Input, OnInit } from '@angular/core';
import { FarmaciaDTO } from 'src/app/core/dto/farmacia.dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cols: any;
  @Input() items: Array<FarmaciaDTO> = Array<FarmaciaDTO>();

  constructor() { }

  ngOnInit(): void {
  }

}
