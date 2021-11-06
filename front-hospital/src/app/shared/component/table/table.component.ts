import { Component, Input, OnInit } from '@angular/core';
import { HospitalDTO } from 'src/app/core/dto/hospital.dto';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cols: any;
  @Input() items: Array<HospitalDTO> = Array<HospitalDTO>();

  constructor() { }

  ngOnInit(): void {
  }

}
