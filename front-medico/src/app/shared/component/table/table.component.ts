import { Component, Input, OnInit } from '@angular/core';
import { MedicoDTO } from 'src/app/core/dto/medico.dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cols: any;
  @Input() items: Array<MedicoDTO> = Array<MedicoDTO>();

  constructor() { }

  ngOnInit(): void {
  }

}
