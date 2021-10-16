import { Component, OnInit } from '@angular/core';
import { FarmaciaDTO } from 'src/app/core/dto/farmacia.dto';
import { FarmaciaService } from 'src/app/core/service/farmacia.service';

@Component({
  selector: 'app-farmacia-container-consultar',
  templateUrl: './farmacia-container-consultar.component.html',
  styleUrls: ['./farmacia-container-consultar.component.scss']
})
export class FarmaciaContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'cnpj', header: 'CNPJ', isDate: false },
    { field: 'nomeFantasia', header: 'Nome Fantasia', isDate: false }
  ];

  public items: Array<FarmaciaDTO> = Array<FarmaciaDTO>();

  constructor(private readonly farmaciaService: FarmaciaService) { }

  ngOnInit(): void {
    this.farmaciaService.listFarmacias().subscribe({
      next: resp => {
        this.items = resp;
      }
    });
  }

}
