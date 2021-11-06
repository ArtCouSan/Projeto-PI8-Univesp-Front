import { Component, Input, OnInit } from '@angular/core';
import { PacienteDTO } from 'src/app/core/dto/paciente.dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cols: any;
  @Input() items: Array<PacienteDTO> = Array<PacienteDTO>();

  constructor() { }

  ngOnInit(): void {
  }

}
